import * as boxStyledComponents from "./box.styled-components";
import classNames from "classnames";
import React, { ElementType, ReactNode, ComponentProps } from "react";
import styled, { StyledComponent } from "styled-components";

export type BoxPropsType = ComponentProps<typeof boxStyledComponents.Box> & {
  styles?: string;
};

export const Box = ({
  styles: stylesProp,
  className: classNameProp,
  ...restProps
}: BoxPropsType) => {
  styled("div");

  return (
    <boxStyledComponents.Box
      className={classNames("Box", classNameProp)}
      styles={stylesProp}
      {...restProps}
    />
  );
};
