import React, { useEffect, useState } from 'react';

const DynamicForm = () => {
  const [fields, setFields] = useState([]);

  useEffect(() => {
    fetch('/config.json')
      .then((response) => response.json())
      .then((data) => {
        setFields(data.fields);
      })
      .catch((error) => {
        console.error('Error fetching config.json:', error);
      });
  }, []);

  return (
    <div className="container mx-auto p-6">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Personal Information</h2>
          <hr className="mb-4" />
          {fields.map((field) => (
            <div key={field.label} className="mb-4">
              {field.label}
              <input
                type={field.type}
                className="w-full px-3 py-2 placeholder-gray-500 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder={field.placeholder}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default DynamicForm;