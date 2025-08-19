import React, { useState } from 'react';
import FormInputs from '../components/FormInputs';
import TemplateSelector from '../components/TemplatesSelector';

function FormPage() {
  const [formData, setFormData] = useState({
    name: '',
    about: '',
    skills: '',
    projects: '',
  });
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const handleGenerate = () => {
    // Save data to localStorage to access in new window
    localStorage.setItem('portfolioData', JSON.stringify(formData));
    localStorage.setItem('portfolioTemplate', selectedTemplate);
    // Open new tab to show portfolio
    window.open('/portfolio', '_blank');
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Create Your Portfolio</h1>
      <FormInputs formData={formData} setFormData={setFormData} />
      <TemplateSelector selectedTemplate={selectedTemplate} setSelectedTemplate={setSelectedTemplate} />
      <div className="text-center mt-6">
        <button
          onClick={handleGenerate}
          disabled={!selectedTemplate || !formData.name}
          className={`px-6 py-3 rounded font-semibold text-white ${!selectedTemplate || !formData.name ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}
        >
          Generate Portfolio
        </button>
      </div>
    </div>
  );
}

export default FormPage;
