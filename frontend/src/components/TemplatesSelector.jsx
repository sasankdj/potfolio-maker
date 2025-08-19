import React from 'react';

const templates = [
  { id: 1, name: "Template One" },
  { id: 2, name: "Template Two" },
];

function TemplateSelector({ selectedTemplate, setSelectedTemplate }) {
  return (
    <div className="p-4 text-center">
      <h3 className="text-xl font-semibold mb-4">Select a Template</h3>
      {templates.map(template => (
        <button
          key={template.id}
          onClick={() => setSelectedTemplate(template.id)}
          className={`mx-3 my-1 px-6 py-3 rounded border ${selectedTemplate === template.id ? 'border-blue-600 bg-blue-200' : 'border-gray-400'}`}
        >
          {template.name}
        </button>
      ))}
    </div>
  );
}

export default TemplateSelector;
