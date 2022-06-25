import React from "react";
import classNames from "classnames";
import { Box, BoxPropsType } from "..";

export type TextPropsType = BoxPropsType & {
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  lineHeight?: string;
};

export const Text = ({
  className: classNameProp,
  color: colorProp,
  fontSize: fontSizeProp,
  fontWeight: fontWeightProp,
  lineHeight: lineHeightProp,
  ...restProps
}: TextPropsType) => {
  return (
    <Box
      className={classNames("Text", classNameProp)}
      styles={`
        color: ${colorProp};
        font-size: ${fontSizeProp};
        font-weight: ${fontWeightProp};
        line-height: ${lineHeightProp};
      `}
      {...restProps}
    />
  );
};
