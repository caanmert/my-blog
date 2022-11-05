import React from "react";
import type { ButtonProps } from "./button.props";

export const Button = (props: ButtonProps): JSX.Element => {
  // const { title, style: styleOverride } = props;

  return (
    <div className="container">
      <button className="button">Button</button>
    </div>
  );
};

