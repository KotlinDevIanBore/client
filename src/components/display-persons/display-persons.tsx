import { useContext } from "react"
import { DisplayPersonsContext } from "./context"

const DisplayPersons = () => {


  const {missingPersons} = useContext(DisplayPersonsContext)
  return (


    <div>

      <p>List of missing  persons goes here</p>


      {missingPersons.map((person) => <p>{person.first_name} goes here</p>)}
      
    </div>
  )
}

export default DisplayPersons
