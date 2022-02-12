import React from "react";
import { housesApi } from "../REST/HousesApi";
import { NewRoomForm } from './NewRoomForm';

export const House = (props) => {
    const {house, updateHouse} = props;

    const deleteHouse = async (houseId) => {
        await housesApi.delete(house);
        updateHouse(house)
    }

    const deleteRoom = (roomId) => {
        const updatedHouse = {
            ...house,
            rooms: house.rooms.filter((x) => x._id !== roomId)
        };
        updateHouse(updatedHouse);
    }

    const addNewRoom = (room) => updateHouse({ ...house, rooms: [...house.rooms, room]});

    const rooms = () => (
        <ul>
            {house.rooms.map((room, index) => (
                <li key={index}>
                    <div className="row">
                        <div className="col-6">
                            <label>{`${room.name}`}</label>
                        </div>
                        <div className="col-6">
                            <label>{`${room.area} sq. ft.`}</label>
                            <button type="button" className="btn btn-info float-end" onClick={(e) => deleteRoom(room._id)}>Delete</button>
                        </div>
                       <hr></hr>
                    </div>
                </li>
            ))}
        </ul>
    );

    return (
        <div className="card w-75">
            <h2 className="card-header">
                {house.name}
                <button type="button" className="btn btn-info float-end" onClick={(e) => deleteHouse(house._id)}>Delete</button>
            </h2>
            <div className="card-body">
                <div className="container-fluid">
                {
                    rooms({ rooms, houseId: house._id, deleteRoom})
                }
                </div>
            </div>
            <div className="card-footer">
                <NewRoomForm addNewRoom={addNewRoom} />
            </div>
        </div>
    );
}