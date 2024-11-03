import AddPerson from "./add-person";
import AddPersonProvider from "./context";

const AddPersonWrapper = () => {
    return (
      <div>
        <AddPersonProvider>

            <AddPerson/>
        </AddPersonProvider>
        

      </div>
    );
  }
  
  export default AddPersonWrapper;
  