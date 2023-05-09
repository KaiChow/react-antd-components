import React from "react";
const ButtonTypes = [
  "default",
  "primary",
  "ghost",
  "dashed",
  "link",
  "text",
] as const;
/**
 * as const
 * ts 修饰符 表示不可变
 */
export type ButtonType = (typeof ButtonTypes)[number];

const ButtonShapes = ["default", "circle", "round"] as const;
export type ButtonShape = (typeof ButtonShapes)[number];

const ButtonHTMLTypes = ["submit", "button", "reset"] as const;
export type ButtonHTMLType = (typeof ButtonHTMLTypes)[number];

interface PropsTypes {
  type?: ButtonType;
  block?: boolean;
}
function KButton(props: PropsTypes) {
  const { type = "primary", block = false } = props;
  const classNames = `k-btn k-btn-${type} ${block ? "k-btn-block" : null}`;
  return <button className={classNames}>按钮</button>;
}
export default KButton;
