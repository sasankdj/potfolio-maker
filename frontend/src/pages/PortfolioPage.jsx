import React, { useEffect, useState } from 'react';
import PortfolioRenderer from '../components/PortfolioRenderer';

function PortfolioPage() {
  const [formData, setFormData] = useState(null);
  const [templateId, setTemplateId] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('portfolioData'));
    const template = parseInt(localStorage.getItem('portfolioTemplate'), 10);
    setFormData(data);
    setTemplateId(template);
  }, []);

  if (!formData || !templateId) {
    return <p className="p-8 text-center">Loading portfolio...</p>;
  }

  return <PortfolioRenderer formData={formData} templateId={templateId} />;
}

export default PortfolioPage;
