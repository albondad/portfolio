import { Box, TeenyiconsArrowLeftSmallIcon } from "..";
import { StyledBox } from "./drawer.styled-components";
import classNames from "classnames";
import React, { ComponentProps, useMemo } from "react";
import Image from "next/image";
import { CSSTransition } from "react-transition-group";

export type DrawerPropsType = ComponentProps<typeof StyledBox> & {
  isOpen?: boolean;
  onClose?: () => {};
};

export const Drawer = ({
  className: classNameProp,
  isOpen: isOpenProp = false,
  onClose: onCloseProp,
  ...restProps
}: DrawerPropsType) => {
  const classNameMemo = useMemo(() => {
    const newClassNameMemo = classNames("Drawer", classNameProp, {
      "Drawer-isOpenFalse": !isOpenProp,
      "Drawer-isOpenTrue": !!isOpenProp,
    });
    return newClassNameMemo;
  }, [classNameProp, isOpenProp]);

  return (
    <CSSTransition
      in={true}
      timeout={200}
      classNames={{
        enter: "Drawer-transitionEnter",
        enterActive: "Drawer-transitionActiveEnter",
        enterDone: "Drawer-transitionEnterDone",
        exit: "Drawer-transitionExit",
        exitActive: "Drawer-transitionExitActive",
        exitDone: "Drawer-transitionExitDone",
      }}
    >
      <StyledBox className={classNameMemo} {...restProps}>
        <Box className="Drawer-overlay" onClick={onCloseProp}></Box>
        <Box className="Drawer-mainContent">
          <Box className="Drawer-constrainedContent">
            <Box className="Drawer-header">
              <Box className="Drawer-heading">Heading</Box>
              <Box className="Drawer-goBack" onClick={onCloseProp}>
                <TeenyiconsArrowLeftSmallIcon className="Drawer-icon" />
                Go Back
              </Box>
            </Box>
            <Box className="Drawer-images">
              <Box className="Drawer-mainImage">
                <Box className="Drawer-image"></Box>
              </Box>
              <Box className="Drawer-otherImages">
                <Box className="Drawer-item">
                  <Box className="Drawer-image"></Box>
                </Box>
                <Box className="Drawer-item">
                  <Box className="Drawer-image"></Box>
                </Box>
                <Box className="Drawer-item">
                  <Box className="Drawer-image"></Box>
                </Box>
                <Box className="Drawer-item">
                  <Box className="Drawer-image"></Box>
                </Box>
                <Box className="Drawer-item">
                  <Box className="Drawer-image"></Box>
                </Box>
                <Box className="Drawer-item">
                  <Box className="Drawer-image"></Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </StyledBox>
    </CSSTransition>
  );
};
