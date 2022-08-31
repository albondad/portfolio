import { StyledBox } from "./space.styled-components";
import classNames from "classnames";
import React, { ComponentProps, useMemo } from "react";

export type SpacePropsType = ComponentProps<typeof StyledBox> & {
  size?: "medium" | "large";
};

export const Space = ({
  className: classNameProp,
  size: sizeProp = "medium",
  ...restProps
}: SpacePropsType) => {
  const classNameMemo = useMemo(() => {
    const newClassNameMemo = classNames("Space-root", classNameProp, {
      "Space-sizeMedium": sizeProp === "medium",
      "Space-sizeLarge": sizeProp === "large",
    });
    return newClassNameMemo;
  }, [classNameProp, sizeProp]);

  return <StyledBox className={classNameMemo} {...restProps}></StyledBox>;
};
