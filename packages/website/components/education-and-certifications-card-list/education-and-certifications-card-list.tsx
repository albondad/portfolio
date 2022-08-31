import { StyledCardList } from "./education-and-certifications-card-list.styled-components";
import classNames from "classnames";
import React, { ComponentProps, useMemo } from "react";

export type EducationAndCertificationsCardListPropsType = ComponentProps<
  typeof StyledCardList
> & {};

export const EducationAndCertifcationsCardlist = ({
  className: classNameProp,
  ...restProps
}: EducationAndCertificationsCardListPropsType) => {
  const classNameMemo = useMemo(() => {
    const newClassNameMemo = classNames(
      "EducationAndCertifcationsCardlist-root",
      classNameProp
    );
    return newClassNameMemo;
  }, [classNameProp]);

  return (
    <StyledCardList
      className={classNameMemo}
      heading="Education And Certifications"
      {...restProps}
    />
  );
};
