import React from "react";
import { BtnPropsTypes } from "./types";

function KButton(props: BtnPropsTypes) {
  const { type = "primary", block = false } = props;
  const classNames = `k-btn k-btn-${type} ${block ? "k-btn-block" : null}`;
  return <button className={classNames}>按钮</button>;
}
export default KButton;
