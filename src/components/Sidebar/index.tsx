import React from "react";
import "./styles.css"

export const Sidebar = () => {

  const legend = () => {
    return (
      <div className="legend">
        <h4>Population</h4>
        <div className="gradient-box">
          <div className="gradient">
            <div className="line"/>
            <div className="line"/>
            <div className="line"/>
          </div>
          <div className="labels">
            <p>0</p>
            <p>55.000</p>
            <p>110.000</p>
            <p>225.000</p>
            <p/>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="sidebar">
      <div style={{"height": "60%"}}/>
      { legend() }
    </div>
  )
};
