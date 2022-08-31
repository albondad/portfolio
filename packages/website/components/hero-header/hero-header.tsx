import { Box, SocialMediaButtons } from "..";
import { StyledBox } from "./hero-header.styled-components";
import classNames from "classnames";
import React, { ComponentProps, useMemo } from "react";
import Image from "next/image";
import portaitImage from "../../images/portait.png";

export type HeroHeaderPropsType = ComponentProps<typeof StyledBox> & {};

export const HeroHeader = ({
  className: classNameProp,
  ...restProps
}: HeroHeaderPropsType) => {
  const classNameMemo = useMemo(() => {
    const newClassNameMemo = classNames("HeroHeader-root", classNameProp);
    return newClassNameMemo;
  }, [classNameProp]);

  return (
    <StyledBox className={classNameMemo} {...restProps}>
      <Box className="HeroHeader-mainContent">
        <Box className="HeroHeader-image">
          <Image src={portaitImage} layout="fill" alt="portait image" />
        </Box>

        <Box className="HeroHeader-text">
          <Box className="HeroHeader-heading">SOFTWARE DEVELOPER</Box>
          <Box className="HeroHeader-description">
            Hi there, thanks for dropping by! A little bit about me, I’m a web
            developer based in Illinois with a couple years of experience. I’ve
            worked as a software developer in small companies, startups, and
            organizations, both full time, and as contracted developer, and
            would be looking forward to working with you!
          </Box>
        </Box>

        <SocialMediaButtons className="HeroHeader-actions">
          test
        </SocialMediaButtons>
      </Box>

      <Box className="HeroHeader-actions"></Box>
    </StyledBox>
  );
};
