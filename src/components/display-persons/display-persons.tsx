import { useDisplayPersonsContext } from "./hooks/useContext";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { Person } from "../../types/person";

interface PersonCardProps {
  person: Person;
}

const PersonCard = ({ person }: PersonCardProps) => {
  const [imageError, setImageError] = useState(false);
  
  const handleEmailClick = (email:string) => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="relative mb-4">
        {!imageError ? (
          <img
            src={person.image_url}
            alt={`${person.first_name} ${person.surname}`}
            className="w-full rounded-md max-h-[500px] object-contain"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-64 bg-gray-200 flex items-center justify-center rounded-md">
            <span className="text-gray-500">Image unavailable</span>
          </div>
        )}
      </div>

      <h2 className="text-xl font-semibold mb-2">
        {person.first_name} {person.middle_name} {person.surname}
      </h2>
      
      <div className="mb-4">
        <p className="text-gray-700">Age: {person.age}</p>
        <p className="text-gray-700">Gender: {person.gender}</p>
      </div>

      <div className="mb-4">
        <h3 className="font-semibold text-lg">Last Seen</h3>
        <p className="text-gray-700">Location: {person.lastseen_location}</p>
        <p className="text-gray-700">Date: {person.lastseen_date}</p>
      </div>

      <div>
        <h3 className="font-semibold text-lg">Contact Information</h3>
        <p className="text-gray-700">Contact: {person.contact_person}</p>
        <p className="text-gray-700">Phone: {person.contact_phone}</p>
        <button
          onClick={() => handleEmailClick(person.contact_email)}
          className="text-blue-600 hover:underline focus:outline-none"
        >
          Contact via email
        </button>
      </div>
    </div>
  );
};

const DisplayPersons = () => {
  const { missingPersons, isLoading } = useDisplayPersonsContext();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="animate-spin h-8 w-8 text-gray-500" />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {missingPersons.map((person) => (
        <PersonCard key={person.id} person={person} />
      ))}
      {missingPersons.length === 0 && (
        <div className="col-span-full text-center text-gray-500 py-8">
          No missing persons found
        </div>
      )}
    </div>
  );
};

export default DisplayPersons;