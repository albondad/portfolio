import React, { ReactNode } from "react";
import classNames from "classnames";
import { Box, BoxPropsType } from "..";

export type NavigationBarBrandPropsType = BoxPropsType & {};

export const NavigationBarBrand = ({
  className: classNameProp,
  ...restProps
}: NavigationBarBrandPropsType) => {
  return (
    <Box
      className={classNames("NavigationBarBrand", classNameProp)}
      styles={`
        font-size: 1.5rem;
        font-weight: 700;
        margin-right: auto;
      `}
      {...restProps}
    />
  );
};
