import { Box } from "..";
import { StyledBox } from "./hero.styled-components";
import classNames from "classnames";
import React, { ComponentProps, useMemo } from "react";

export type HeroPropsType = ComponentProps<typeof StyledBox> & {};

export const Hero = ({
  className: classNameProp,
  ...restProps
}: HeroPropsType) => {
  const classNameMemo = useMemo(() => {
    const newClassNameMemo = classNames("Hero-root", classNameProp);
    return newClassNameMemo;
  }, [classNameProp]);

  return (
    <StyledBox className={classNameMemo} {...restProps}>
      <Box className="Hero-mainContent">
        <Box className="Hero-image" />

        <Box className="Hero-text">
          <Box className="Hero-title">SOFTWARE DEVELOPER</Box>
          <Box className="Hero-description">
            Hi there, thanks for dropping by! A little bit about me, I’m a web
            developer based in Illinois with a couple years of experience. I’ve
            worked as a software developer in small companies, startups, and
            organizations, both full time, and as contracted developer, and
            would be looking forward to working with you!
          </Box>
        </Box>

        <Box className="Hero-actions">test</Box>
      </Box>

      <Box className="Hero-actions"></Box>
    </StyledBox>
  );
};
