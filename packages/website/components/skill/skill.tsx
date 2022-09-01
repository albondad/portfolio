import { Box } from "..";
import { StyledBox } from "./skill.styled-components";
import classNames from "classnames";
import React, { ComponentProps, useMemo } from "react";

export type SkillPropsType = ComponentProps<typeof StyledBox> & {};

export const Skill = ({
  className: classNameProp,
  ...restProps
}: SkillPropsType) => {
  const classNameMemo = useMemo(() => {
    const newClassNameMemo = classNames("Skill-root", classNameProp);
    return newClassNameMemo;
  }, [classNameProp]);

  return (
    <StyledBox className={classNameMemo} {...restProps}>
      <Box className="Skill-image">image</Box>
      <Box className="Skill-label">Detail</Box>
    </StyledBox>
  );
};