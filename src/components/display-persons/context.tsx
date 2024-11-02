import { createContext, ReactNode, useEffect, useState } from "react";
import { getMissingPersons } from "../../api/api";




const defaultValue = {};

const displayPersonsContext = createContext(defaultValue);



interface DisplayPersonsProviderProps {

    children:ReactNode
}

const DisplayPersonsProvider = ({children}:DisplayPersonsProviderProps)=>{

    const [missingPersons,setMissingPersons] = useState ([])


    useEffect(()=>{

        async function fetchMissingPersons(){const missingPersons = await getMissingPersons();

            setMissingPersons (missingPersons)
         }

        fetchMissingPersons()


    }, [])



    return <displayPersonsContext.Provider value={missingPersons}>

        {children}

    </displayPersonsContext.Provider>
}


export default DisplayPersonsProvider