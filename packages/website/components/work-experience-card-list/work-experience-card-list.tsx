import { DateTime } from "luxon";
import { StyledCardList } from "./work-experience-card-list.styled-components";
import { workExperiencesCollection as workExperienceCollection } from "../../collections";
import classNames from "classnames";
import React, { ComponentProps, useMemo } from "react";
import { useRouter } from "next/router";

export type WorkExperienceCardListPropsType = ComponentProps<
  typeof StyledCardList
> & {};

export const WorkExperienceCardList = ({
  className: classNameProp,
  ...restProps
}: WorkExperienceCardListPropsType) => {
  const classNameMemo = useMemo(() => {
    const newClassNameMemo = classNames(
      "ExperienceAndProjectsCardList-root",
      classNameProp
    );
    return newClassNameMemo;
  }, [classNameProp]);

  const routerHook = useRouter();

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
          imageSource: element.imageSources[0],
          onClick: () => {
            routerHook.push("/work-experience/test");
          },
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