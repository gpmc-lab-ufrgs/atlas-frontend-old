import React from 'react';
import Chart from 'chart.js/auto';

const Graphic = ({ region }) => {
    const chartRef = React.useRef(null);
    const chartInstanceRef = React.useRef(null);
    const [populationData, setPopulationData] = React.useState([]);

    React.useEffect(() => {
        if (region) {
            if (chartInstanceRef.current) {
                chartInstanceRef.current.destroy();
            }

            const chartCanvas = chartRef.current.getContext('2d');

            const chartData = {
                labels: ['2017', '2018', '2019', '2020', '2021'],
                datasets: [{
                    label: 'População estimada',
                    data: populationData, // Use the fetched population data here
                    borderColor: '#7B4BB2',
                    fill: false
                }]
            };

            chartInstanceRef.current = new Chart(chartCanvas, {
                type: 'line',
                data: chartData,
                options: {}
            });
        }
    }, [region, populationData]);

    React.useEffect(() => {
        if (region) {
            fetch(`http://3.92.188.34:8001/data/data_city_dicio/json/?cd_mun=${region.properties.CD_MUN}`)
                .then(response => response.json())
                .then(data => {
                    const populationValues = [
                        parseFloat(data[region.properties.CD_MUN].populacao_estimada_2017.value),
                        parseFloat(data[region.properties.CD_MUN].populacao_estimada_2018.value),
                        parseFloat(data[region.properties.CD_MUN].populacao_estimada_2019.value),
                        parseFloat(data[region.properties.CD_MUN].populacao_estimada_2020.value),
                        parseFloat(data[region.properties.CD_MUN].populacao_estimada_2021.value)
                    ];
                    setPopulationData(populationValues);
                })
                .catch(error => {
                    console.error('Error fetching population data:', error);
                });
        }
    }, [region]);

    const canvasStyle = {
        width: '200px', // Adjust as needed
        height: '150px' // Adjust as needed
    };

    return (
        <div key={region?.properties.CD_MUN}>
            <canvas ref={chartRef} style={canvasStyle}></canvas>
        </div>
    );
};

export default Graphic;
