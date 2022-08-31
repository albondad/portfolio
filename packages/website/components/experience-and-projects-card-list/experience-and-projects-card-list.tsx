import { StyledCardList } from "./experience-and-projects-card-list.styled-components";
import classNames from "classnames";
import React, { ComponentProps, useMemo } from "react";

export type ExperienceAndProjectsCardListPropsType = ComponentProps<
  typeof StyledCardList
> & {};

export const ExperienceAndProjectsCardList = ({
  className: classNameProp,
  ...restProps
}: ExperienceAndProjectsCardListPropsType) => {
  const classNameMemo = useMemo(() => {
    const newClassNameMemo = classNames(
      "ExperienceAndProjectsCardList-root",
      classNameProp
    );
    return newClassNameMemo;
  }, [classNameProp]);

  return (
    <StyledCardList
      className={classNameMemo}
      heading="Experience and Projects"
      {...restProps}
    />
  );
};
