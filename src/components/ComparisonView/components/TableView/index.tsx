import propsMapping from "../../../../config/propsMapping"
import { useComparison } from "../../../../store"
import { CollapsibleSection } from "../../../index"
import Table from "rc-table";
import { MetricDetails } from "../../../index"
import geosesData from "../../../../data/GeoSesObject.json";
import "./styles.css"

const { Column } = Table;

export const TableView = ({ width }: any) => {
  const { comparison } = useComparison();

  const screenWidth = width > 1110 ? 1100 : width;
  const colPadding = 10 * 2;
  const nameColumnWidth = 170;
  const dataColumnWidth = (screenWidth - nameColumnWidth - colPadding) / 4;
  const tableWidth = (nameColumnWidth) + ((dataColumnWidth) * 4);

  const columns = comparison.map((ft, idx) => ({ 
    dataKey: `regionData${idx + 1}`,
    label: ft.properties.NM_MUN
  }));
  
  const renderTable = (section: any) => {
    const data: any = [];
    
    section.content.forEach((metric: any, id: any) => {
      let columnValues = comparison.map((ft, idx) => {
        // @ts-ignore
        let rawValue = geosesData[ft?.properties.CD_MUN][metric.id] && <MetricDetails key={id} feature={ft} metric={metric} />
        return ({ [`regionData${idx + 1}`]: rawValue });
      });
      columnValues.push({regionName: metric.label});
      columnValues.push({id: id});
      const row = columnValues.reduce((prev, curr) => ({...prev, ...curr}));
      data.push(row);
    })

    const renderCell = (rawValue: any, record: any) => {
      if (rawValue === undefined || rawValue === null) {
        return 'No data';
      }
      
      return <span className="cell-data">{rawValue}</span>

      // switch (metric.type) {
        // case 'line-chart':{
        //   return <LineChartMetric data={rawValue} width={120} height={115} />
        // }
        // case 'range':{
        //   const value = rawValue || 0;
        //   return <RangeBar value={value} min={metric.min} max={metric.max} options={metric.options} width={120} />
        // }
        // case 'bar':{
        //   const value = formatValue(rawValue, metric.format);
        //   return <SolidBar label={value} value={rawValue} max={metric.max} width={120} />
        // }
        // default:{
        // }
      // }
    }

    return (
      <Table
        data={data}
        rowKey="id"
        showHeader={false}
        rowClassName="table-row"
        style={{width: tableWidth}}
      >
        <Column dataIndex='regionName' width={nameColumnWidth} />
        {columns.map(col => (
          <Column dataIndex={col.dataKey} width={dataColumnWidth} key={col.dataKey} render={renderCell} />
        ))}
      </Table>
    )
  }
  
  return (
    <div className="table-view">
      <div className="table-header" style={{width: tableWidth}}>
        <div style={{flex: `0 1 ${nameColumnWidth}px`}}/>
        <div className="dataContent" style={{width: `${dataColumnWidth * 4}px`}}>
          {columns.map(col => (
            <div key={col.dataKey} className="dataColumn" style={{flex: `0 0 ${dataColumnWidth}px`}}>
              {col.label}
            </div>
          ))}
        </div>
      </div>
      <div className="table-data">
        {propsMapping.map((section) => (
          <CollapsibleSection title={section.title} key={section.title}>
            {renderTable(section)}
          </CollapsibleSection>
        ))}
      </div>
    </div>
  )
}