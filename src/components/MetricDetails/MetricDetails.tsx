// import RangeBar from "./charts/RangeBar";
import { SolidBar } from "../Charts";
import geosesData from "../../data/Data.json";
// import LineChartMetric from "./charts/LineChartMetric";

import * as Styles from "./styles";

const MetricDetails = ({ district, metric, small }: any) => {
  const renderSingleMetric = () => {
    // @ts-ignore
    let rawValue = geosesData[district?.properties.CD_MUN][metric.label];
    const value = metric.format(rawValue);
    const name = metric.description;
    const width = small ? 115 : undefined;

    switch (metric.type) {
      case "bar":
        let rawValueFloat = parseFloat(rawValue) || 0;
        return (
          <Styles.ProgressBar
            key={district.properties.CD_MUN}
            className="comparison-bar"
          >
            <SolidBar
              label={value}
              value={rawValueFloat}
              max={100}
              width={width}
            />
          </Styles.ProgressBar>
        );
      default:
        return (
          <div key={district.properties.CD_MUN}>
            <data value={rawValue}>{value}</data>
          </div>
        );
    }
  };

  return <div>{renderSingleMetric()}</div>;
};

export default MetricDetails;
