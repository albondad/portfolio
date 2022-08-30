import { Box } from "..";
import { StyledBox } from "./button-bar.styled-components";
import classNames from "classnames";
import React, { ComponentProps, useMemo } from "react";

export type ButtonPropsType = ComponentProps<typeof StyledBox> & {};

export const Button = ({
  className: classNameProp,
  ...restProps
}: ButtonPropsType) => {
  const classNameMemo = useMemo(() => {
    const newClassNameMemo = classNames("Button-root", classNameProp);
    return newClassNameMemo;
  }, [classNameProp]);

  return <StyledBox className={classNameMemo} {...restProps}></StyledBox>;
};
