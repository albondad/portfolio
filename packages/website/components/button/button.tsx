import React from "react";
import { Box, BoxPropsType } from "..";
import classNames from "classnames";

export type ButtonPropsType = BoxPropsType & {};

export const Button = ({
  className: classNameProp,
  styles: stylesProp,
  ...restProps
}: BoxPropsType) => {
  return (
    <Box
      className={classNames("Button", classNameProp)}
      styles={`
        background-color: #ffffff;
        border-radius: 0.5rem;
        padding: 0.75rem;

        ${stylesProp}
      `}
      {...restProps}
    />
  );
};
