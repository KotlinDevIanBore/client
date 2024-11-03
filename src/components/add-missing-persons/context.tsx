import { createContext, ReactNode, useState } from "react"
import { PersonWithoutId } from "../../types/person";
import formFields from "./form-fields";
import { createMissingPerson } from "../../api/api";
import useFormDataToObject from "./hooks/form-data-to-object";


export interface AddPersonContextType {

    input: Partial<PersonWithoutId>;
    handleSubmit : (e:React.FormEvent)=>void;
    formFields: Array<{
        name: keyof PersonWithoutId;
        placeholder: string;
        type: string;
        required?: boolean;
      }>;
handleChange :  (e: React.ChangeEvent<HTMLInputElement>) => void;
    

}
 const defaultValue :AddPersonContextType = {
    input :{},
    handleChange :()=>{},
    handleSubmit :()=>{},
    formFields:[]
    

}

export const AddPersonContext = createContext <AddPersonContextType>(defaultValue)


interface AddpersonProviderProps {
    children :ReactNode
}


const AddPersonProvider = ({children}:AddpersonProviderProps)=>{
    const [input, setInput] = useState<Partial<PersonWithoutId>>({});
    const { formDataToObject } = useFormDataToObject();
   

    

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        
        if (
          input.first_name ||
          input.middle_name ||
          input.surname ||
          input.age ||
          input.gender ||
          input.lastseen_location ||
          input.lastseen_date ||
          input.contact_person ||
          input.contact_phone ||
          input.contact_email
        ) {
          const formData  = new FormData();
          formFields.forEach((field) => {
            formData.append(field.name, input[field.name] as string);
          }) 
          try {


          const  formattedFormData = formDataToObject (formData)

           const response = await createMissingPerson(formattedFormData as PersonWithoutId );

           if (response.status ===200){
            alert ('missing person added')
            setInput({})

           }else {
            console.error('Error adding person in the database', response.error);
          }
          }catch(error){
            console.error ('error adding person in the database', error)
  
            throw error
          }
        }


       
       
      }
      function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { value, name } = e.target;
        setInput((prevInput) => ({ ...prevInput, [name]: value }));
      }

const contextValue: AddPersonContextType ={
    handleSubmit,
    input,
    formFields,
    handleChange ,
}




    return <AddPersonContext.Provider value={contextValue}>

        {children}
         
    </AddPersonContext.Provider>
}


export default AddPersonProvider