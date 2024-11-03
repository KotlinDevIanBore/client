import { PersonWithoutId } from "../types/person";
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
        throw error;


    }



   


}

export async function createMissingPerson(formData: FormData) {
    const url = `${APIURL}/api/persons`;

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: formData,
        });

        if (!response.ok) {
            const errorData = await response.json(); 
            return { status: response.status, error: errorData }; 
        }

        const data = await response.json();
        return { status: response.status, data };
    } catch (error) {
        console.error("Error creating person", error);
        return { status: 500, error: { message: "Internal Server Error" } }; 
    }
}
export async function createMissingPersonTest(formData: PersonWithoutId) {
    const url = `${APIURL}/api/persons`;

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            const errorData = await response.json(); 
            return { status: response.status, error: errorData }; 
        }

        const data = await response.json();
        return { status: response.status, data };
    } catch (error) {
        console.error("Error creating person", error);
        return { status: 500, error: { message: "Internal Server Error" } }; 
    }
}