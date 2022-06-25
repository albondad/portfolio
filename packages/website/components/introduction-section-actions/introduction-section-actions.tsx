import React from "react";
import classNames from "classnames";
import {
  Box,
  BoxPropsType,
  Text,
  Button,
  TeenyiconsTextDocumentIcon,
  TeenyiconsLinkedinIcon,
  TeenyiconsGithubIcon,
} from "..";

export type IntroductionSectionActionsPropsType = BoxPropsType & {};

export const IntroductionSectionActions = ({
  className: classNameProp,
  styles: styleProp,
  ...restProps
}: IntroductionSectionActionsPropsType) => {
  return (
    <Box
      className={classNames("IntroductionSectionActions", classNameProp)}
      styles={`
      align-items: flex-end;
      display: flex;
      flex-grow: 1;
      justify-content: flex-end; 
    `}
    >
      <Box
        styles={`
        display: flex;
        gap: 1.25rem;
      `}
      >
        <Button>
          <TeenyiconsTextDocumentIcon />
        </Button>
        <Button>
          <TeenyiconsLinkedinIcon />
        </Button>
        <Button>
          <TeenyiconsGithubIcon />
        </Button>
      </Box>
    </Box>
  );
};
