import React from "react";
import {House} from "./House";
import { housesApi } from "../REST/HousesApi";
import { NewHouseForm } from "./NewHouseForm";

export default class HousesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            houses: []
        };
        this.fetchHouses = this.fetchHouses.bind(this)
    }

    componentDidMount() {
        this.fetchHouses();
    };

    fetchHouses = async () => {
        const houses = await housesApi.get();
        this.setState({ houses });
        console.log(this.state)
    };

    updateHouse = async (updatedHouse) => {
        await housesApi.put(updatedHouse);
        this.fetchHouses();
    };

    render() {
        return (
            <div>
                <NewHouseForm getHouse = {this.fetchHouses} />
                <div className="house-list d-flex flex-wrap justify-content-center">
                    {this.state.houses.map((house) => (
                        <House
                            house = {house} key = {house._id}
                            updateHouse = {this.updateHouse}
                        />
                    ))}
                </div>
            </div>
        )
    }
}