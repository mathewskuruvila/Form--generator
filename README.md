<div className="max-w-md mx-auto mt-8">
      <form className="space-y-4">
        {formFields.map((field, index) => (
          <div key={index}>
            <label className="block" htmlFor={field.label}>
              {field.label}
            </label>
            {field.type === 'text' ? (
              <input
                type="text"
                id={field.label}
                placeholder={field.placeholder}
                className="input-field"
              />
            ) : (
              <input
                type="number"
                id={field.label}
                placeholder={field.placeholder}
                className="input-field"
              />
            )}
          </div>
        ))}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
