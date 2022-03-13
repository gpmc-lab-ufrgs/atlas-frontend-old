// import RangeBar from "./charts/RangeBar";
import { SolidBar } from "../Charts";
import geosesData from "../../data/GeoSesObject.json";
// import LineChartMetric from "./charts/LineChartMetric";

const MetricDetails = ({ feature, metric, small }: any) => {
  const renderSingleMetric = () => {
    // @ts-ignore
    let rawValue = geosesData[feature?.properties.CD_MUN][metric.label];
    const value = metric.format(rawValue);
    const name = metric.description;
    const width = small ? 115 : undefined;

    switch (metric.type) {
      /*case 'range':
        return (
          <div key={feature.properties.NM_MUN} className="comparison-bar">
            <label title={name} data-value={rawValue}>{name}</label>
            <RangeBar value={rawValue} min={metric.min} max={metric.max} options={metric.options} width={width}/>
          </div>
        )*/
      case "bar":
        let rawValueFloat = parseFloat(rawValue) || 0;
        return (
          <div key={feature.properties.CD_MUN} className="comparison-bar">
            <SolidBar
              label={value}
              value={rawValueFloat}
              max={100}
              width={width}
            />
          </div>
        );
      default:
        return (
          <div key={feature.properties.CD_MUN} className="propsContent">
            <data value={rawValue}>{value}</data>
          </div>
        );
    }
  };

  /*const renderChartMetric = () => {
    const width = small ? 240 : undefined;
    const series = featureList.map((feature) => {
      const data = feature.properties[metric.id];
      return { name: feature.properties.SA2_NAME16, data };
    });
    return (<LineChartMetric series={series} width={width} showLegend />)
  }*/

  /*return (
    metric.type === 'line-chart'
      ? renderChartMetric()
      : featureList.map(renderSingleMetric)
  )*/

  return <div>{renderSingleMetric()}</div>;
};

export default MetricDetails;
