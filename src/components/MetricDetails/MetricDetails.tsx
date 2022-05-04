// import RangeBar from "./charts/RangeBar";
import { SolidBar } from "../Charts";
import geosesData from "../../data/StateData.json";
// import LineChartMetric from "./charts/LineChartMetric";

const MetricDetails = ({ district, metric, small }: any) => {
  const renderSingleMetric = () => {
    // @ts-ignore
    let rawValue = geosesData[district?.properties.CD_MUN][metric.label];
    const value = metric.format(rawValue);
    const name = metric.description;
    const width = small ? 115 : undefined;

    switch (metric.type) {
      /*case 'range':
        return (
          <div key={district.properties.NM_MUN} className="comparison-bar">
            <label title={name} data-value={rawValue}>{name}</label>
            <RangeBar value={rawValue} min={metric.min} max={metric.max} options={metric.options} width={width}/>
          </div>
        )*/
      case "bar":
        let rawValueFloat = parseFloat(rawValue) || 0;
        return (
          <div key={district.properties.CD_MUN} className="comparison-bar">
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
          <div key={district.properties.CD_MUN} className="propsContent">
            <data value={rawValue}>{value}</data>
          </div>
        );
    }
  };

  /*const renderChartMetric = () => {
    const width = small ? 240 : undefined;
    const series = districtList.map((district) => {
      const data = district.properties[metric.id];
      return { name: district.properties.SA2_NAME16, data };
    });
    return (<LineChartMetric series={series} width={width} showLegend />)
  }*/

  /*return (
    metric.type === 'line-chart'
      ? renderChartMetric()
      : districtList.map(renderSingleMetric)
  )*/

  return <div>{renderSingleMetric()}</div>;
};

export default MetricDetails;
