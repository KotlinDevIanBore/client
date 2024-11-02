import { useDisplayPersonsContext } from "./hooks/useContext";

const DisplayPersons = () => {
  const { missingPersons, isLoading } = useDisplayPersonsContext();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {missingPersons.map((person) => (
          <div
            key={person.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300"
          >
            <div className="p-6">
              {/* Header Section */}
              <div className="border-b pb-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  {person.first_name} {person.middle_name} {person.surname}
                </h2>
                <div className="flex gap-4 mt-2 text-gray-600">
                  <span>Age: {person.age}</span>
                  <span>Gender: {person.gender}</span>
                </div>
              </div>

              {/* Last Seen Section */}
              <div className="  py-4 border-b">
                <h3 className="text-md font-medium text-gray-700 mb-2">Last Seen</h3>
                <p className="text-gray-600">Location: {person.lastseen_location}</p>
                <p className="text-gray-600">Date: {person.lastseen_date}</p>
              </div>

              {/* Contact Section */}
              <div className="pt-4">
                <h3 className="text-md font-medium text-gray-700 mb-2">Contact Information</h3>
                <div className="space-y-1">
                  <p className="text-gray-600">Contact: {person.contact_person}</p>
                  <p className="text-gray-600">
                    <span className="font-medium">Phone: </span>
                    <a href={`tel:${person.contact_phone}`} className="text-blue-600 hover:text-blue-800">
                      {person.contact_phone}
                    </a>
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">Email: </span>
                    <a href={`mailto:${person.contact_email}`} className="text-blue-600 hover:text-blue-800">
                      {person.contact_email}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {missingPersons.length === 0 && (
        <div className="text-center text-gray-600 mt-8">
          No missing persons found
        </div>
      )}
    </div>
  );
};

export default DisplayPersons;