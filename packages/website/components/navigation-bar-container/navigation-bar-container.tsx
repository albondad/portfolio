import React, { ReactNode } from "react";
import classNames from "classnames";
import { Box, BoxPropsType } from "..";

export type NavigationBarContainerPropsType = BoxPropsType & {};

export const NavigationBarContainer = ({
  children: childrenProp,
  className: classNameProp,
  ...restProps
}: NavigationBarContainerPropsType) => {
  return (
    <Box
      className={classNames("NavigationBarContainer", classNameProp)}
      styles={`
      `}
      {...restProps}
    >
      <Box
        className="NavigationBarContainer-mainContent"
        styles={`
          align-items: center;
          display: flex;
          height: 4rem;
          padding: 0 4rem;
        `}
      >
        {childrenProp}
      </Box>
    </Box>
  );
};
