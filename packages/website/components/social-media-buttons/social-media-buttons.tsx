import { Button } from "..";
import { StyledBox } from "./social-media-buttons.styled-components";
import classNames from "classnames";
import React, { ComponentProps, useMemo } from "react";

export type SocialMediaButtonsPropsType = ComponentProps<typeof StyledBox> & {};

export const SocialMediaButtons = ({
  className: classNameProp,
  ...restProps
}: SocialMediaButtonsPropsType) => {
  const classNameMemo = useMemo(() => {
    const newClassNameMemo = classNames(
      "SocialMediaButtons-root",
      classNameProp
    );
    return newClassNameMemo;
  }, [classNameProp]);

  return (
    <StyledBox className={classNameMemo} {...restProps}>
      <Button></Button>
      <Button></Button>
      <Button></Button>
    </StyledBox>
  );
};
