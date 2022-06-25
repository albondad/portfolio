import React from "react";
import classNames from "classnames";
import { Box, BoxPropsType } from "..";

export type IntroductionSectionContainerPropsType = BoxPropsType & {};

export const IntroductionSectionContainer = ({
  className: classNameProp,
  ...restProps
}: IntroductionSectionContainerPropsType) => {
  return (
    <Box
      className={classNames("IntroductionSectionContainer", classNameProp)}
      styles={`
        background-color: #000000;
        height: 24rem;
        padding: 4rem;
        display: flex;
      `}
      {...restProps}
    />
  );
};
