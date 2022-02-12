const HOUSES_ENDPOINT_2 = 'https://ancient-taiga-31359.herokuapp.com/api/houses';

class HousesApi {
    create = async (house) => {
        console.log("inside");
        console.log("right now house is: " + house);
        try {
            const resp = await fetch(`${HOUSES_ENDPOINT_2}`, {
                method: 'POST',
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify(house)
            });
            return resp;
        } catch(e){
            console.log("error with create", e);
        }
    }

    get = async () => {
        try{
        const resp = await fetch(HOUSES_ENDPOINT_2);
        const data = await resp.json();
        return data; 
        } catch(e) {
            console.log("Problem with fetch", e);
        }
    }


    put = async (house) => {
        try {
            const resp = await fetch(`${HOUSES_ENDPOINT_2}/${house._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify(house)
            });
            return await resp.json();
        } catch(e){
            console.log("problem with update", e);
        }
    }

    delete = async (house) => {
        try {
            const resp = await fetch(`${HOUSES_ENDPOINT_2}/${house._id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify(house)
            });
            return await resp.json();
        } catch(e){
            console.log("problem with delete", e);
        }
    }
}

export const housesApi = new HousesApi(); 