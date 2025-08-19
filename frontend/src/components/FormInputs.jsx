import React from 'react';

function FormInputs({ formData, setFormData }) {
  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="flex flex-col space-y-4 max-w-md mx-auto p-4">
      <label className="font-semibold">Name:</label>
      <input
        name="name"
        className="border p-2 rounded"
        value={formData.name}
        onChange={handleChange}
      />

      <label className="font-semibold">About:</label>
      <textarea
        name="about"
        className="border p-2 rounded"
        value={formData.about}
        onChange={handleChange}
      />

      <label className="font-semibold">Skills:</label>
      <input
        name="skills"
        className="border p-2 rounded"
        value={formData.skills}
        onChange={handleChange}
      />

      <label className="font-semibold">Projects:</label>
      <textarea
        name="projects"
        className="border p-2 rounded"
        value={formData.projects}
        onChange={handleChange}
      />
    </div>
  );
}

export default FormInputs;
