import React from "react";

function FormInputs({ formData, setFormData }) {
  // Handle change for simple inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Work Items
  const addWorkItem = () => {
    const workItems = [...(formData.workItems || [])];
    workItems.push({
      title: "",
      description: "",
      goals: "",
      role: "",
      technologies: "",
      process: "",
      results: "",
      projectLink: "",
    });
    setFormData((prev) => ({ ...prev, workItems }));
  };

  const removeWorkItem = (index) => {
    const workItems = [...(formData.workItems || [])];
    workItems.splice(index, 1);
    setFormData((prev) => ({ ...prev, workItems }));
  };

  const handleWorkChange = (index, e) => {
    const { name, value } = e.target;
    const workItems = [...(formData.workItems || [])];
    workItems[index] = { ...workItems[index], [name]: value };
    setFormData((prev) => ({ ...prev, workItems }));
  };

  // Testimonials
  const addTestimonial = () => {
    const testimonials = [...(formData.testimonials || [])];
    testimonials.push({
      quote: "",
      name: "",
      title: "",
      company: "",
    });
    setFormData((prev) => ({ ...prev, testimonials }));
  };

  const removeTestimonial = (index) => {
    const testimonials = [...(formData.testimonials || [])];
    testimonials.splice(index, 1);
    setFormData((prev) => ({ ...prev, testimonials }));
  };

  const handleTestimonialChange = (index, e) => {
    const { name, value } = e.target;
    const testimonials = [...(formData.testimonials || [])];
    testimonials[index] = { ...testimonials[index], [name]: value };
    setFormData((prev) => ({ ...prev, testimonials }));
  };

  return (
    <div className="flex flex-col space-y-4 max-w-3xl mx-auto p-4">
      {/* Header / Navigation */}
      <h2 className="text-xl font-semibold">Header / Navigation</h2>
      <input
        type="text"
        name="headerName"
        placeholder="Name or Logo text"
        value={formData.headerName || ""}
        onChange={handleChange}
        className="border p-2 rounded w-full"
      />
      <input
        type="text"
        name="navLinks"
        placeholder="Navigation Links (comma separated e.g., Home,About)"
        value={formData.navLinks || ""}
        onChange={handleChange}
        className="border p-2 rounded w-full"
      />

      {/* Hero Section */}
      <h2 className="text-xl font-semibold mt-6">Hero Section</h2>
      <input
        type="text"
        name="heroHeadline"
        placeholder="Headline"
        value={formData.heroHeadline || ""}
        onChange={handleChange}
        className="border p-2 rounded w-full"
      />
      <input
        type="text"
        name="heroCTA"
        placeholder="Call to Action (e.g., Get Started)"
        value={formData.heroCTA || ""}
        onChange={handleChange}
        className="border p-2 rounded w-full"
      />

      {/* About Me */}
      <h2 className="text-xl font-semibold mt-6">About Me</h2>
      <textarea
        name="professionalBio"
        placeholder="Professional Bio"
        value={formData.professionalBio || ""}
        onChange={handleChange}
        className="border p-2 rounded w-full"
        rows={4}
      />
      <input
        type="text"
        name="skills"
        placeholder="Skills / Expertise (comma separated)"
        value={formData.skills || ""}
        onChange={handleChange}
        className="border p-2 rounded w-full"
      />
      <input
        type="text"
        name="personalPhoto"
        placeholder="Personal Photo URL"
        value={formData.personalPhoto || ""}
        onChange={handleChange}
        className="border p-2 rounded w-full"
      />

      {/* Portfolio / Work */}
      <h2 className="text-xl font-semibold mt-6">Portfolio / Work</h2>
      {(formData.workItems || []).map((work, index) => (
        <div
          key={index}
          className="border p-4 rounded mb-4 bg-gray-50 relative"
        >
          <button
            type="button"
            onClick={() => removeWorkItem(index)}
            className="absolute top-2 right-2 text-red-500 font-bold"
            aria-label="Remove project"
          >
            ×
          </button>
          <input
            name="title"
            placeholder="Project Title"
            value={work.title}
            onChange={(e) => handleWorkChange(index, e)}
            className="border p-2 rounded w-full mb-2"
          />
          <textarea
            name="description"
            placeholder="Brief Description"
            value={work.description}
            onChange={(e) => handleWorkChange(index, e)}
            className="border p-2 rounded w-full mb-2"
            rows={2}
          />
          <input
            name="goals"
            placeholder="Project Goals"
            value={work.goals}
            onChange={(e) => handleWorkChange(index, e)}
            className="border p-2 rounded w-full mb-2"
          />
          <input
            name="role"
            placeholder="Your Role"
            value={work.role}
            onChange={(e) => handleWorkChange(index, e)}
            className="border p-2 rounded w-full mb-2"
          />
          <input
            name="technologies"
            placeholder="Technologies Used"
            value={work.technologies}
            onChange={(e) => handleWorkChange(index, e)}
            className="border p-2 rounded w-full mb-2"
          />
          <input
            name="process"
            placeholder="Process / Approach"
            value={work.process}
            onChange={(e) => handleWorkChange(index, e)}
            className="border p-2 rounded w-full mb-2"
          />
          <input
            name="results"
            placeholder="Results / Impact"
            value={work.results}
            onChange={(e) => handleWorkChange(index, e)}
            className="border p-2 rounded w-full mb-2"
          />
          <input
            name="projectLink"
            placeholder="Project Link (Live or GitHub)"
            value={work.projectLink}
            onChange={(e) => handleWorkChange(index, e)}
            className="border p-2 rounded w-full mb-2"
          />
        </div>
      ))}
      <button
        type="button"
        onClick={addWorkItem}
        className="self-start bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        + Add More Work
      </button>

      {/* Testimonials */}
      <h2 className="text-xl font-semibold mt-10">Testimonials</h2>
      {(formData.testimonials || []).map((testi, index) => (
        <div
          key={index}
          className="border p-4 rounded mb-4 bg-gray-50 relative"
        >
          <button
            type="button"
            onClick={() => removeTestimonial(index)}
            className="absolute top-2 right-2 text-red-500 font-bold"
            aria-label="Remove testimonial"
          >
            ×
          </button>
          <textarea
            name="quote"
            placeholder="Client Quote"
            value={testi.quote}
            onChange={(e) => handleTestimonialChange(index, e)}
            className="border p-2 rounded w-full mb-2"
            rows={3}
          />
          <input
            name="name"
            placeholder="Client Name"
            value={testi.name}
            onChange={(e) => handleTestimonialChange(index, e)}
            className="border p-2 rounded w-full mb-2"
          />
          <input
            name="title"
            placeholder="Client Title"
            value={testi.title}
            onChange={(e) => handleTestimonialChange(index, e)}
            className="border p-2 rounded w-full mb-2"
          />
          <input
            name="company"
            placeholder="Client Company"
            value={testi.company}
            onChange={(e) => handleTestimonialChange(index, e)}
            className="border p-2 rounded w-full mb-2"
          />
        </div>
      ))}
      <button
        type="button"
        onClick={addTestimonial}
        className="self-start bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        + Add More Testimonials
      </button>

      {/* Contact */}
      <h2 className="text-xl font-semibold mt-10">Contact</h2>
      <input
        type="email"
        name="email"
        placeholder="Your Email Address"
        value={formData.email || ""}
        onChange={handleChange}
        className="border p-2 rounded w-full"
      />
      <input
        type="text"
        name="socialLinks"
        placeholder="Social Links (comma separated)"
        value={formData.socialLinks || ""}
        onChange={handleChange}
        className="border p-2 rounded w-full"
      />
    </div>
  );
}

export default FormInputs;
