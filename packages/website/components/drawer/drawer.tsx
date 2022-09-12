import { Box, TeenyiconsArrowLeftSmallIcon } from '..'
import { StyledBox } from './drawer.styled-components'
import classNames from 'classnames'
import React, { ComponentProps, useEffect, useMemo } from 'react'
import { CSSTransition } from 'react-transition-group'

export type DrawerPropsType = ComponentProps<typeof StyledBox> & {
    heading?: string
    isOpen?: boolean
    onClose?: () => {}
}

export const Drawer = ({
    children: childrenProp,
    className: classNameProp,
    heading: headingProp,
    isOpen: isOpenProp = false,
    onClose: onCloseProp,
    ...restProps
}: DrawerPropsType) => {
    const classNameMemo = useMemo(() => {
        const newClassNameMemo = classNames('Drawer', classNameProp, {
            'Drawer-isOpenFalse': !isOpenProp,
            'Drawer-isOpenTrue': !!isOpenProp,
        })
        return newClassNameMemo
    }, [classNameProp, isOpenProp])

    useEffect(() => {
        const hasDrawerOpen =
            !!document.getElementsByClassName('Drawer-isOpenTrue')[0]

        if (hasDrawerOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
    }, [isOpenProp])

    return (
        <CSSTransition
            in={true}
            timeout={200}
            classNames={{
                enter: 'Drawer-transitionEnter',
                enterActive: 'Drawer-transitionActiveEnter',
                enterDone: 'Drawer-transitionEnterDone',
                exit: 'Drawer-transitionExit',
                exitActive: 'Drawer-transitionExitActive',
                exitDone: 'Drawer-transitionExitDone',
            }}
        >
            <StyledBox className={classNameMemo} {...restProps}>
                <Box className="Drawer-overlay" onClick={onCloseProp}></Box>
                <Box className="Drawer-mainContent">
                    <Box className="Drawer-constrainedContent">
                        <Box className="Drawer-header">
                            <Box className="Drawer-heading">{headingProp}</Box>
                            <Box
                                className="Drawer-goBack"
                                onClick={onCloseProp}
                            >
                                <TeenyiconsArrowLeftSmallIcon className="Drawer-icon" />
                                Go Back
                            </Box>
                        </Box>
                        <Box className="Drawer-body">{childrenProp}</Box>
                    </Box>
                </Box>
            </StyledBox>
        </CSSTransition>
    )
}
