import React, { useContext, useState } from 'react';
import { store } from '../App'
import classic from '../assets/classic-light.png'
import darktheme from '../assets/darktheme.png'

const templates = [
  {
    id: 1,
    name: 'Classic - light',
    description: 'A clean and timeless portfolio layout.',
    thumbnail: classic,
    link:"/templates/ClassicTheme.html",
  },
  {
    id: 2,
    name: 'Dark theme',
    description: 'Sleek and minimalistic design with bold typography.',
    thumbnail: darktheme,
    link:"/templates/DarkTeme.html",
  },
  // {
  //   id: 3,
  //   name: 'Creative',
  //   description: 'Colorful and artistic for creative professionals.',
  //   thumbnail: 'https://via.placeholder.com/300x200?text=Creative',
  // },
  // {
  //   id: 4,
  //   name: 'Photography',
  //   description: 'Image-centric layout for photographers and visual artists.',
  //   thumbnail: 'https://via.placeholder.com/300x200?text=Photography',
  // },
];

function TemplatesPage() {
  const {selectedTemplateId, setSelectedTemplateId} = useContext(store);


  const handleSelect = (id) => {
    setSelectedTemplateId(id);
  };

  const handleContinue = () => {
    if (selectedTemplateId) {
      // Save selected template in localStorage or global state
      localStorage.setItem('selectedTemplate', selectedTemplateId);
      // Navigate to the portfolio creation form page
      navigate('/form');
    } else {
      alert('Please select a template first.');
    }
  };
  const { navigate } = useContext(store)
  return (
    <div className="max-w-6xl mx-auto py-8 px-4 flex flex-col justify-center">
      
<div class="mt-6 flex justify-start" onclick={()=>navigate("/")}>
  <button onclick={()=>navigate("/")} 
    class="px-6 py-3 border-2 border-gray-600 text-gray-600 rounded-lg hover:bg-gray-600 hover:text-white transition duration-300 font-medium flex items-center">
    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
            d="M15 19l-7-7 7-7"></path>
    </svg>
    Back
  </button>
</div>

      <h2 className="text-3xl font-bold mb-6 text-center">Choose Your Template</h2>
      <div className=" grid grid-cols-1 place-content-center md:grid-cols-2 lg:grid-cols-2 gap-6">
        {templates.map(template => (
          <div
            key={template.id}
            className={`border rounded-lg cursor-pointer hover:shadow-lg transition transform hover:scale-[1.03] duration-300 ${selectedTemplateId === template.id ? 'border-blue-600 shadow-xl' : 'border-gray-300'
              } bg-white`}
            onClick={() => handleSelect(template.id)}
          >
            <img
              src={template.thumbnail}
              alt={`${template.name} template thumbnail`}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800">{template.name}</h3>
              <p className="text-gray-600 mt-3 mb-6 leading-relaxed">{template.description}</p>
              <div className="flex gap-4">
                <button
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(template.link, '_blank');
                  }}
                >
                  Preview
                </button>
                <button
                  className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate("/form")
                  }}
                >
                  Click to choose
                </button>
              </div>
            </div>
          </div>


        ))}
      </div>
      <div className="text-center mt-8">
        <button
          onClick={handleContinue}
          className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default TemplatesPage;
