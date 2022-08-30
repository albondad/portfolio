import { SvgIcon } from "..";
import { StyledBox } from "./teeny-icons-linked-in-icon.styled-components";
import classNames from "classnames";
import React, { ComponentProps, useMemo } from "react";

export type TeenyIconsLinkedInIconPropsType = ComponentProps<
  typeof StyledBox
> & {};

export const TeenyIconsLinkedInIcon = ({
  className: classNameProp,
  ...restProps
}: TeenyIconsLinkedInIconPropsType) => {
  const classNameMemo = useMemo(() => {
    const newClassNameMemo = classNames(
      "TeenyIconsLinkedInIcon-root",
      classNameProp
    );
    return newClassNameMemo;
  }, [classNameProp]);

  return (
    <SvgIcon className={classNameMemo} {...restProps}>
      <path d="M2.4 1.6a.8.8 0 0 0-.8.8v19.2a.8.8 0 0 0 .8.8h19.2a.8.8 0 0 0 .8-.8V2.4a.8.8 0 0 0-.8-.8H2.4ZM.703.703A2.4 2.4 0 0 1 2.4 0h19.2A2.4 2.4 0 0 1 24 2.4v19.2a2.4 2.4 0 0 1-2.4 2.4H2.4A2.4 2.4 0 0 1 0 21.6V2.4A2.4 2.4 0 0 1 .703.703ZM8 8H6.4V6.4H8V8Zm-1.6 9.6v-8H8v8H6.4Zm4.8-4v4H9.6v-8h1.6v.8a4 4 0 0 1 6.4 3.2v4H16v-4a2.4 2.4 0 0 0-4.8 0Z" />
    </SvgIcon>
  );
};
