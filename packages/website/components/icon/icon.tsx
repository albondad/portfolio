import React from "react";
import classNames from "classnames";
import { Box, BoxPropsType } from "..";

export type IconPropsType = BoxPropsType & {};

export const Icon = ({
  as: asProp = "svg",
  className: classNameProp,
  fill: fillProp = "black",
  height: heightProp = "24",
  viewBox: viewBoxProp = "0 0 24 24",
  width: widthProp = "24",
  xmlns: xlmnsProp = "http://www.w3.org/2000/svg",
  ...restProps
}: IconPropsType) => {
  return (
    <Box
      as={asProp}
      className={classNames("Icon", classNameProp)}
      fill={fillProp}
      height={heightProp}
      viewBox={viewBoxProp}
      width={widthProp}
      xmlns={xlmnsProp}
      {...restProps}
    ></Box>
  );
};
