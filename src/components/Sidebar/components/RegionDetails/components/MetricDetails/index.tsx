// import RangeBar from "./charts/RangeBar";
import { SolidBar } from "../../../../../Charts";
import geosesData from "../../../../../../data/GeoSesObject.json";
// import LineChartMetric from "./charts/LineChartMetric";

export const MetricDetails = ({ feature, metric, small }: any) => {

  const renderSingleMetric = () => {
    // @ts-ignore
    let rawValue = geosesData[feature?.properties.CD_MUN][metric.id];
    const value = metric.format(rawValue);
    const name = metric.label;
    const width = small ? 115 : undefined;
    
    console.log(rawValue)
    console.log(value)

    switch (metric.type) {
      /*case 'range':
        return (
          <div key={feature.properties.NM_MUN} className="comparison-bar">
            <label title={name} data-value={rawValue}>{name}</label>
            <RangeBar value={rawValue} min={metric.min} max={metric.max} options={metric.options} width={width}/>
          </div>
        )*/
      case 'bar':
        let rawValueFloat = parseFloat(rawValue) || 0
        return (
          <div key={feature.properties.CD_MUN} className="comparison-bar">
            <label title={name} data-value={rawValue}>{name}</label>
            <SolidBar label={value} value={rawValueFloat} max={100} width={width} />
          </div>
        )
      default:
        return (
          <div key={feature.properties.CD_MUN} className="propsContent">
            <h2 title={name}>{name}</h2>
            <data value={rawValue}>{value}</data>
          </div>
        )
    }
  }

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

  return (
    <div>
      {renderSingleMetric()}
    </div>
  )
}