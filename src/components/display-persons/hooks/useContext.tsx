
import { useContext } from "react"
import { DisplayPersonsContext } from "../context"

export const useDisplayPersonsContext = ()=>{

    const context = useContext(DisplayPersonsContext)



    if (!context){

        

        throw new Error ('Issue using the display persons context ')
    }


    return context

}