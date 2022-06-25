import React from "react";
import classNames from "classnames";
import {
  NavigationBarBrand,
  NavigationBarContainer,
  NavigationBarContainerPropsType,
  NavigationBarLink,
  Button,
} from "..";

export type NavigationBarPropsType = NavigationBarContainerPropsType & {};

export const NavigationBar = ({
  className: classNameProp,
  ...restProps
}: NavigationBarContainerPropsType) => {
  return (
    <NavigationBarContainer
      className={classNames("NavigationBar", classNameProp)}
      {...restProps}
    >
      <NavigationBarBrand>AL Bondad</NavigationBarBrand>
      <NavigationBarLink>Home</NavigationBarLink>
      <NavigationBarLink>Contact</NavigationBarLink>
      <NavigationBarLink>Blog</NavigationBarLink>
    </NavigationBarContainer>
  );
};
