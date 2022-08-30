import { StyledBox } from "./svg-icon.styled-components";
import classNames from "classnames";
import React, { ComponentProps, useMemo } from "react";

export type SvgIconPropsType = ComponentProps<typeof StyledBox> & {
  viewBox?: string;
  xmlns?: string;
};

export const SvgIcon = ({
  className: classNameProp,
  viewBoxProp: viewBoxProp = "0 0 24 24",
  xmlns: xmlnsProp,
  as: asProp = "svg",
  ...restProps
}: SvgIconPropsType) => {
  const classNameMemo = useMemo(() => {
    const newClassNameMemo = classNames("SvgIcon-root", classNameProp);
    return newClassNameMemo;
  }, [classNameProp]);

  return (
    <StyledBox
      {...restProps}
      as={asProp}
      className={classNameMemo}
      viewBox={viewBoxProp}
      xmlns={xmlnsProp}
    />
  );
};
