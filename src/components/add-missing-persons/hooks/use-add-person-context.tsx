import { useContext } from "react"
import { AddPersonContext, AddPersonContextType } from "../context"

const useAddPersonContext = (): AddPersonContextType => {


    const context = useContext(AddPersonContext)

    if (!context){
        throw new Error ('Issue using the add person context')
    }


    return context

  
}

export default useAddPersonContext
