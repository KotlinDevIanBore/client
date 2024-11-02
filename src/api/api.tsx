import { APIURL } from "./base-url";

export async function getMissingPersons() {


    const url = `${APIURL}/api/persons`

    try {

        const response = await fetch (url)

        if (!response.ok){

            throw new Error(`HTTP error! status: ${response.status}`);

        }
        const data = await response.json();

    return data



    }
    catch (error){


        console.error ("error fetching missing persons", error)


    }



   


}