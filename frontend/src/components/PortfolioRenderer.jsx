import React from 'react';

function PortfolioRenderer({ formData, templateId }) {
  if (templateId === 1) {
    return (
      <div className="p-8 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{formData.name}</h1>
        <p className="mb-6">{formData.about}</p>
        <h3 className="text-2xl font-semibold mb-2">Skills</h3>
        <p className="mb-6">{formData.skills}</p>
        <h3 className="text-2xl font-semibold mb-2">Projects</h3>
        <p>{formData.projects}</p>
      </div>
    );
  } else if (templateId === 2) {
    return (
      <div className="p-8 max-w-3xl mx-auto font-sans">
        <header className="border-b border-gray-300 mb-6">
          <h1 className="text-5xl font-extrabold py-2">{formData.name}</h1>
        </header>
        <section className="mb-6">
          <h2 className="text-3xl font-bold mb-2">About Me</h2>
          <p className="text-lg">{formData.about}</p>
        </section>
        <section className="mb-6">
          <h2 className="text-3xl font-bold mb-2">My Skills</h2>
          <p className="text-lg">{formData.skills}</p>
        </section>
        <section>
          <h2 className="text-3xl font-bold mb-2">Projects</h2>
          <p className="text-lg">{formData.projects}</p>
        </section>
      </div>
    );
  } else {
    return <p className="p-8 text-center">Please select a template</p>;
  }
}

export default PortfolioRenderer;
