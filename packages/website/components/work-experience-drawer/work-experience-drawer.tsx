import { StyledDrawer } from "./work-experience-drawer.styled-components";
import classNames from "classnames";
import React, { ComponentProps, useMemo } from "react";
import { useRouter } from "next/router";
import { Box, ImageGallery } from "..";
import { workExperienceCollection } from "../../collections";
import { workExperience } from "../../collections/work-experiences-collection";

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

  const workExperienceMemo = useMemo(() => {
    const workExperienceCollectionId = routerHook.query.slug?.[1];
    console.log(
      "[remove me] workExperienceCollectionId",
      workExperienceCollectionId
    );
    const newWorkExperienceMemo = workExperienceCollection.workExperience.find(
      (element) => element.id === workExperienceCollectionId
    );

    return newWorkExperienceMemo;
  }, [routerHook]);

  const handleDrawerClose = () => {
    routerHook.push("/");
  };

  return (
    <StyledDrawer
      className={classNameMemo}
      isOpen={isDrawerOpenMemo}
      onClose={handleDrawerClose}
    >
      <Box className="WorkExperienceDrawer-imageGallery">
        <ImageGallery imageSources={workExperienceMemo?.imageSources} />
      </Box>
    </StyledDrawer>
  );
};
