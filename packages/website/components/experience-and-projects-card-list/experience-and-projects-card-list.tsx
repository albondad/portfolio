import { StyledCardList } from "./experience-and-projects-card-list.styled-components";
import classNames from "classnames";
import React, { ComponentProps, useMemo } from "react";
import { workExperiencesCollection as workExperienceCollection } from "../../collections";
import { Card } from "..";
const { DateTime } = require("luxon");

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

  const itemsMemo = useMemo(() => {
    const newItemsMemo = workExperienceCollection.workExperience.map(
      (element) => {
        const formattedEndDate = DateTime.fromISO(element.endDate).toFormat(
          "LLLL yyyy"
        );

        const formattedStartDate = DateTime.fromISO(element.startDate).toFormat(
          "LLLL yyyy"
        );

        const dateRange = `${formattedStartDate} to ${formattedEndDate}`;

        const details = [element.title, dateRange];

        return {
          key: element.id,
          heading: element.organization,
          details: details,
        };
      }
    );

    return newItemsMemo;
  }, []);

  return (
    <StyledCardList
      className={classNameMemo}
      heading="Work Experience"
      items={itemsMemo}
    />
  );
};
