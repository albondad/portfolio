import { Box, BoxPropsType, Text } from "..";
import * as experienceAndProjectCardUtilities from "./experience-and-project-card.utilities";
import classNames from "classnames";
import Image from "next/image";
import React from "react";

export type ExperienceAndProjectsCardPropsType = BoxPropsType & {};

export const ExperienceAndProjectsCard = ({
  className: classNameProp,
  styles: stylesProp,
  ...restProps
}: BoxPropsType) => {
  return (
    <Box
      className={classNames("ExperienceAndProjectsCard", classNameProp)}
      styles={`
        ${experienceAndProjectCardUtilities.getStyles()}
        ${stylesProp}
      `}
      {...restProps}
    >
      <Box className="ExperienceAndProjectsCardImageContainer">
        <Image src="/" width="16" height="9" />
      </Box>
      <Text className="ExperienceAndProjectsCardHeadingText">Heading Text</Text>
      <Text className="ExperienceAndProjectsCardBodyText">Body Text</Text>
      <Text className="ExperienceAndProjectsCardBodyText">Body Text</Text>
    </Box>
  );
};
