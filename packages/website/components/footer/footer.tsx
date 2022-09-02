import { Box, ConstrainedContent, SocialMediaButtons } from "..";
import { StyledBox } from "./footer.styled-components";
import classNames from "classnames";
import React, { ComponentProps, useMemo } from "react";

export type FooterPropsType = ComponentProps<typeof StyledBox> & {};

export const Footer = ({
  className: classNameProp,
  ...restProps
}: FooterPropsType) => {
  const classNameMemo = useMemo(() => {
    const newClassNameMemo = classNames("Footer-root", classNameProp);
    return newClassNameMemo;
  }, [classNameProp]);

  return (
    <StyledBox className={classNameMemo} {...restProps}>
      <ConstrainedContent className="Footer-constrainedContent">
        <Box className="Footer-heading">Lets connect!</Box>
        <Box className="Footer-actions">
          <SocialMediaButtons />
        </Box>
      </ConstrainedContent>
    </StyledBox>
  );
};
