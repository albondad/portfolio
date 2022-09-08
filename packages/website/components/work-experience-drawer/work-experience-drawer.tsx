import { StyledDrawer } from "./work-experience-drawer.styled-components";
import classNames from "classnames";
import React, { ComponentProps, useMemo } from "react";
import Image from "next/image";
import { CSSTransition } from "react-transition-group";
import { useRouter } from "next/router";

export type WorkExperienceDrawerPropsType = ComponentProps<
  typeof StyledDrawer
> & {};

export const WorkExperienceDrawer = ({
  className: classNameProp,
  ...restProps
}: WorkExperienceDrawerPropsType) => {
  const routerHook = useRouter();

  const classNameMemo = useMemo(() => {
    const newClassNameMemo = classNames(
      "WorkExperienceDrawer",
      classNameProp,
      {}
    );
    return newClassNameMemo;
  }, [classNameProp]);

  const isDrawerOpenMemo = useMemo(() => {
    const isDrawerOpenMemo = routerHook.query.slug?.[0] === "work-experience";

    return isDrawerOpenMemo;
  }, [routerHook]);

  const handleDrawerClose = () => {
    routerHook.push("/");
  };

  return (
    <StyledDrawer
      className={classNameMemo}
      isOpen={isDrawerOpenMemo}
      onClose={handleDrawerClose}
    ></StyledDrawer>
  );
};
