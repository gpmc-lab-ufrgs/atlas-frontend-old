import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { useComparison } from '@context/comparisonContext';
import ComparisonSection from './ComparisonSection';
import DataSection from './DataSection';
import { useLocation } from 'react-router-dom';

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

  const location = useLocation();
  const { pathname } = location;
  const isEnglish = pathname.includes('/en');

  return (
    <Box>
      {comparison.length > 0 && <ComparisonSection />}
      {loading ? (
        <p style={{ color: 'white' }}>Loading...</p>
      ) : (
        data
          .sort((a, b) => {
            // Define the order of sections
            const sectionOrder = isEnglish
              ? [
                  'Demographic',
                  'Economy',
                  'Entrepreneurship',
                  'Education',
                  'Health',
                  'Safety',
                  'Urbanism',
                  'Technology and inovation',
                  'Environment',
                  'Mobility'
                ]
              : [
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
              title={isEnglish ? section.title_english : section.title}
              content={section.content.map((item, idx) => ({
                label: item.label,
                title: isEnglish ? item.title_en : item.title,
                description: isEnglish ? item.description_en : item.description,
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
