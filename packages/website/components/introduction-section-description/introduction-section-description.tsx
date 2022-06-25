import React from "react";
import classNames from "classnames";
import {
  Box,
  BoxPropsType,
  Text,
  Button,
  TeenyiconsTextDocumentIcon,
  TeenyiconsLinkedinIcon,
  TeenyiconsGithubIcon,
} from "..";

export type IntroductionSectionDescriptionPropsType = BoxPropsType & {};

export const IntroductionSectionDescription = ({
  className: classNameProp,
  styles: styleProp,
  ...restProps
}: IntroductionSectionDescriptionPropsType) => {
  return (
    <Box
      className={classNames("IntroductionSectionDescription", classNameProp)}
      styles={`
        display: flex;
        gap: 1.25rem;

        ${styleProp}
      `}
      {...restProps}
    >
      <Box>
        <Box
          styles={`
            width: 16rem;
            padding-top: 100%;
            background-color: #cccccc;
          `}
        />
      </Box>
      <Box
        styles={`
          max-width: 32rem;
        `}
      >
        <Text
          color="#ffffff"
          fontSize="2rem"
          fontWeight="700"
          lineHeight="1.5em"
        >
          SOFTWARE DEVELOPER
        </Text>
        <Text
          color="#ffffff"
          fontSize="1.25rem"
          fontWeight="400"
          lineHeight="1.5em"
        >
          Hi there, thanks for dropping by! A little bit about me, I’m a web
          developer based in Illinois with a couple years of experience. I’ve
          worked as a software developer in small companies, startups, and
          organizations, both full time, and as contracted developer, and would
          be looking forward to working with you!
        </Text>
      </Box>
    </Box>
  );
};
