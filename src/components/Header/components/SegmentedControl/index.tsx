import { useState } from "react";
import "./styles.css";

export const SegmentedControl = ({ defaultValue, options, onChange, width = 100 }: any) => {
  const [value, setValue] = useState(defaultValue);

  const onRadioChange = (ev: any) => {
    setValue(ev.target.value);
    onChange(ev.target.value);
  }

  return (
    <div className="segmentedControl" style={{width: `${width}px`}}>
      {options.map((op: any) => (
        <label className={op.value === value ? 'active' : ''} key={op.value}>
          <input type="radio"
            value={op.value}
            checked={op.value === value}
            onChange={onRadioChange}
          />
          {op.icon}
          {op.label}
        </label>
      ))}
    </div>
  )
}