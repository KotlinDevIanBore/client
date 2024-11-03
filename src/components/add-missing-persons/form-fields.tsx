import { PersonWithoutId } from "../../types/person";

type PersonFieldNames = keyof PersonWithoutId;

 const formFields: Array<{
    name: PersonFieldNames;
    placeholder: string;
    type: string;
    required?: boolean;
  }> = [
    { name: "first_name", placeholder: "First name", type: "text", required: true },
    { name: "middle_name", placeholder: "Middle name", type: "text" },
    { name: "surname", placeholder: "Surname", type: "text", required: true },
    { name: "age", placeholder: "Age", type: "number", required: true },
    { name: "gender", placeholder: "Gender", type: "text", required: true },
    {
      name: "lastseen_location",
      placeholder: "Last seen location",
      type: "text",
      required: true,
    },
    { name: "lastseen_date", placeholder: "Last seen date", type: "date", required: true },
    { name: "contact_person", placeholder: "Contact person", type: "text", required: true },
    { name: "contact_phone", placeholder: "Contact phone", type: "tel", required: true },
    { name: "contact_email", placeholder: "Contact email", type: "email", required: true },
  ];
  export default formFields