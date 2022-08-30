import { Box } from "..";
import { StyledBox } from "./navigation-bar.styled-components";
import classNames from "classnames";
import React, { ComponentProps, useMemo } from "react";

export type NavigationBarPropsType = ComponentProps<typeof StyledBox> & {};

export const NavigationBar = ({
  className: classNameProp,
  ...restProps
}: NavigationBarPropsType) => {
  const classNameMemo = useMemo(() => {
    const newClassNameMemo = classNames("NavigationBar-root", classNameProp);
    return newClassNameMemo;
  }, [classNameProp]);

  return (
    <StyledBox className={classNameMemo} {...restProps}>
      <Box className="NavigationBar-mainContent">
        <Box className="NavigationBar-logo">AL BONDAD</Box>
        <Box className="NavigationBar-links">
          <Box className="NavigationBar-linkItem">Home</Box>
          <Box className="NavigationBar-linkItem">Contact Us</Box>
        </Box>
      </Box>
    </StyledBox>
  );
};
