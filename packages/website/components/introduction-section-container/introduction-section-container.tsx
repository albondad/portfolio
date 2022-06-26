import React from "react";
import classNames from "classnames";
import { Box, BoxPropsType } from "..";

export type IntroductionSectionContainerPropsType = BoxPropsType & {};

export const IntroductionSectionContainer = ({
  className: classNameProp,
  styles: stylesProp,
  ...restProps
}: IntroductionSectionContainerPropsType) => {
  return (
    <Box
      className={classNames("IntroductionSectionContainer", classNameProp)}
      styles={`
        background-color: #000000;
        display: flex;
        height: 24rem;
        padding: 4rem;
        
        ${stylesProp}
      `}
      {...restProps}
    />
  );
};
