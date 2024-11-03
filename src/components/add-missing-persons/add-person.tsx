import React, { useState } from "react";
import { PersonWithoutId } from "../../types/person";

const AddPerson = () => {
  type PersonFieldNames = keyof PersonWithoutId;
  const [input, setInput] = useState<Partial<PersonWithoutId>>({});

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

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { value, name } = e.target;
    setInput((prevInput) => ({ ...prevInput, [name]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
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
      const formData = new FormData();
      formFields.forEach((field) => {
        formData.append(field.name, input[field.name] as string);
      }) 
      // Handle form submission here
    }
   
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6 sm:p-8">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Missing Person Report</h2>
            <p className="text-lg text-gray-600">
              We'll help you find your missing person. Please fill in the form below.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {formFields.map((field, index) => (
                <div key={index} className="relative">
                  <input
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    required={field.required}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors placeholder-gray-400 text-gray-900"
                  />
                </div>
              ))}
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
              >
                Submit Details
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddPerson;