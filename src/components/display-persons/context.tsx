import { createContext, ReactNode, useEffect, useState } from "react";
import { getMissingPersons } from "../../api/api";
import { Person } from "../../types/person";

interface PersonContextType {

    missingPersons:Person [];
    isLoading :boolean;
    error :string|null;
}


const defaultValue: PersonContextType = {
    missingPersons: [],
    isLoading: false,
    error: null
};



export const DisplayPersonsContext = createContext<PersonContextType>(defaultValue);



interface DisplayPersonsProviderProps {

    children:ReactNode
}

const DisplayPersonsProvider = ({children}:DisplayPersonsProviderProps)=>{

    const [missingPersons,setMissingPersons] = useState <Person[]> ([])

    const [isLoading,setIsLoading] = useState (false)

    const [error, setError] = useState<string | null>(null);


    useEffect(() => {
        async function fetchMissingPersons() {
            setIsLoading(true);
            try {
                const fetchedPersons = await getMissingPersons();
                setMissingPersons(fetchedPersons);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An error occurred');
            } finally {
                setIsLoading(false);
            }
        }

        fetchMissingPersons();
    }, []);



    return <DisplayPersonsContext.Provider value={{missingPersons,isLoading,error}}>

        {children}

    </DisplayPersonsContext.Provider>
}


export default DisplayPersonsProvider