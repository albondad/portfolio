import { Box } from "..";
import { StyledBox } from "./card.styled-components";
import classNames from "classnames";
import React, { ComponentProps, useMemo } from "react";

export type CardPropsType = ComponentProps<typeof StyledBox> & {};

export const Card = ({
  className: classNameProp,
  ...restProps
}: CardPropsType) => {
  const classNameMemo = useMemo(() => {
    const newClassNameMemo = classNames("Card-root", classNameProp);
    return newClassNameMemo;
  }, [classNameProp]);

  return (
    <StyledBox className={classNameMemo} {...restProps}>
      <Box className="Card-image"></Box>
      <Box className="Card-heading">Heading</Box>
      <Box className="Card-details">
        <Box className="Card-detailItem">Detail</Box>
        <Box className="Card-detailItem">Detail</Box>
        <Box className="Card-detailItem">Detail</Box>
      </Box>
    </StyledBox>
  );
};
