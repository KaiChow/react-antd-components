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

export type BtnPropsTypes = {
  type?: ButtonType;
  block?: boolean;
  onClick?: Function;
  innerLoading?: boolean;
  disabled?: boolean;
};
