
import { BarChart, Bar, XAxis, YAxis } from 'recharts';
import { useMapLayer } from "../../../../store"
import "./styles.css"

export const Legend = () => {
  const { mapLayer } = useMapLayer();

  const renderGradientBar = ({ width, height }: any) => {
    const stopsValue = mapLayer.stops.map(x => x[0]);
 
    const min = stopsValue[0]
    const max = stopsValue[stopsValue.length - 1];

    const data = [
      { name: "bar", value: max },  // the Bar itself
      { name: "empty", value: 0 },  // empty bar for ReferenceArea
    ];
    height = height * 2;
  
    return (
      <BarChart 
        width={width}
        height={height}
        data={data}
        layout="vertical"
        margin={{ top: 0, left: 0, bottom: 0, right: 0, }}
      >
        <XAxis type="number" dataKey="value" domain={[min, max]} hide />
        <YAxis type="category" dataKey="name" hide />
        <Bar dataKey="value" barSize={height} shape={renderShape} isAnimationActive={false} />
      </BarChart>
    );
  }
  
  const renderShape = ({ height, width, x, y }: any) => {
    const colors = mapLayer.stops.map(x => x[1]);
    const lineX = width / (colors.length - 1);
  
    return (
      <svg x={x} y={y}>
        <defs>
          <linearGradient id={`legend-gradient`} x1="0" y1="0" x2="1" y2="0">
            {/* @ts-ignore */}
            {colors.map((color, id) => (<stop offset={(id/(color.length - 1)) * 100} style={{ stopColor: color }} />))}
          </linearGradient>
        </defs>
        <rect width={width} height={height} fill={`url(#legend-gradient)`} />
        {colors.map((_, id) => {
          if(id > (colors.length - 3)) {
            return <></>;
          }
          return <line x1={lineX * (id + 1)} y1={0} x2={lineX * (id + 1)} y2={height} stroke="white" strokeDasharray="1 1"/>
        })}
      </svg>
    );
  }

  const legend = () => {
    return (
      <div className="legend">
        <h4>População</h4>
        { renderGradientBar({width: 276, height: 30}) }
        <div className="labels">
          {mapLayer.stops.map((value) => ( <p>{value[0]}</p> ))}
        </div>
      </div>
    )
  }

  return legend()
};
