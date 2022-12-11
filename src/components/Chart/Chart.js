import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";
function Chart(props) {
    const datavalue=props.data.map(data=>data.value);
    const maximum=Math.max(...datavalue);
  return (
    <div className="Chart">
      {props.data.map((item) => (
        <ChartBar 
        key={item.label}
        value={item.value}
        maxValue={maximum}
        label={item.label}/>
      ))}
    </div>
  );
}
export default Chart;
