import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { useComparison } from '@context/comparisonContext';
import ComparisonSection from './ComparisonSection';
import DataSection from './DataSection';

const RegionDetails = () => {
  const { comparison } = useComparison();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://3.92.188.34:8001/dictionary/dictionary/json/');
      const json = await response.json();
      setData(json);
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
  <Box>
    {comparison.length > 0 && <ComparisonSection />}
    {loading ? (
      <p style={{ color: 'white' }}>Loading...</p>
    ) : (
      data
        .sort((a, b) => {
          // Define the order of sections
          const sectionOrder = [
            'Demográfica',
            'Economia',
            'Empreendedorismo',
            'Educação',
            'Saúde',
            'Segurança',
            'Urbanismo',
            'Tecnologia e Inovação',
            'Meio Ambiente',
            'Mobilidade'
          ];

          // Compare the index of the sections in the predefined order
          return sectionOrder.indexOf(a.title) - sectionOrder.indexOf(b.title);
        })
        .map((section, id) => (
          <DataSection
            key={id}
            title={section.title}
            content={section.content.map((item, idx) => ({
              label: item.label,
              title: item.title,
              description: item.description,
              format: item.format,
              unit: item.unit,
              type: item.type,
            }))}
          />
        ))
    )}
  </Box>
);
};

export default RegionDetails;
