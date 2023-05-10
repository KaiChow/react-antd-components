import React from "react";
import { BtnPropsTypes } from "./types";

function KButton(props: BtnPropsTypes) {
  const {
    type = "primary",
    block = false,
    onClick,
    innerLoading,
    disabled = false,
  } = props;
  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>
  ) => {
    if (innerLoading) {
      e.preventDefault();
      return;
    }
    (
      onClick as React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>
    )?.(e);
  };
  const classNames = `k-btn k-btn-${type} ${block ? "k-btn-block" : null}`;
  let buttonNode = (
    <button className={classNames} onClick={handleClick} disabled={disabled}>
      按钮
    </button>
  );
  return buttonNode;
}
export default KButton;
