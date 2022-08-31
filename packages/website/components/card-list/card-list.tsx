import { Box, Card } from "..";
import { StyledBox } from "./card-list.styled-components";
import classNames from "classnames";
import React, { ComponentProps, useMemo } from "react";

export type CardListPropsType = ComponentProps<typeof StyledBox> & {};

export const CardList = ({
  className: classNameProp,
  ...restProps
}: CardListPropsType) => {
  const classNameMemo = useMemo(() => {
    const newClassNameMemo = classNames("CardList-root", classNameProp);
    return newClassNameMemo;
  }, [classNameProp]);

  return (
    <StyledBox className={classNameMemo} {...restProps}>
      <Box className="CardList-mainContent">
        <Box className="CardList-heading">Heading</Box>
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
      </Box>
    </StyledBox>
  );
};
