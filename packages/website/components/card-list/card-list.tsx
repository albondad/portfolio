import { Box, Card, ConstrainedContent } from "..";
import { StyledBox } from "./card-list.styled-components";
import classNames from "classnames";
import React, { ComponentProps, useMemo } from "react";

export type CardListPropsType = ComponentProps<typeof StyledBox> & {
  heading?: string;
};

export const CardList = ({
  className: classNameProp,
  heading: headingProp,
  ...restProps
}: CardListPropsType) => {
  const classNameMemo = useMemo(() => {
    const newClassNameMemo = classNames("CardList-root", classNameProp);
    return newClassNameMemo;
  }, [classNameProp]);

  return (
    <StyledBox className={classNameMemo} {...restProps}>
      <ConstrainedContent className="CardList-mainContent">
        <Box className="CardList-heading">{headingProp}</Box>
        <Box className="CardList-list">
          <Box className="CardList-item">
            <Card />
          </Box>
          <Box className="CardList-item">
            <Card />
          </Box>
          <Box className="CardList-item">
            <Card />
          </Box>
          <Box className="CardList-item">
            <Card />
          </Box>
          <Box className="CardList-item">
            <Card />
          </Box>
          <Box className="CardList-item">
            <Card />
          </Box>
          <Box className="CardList-item">
            <Card />
          </Box>
          <Box className="CardList-item">
            <Card />
          </Box>
        </Box>
      </ConstrainedContent>
    </StyledBox>
  );
};
