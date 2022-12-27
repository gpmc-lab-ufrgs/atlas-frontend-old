import geosesData from '@data/StateData.json';
import Bar from './Bar';

const MetricStateDetails = ({ state, metric }: any) => {
  const renderSingleMetric = () => {
    // @ts-ignore
    if (!geosesData[state?.properties.CD_UF]) return;

    // @ts-ignore
    const rawValue = geosesData[state?.properties.CD_UF][metric.label];
    const value = metric.format(rawValue);

    switch (metric.type) {
      case 'bar':
        return <Bar rawValue={rawValue} metric={metric} id={state.properties.CD_UF} />;
      default:
        return (
          <div key={state.properties.CD_UF}>
            <data value={rawValue}>{value}</data>
          </div>
        );
    }
  };

  return <div>{renderSingleMetric()}</div>;
};

export default MetricStateDetails;
