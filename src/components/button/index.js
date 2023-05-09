import React from "react";
import "./styles.css";

function KButton({ type }) {
  const btnClass = `k-btn k-btn-${type ? type : "primary"}`;
  return <button className={btnClass}>按钮</button>;
}

export default KButton;
