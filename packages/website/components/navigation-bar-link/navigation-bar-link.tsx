import React, { ReactNode } from "react";
import classNames from "classnames";
import { Box, BoxPropsType } from "..";

export type NavigationBarLinkPropsType = BoxPropsType & {};

export const NavigationBarLink = ({
  className: classNameProp,
  ...restProps
}: NavigationBarLinkPropsType) => {
  return (
    <Box
      className={classNames("NavigationBarLink", classNameProp)}
      styles={`
        font-size: 1.25rem;
        font-weight: 400;
        cursor: pointer;

        &:hover {
          opacity: 0.5;
        }

        &:not(:last-of-type) {
          margin-right: 3rem;
        }
      `}
      {...restProps}
    />
  );
};
