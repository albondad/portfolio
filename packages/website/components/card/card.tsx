import { Box } from "..";
import { StyledBox } from "./card.styled-components";
import classNames from "classnames";
import React, { ComponentProps, useMemo } from "react";

export type CardPropsType = ComponentProps<typeof StyledBox> & {
  details?: string[];
  heading?: string;
};

export const Card = ({
  className: classNameProp,
  details: detailsProp = [],
  heading: headingProp,
  ...restProps
}: CardPropsType) => {
  const classNameMemo = useMemo(() => {
    const newClassNameMemo = classNames("Card-root", classNameProp);
    return newClassNameMemo;
  }, [classNameProp]);

  return (
    <StyledBox className={classNameMemo} {...restProps}>
      <Box className="Card-image"></Box>
      <Box className="Card-heading">{headingProp}</Box>
      <Box className="Card-details">
        {detailsProp.map((element, index) => {
          return (
            <Box key={index} className="Card-detailItem">
              {element}
            </Box>
          );
        })}
      </Box>
    </StyledBox>
  );
};
