import useAddPersonContext from "./hooks/use-add-person-context";

const AddPerson = () => {
  const { handleChange, handleSubmit, formFields } = useAddPersonContext();

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6 sm:p-8">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Missing Person Report
            </h2>
            <p className="text-lg text-gray-600">
              We'll help you find your missing person. Please fill in the form below.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {formFields.map((field, index) => (
                <div key={index} className="space-y-2">
                  <label 
                    htmlFor={field.name} 
                    className="block text-sm font-medium text-gray-700"
                  >
                    {field.placeholder}
                    {field.required && <span className="text-red-500 ml-1">*</span>}
                  </label>
                  <input
                    id={field.name}
                    type={field.type}
                    name={field.name}
                    required={field.required}
                    onChange={handleChange}
                    className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-gray-900 outline-none text-base"
                    placeholder={`Enter ${field.placeholder.toLowerCase()}`}
                  />
                </div>
              ))}
            </div>

            <div className="space-y-2">
              <label 
                htmlFor="image_url" 
                className="block text-sm font-medium text-gray-700"
              >
                Upload Photo
              </label>
              <div className="relative">
                <input
                  id="image_url"
                  type="file"
                  name="image_url"
                  accept="image/*"
                  onChange={handleChange}
                  className="block w-full text-sm text-gray-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-md file:border-0
                    file:text-sm file:font-medium
                    file:bg-blue-50 file:text-blue-700
                    hover:file:bg-blue-100
                    cursor-pointer"
                />
              </div>
              <p className="text-sm text-gray-500 mt-1">
                Accepted formats: JPG, PNG, GIF (max. 5MB)
              </p>
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