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
        const newClassNameMemo = classNames('drawer', classNameProp, {
            'drawer--is-open-false': !isOpenProp,
            'drawer--is-open-true': !!isOpenProp,
        })
        return newClassNameMemo
    }, [classNameProp, isOpenProp])

    useEffect(() => {
        const hasDrawerOpen = !!document.getElementsByClassName(
            'drawer--is-open-true'
        )[0]

        if (hasDrawerOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
    }, [isOpenProp])

    return (
        <StyledBox className={classNameMemo} {...restProps}>
            <Box className="drawer__overlay" onClick={onCloseProp}></Box>
            <Box className="drawer__main-content">
                <Box className="drawer__constrained-content">
                    <Box className="drawer__header">
                        <Box className="drawer__heading">{headingProp}</Box>
                        <Box className="drawer__go-back" onClick={onCloseProp}>
                            <TeenyiconsArrowLeftSmallIcon className="drawer__icon" />
                            Go Back
                        </Box>
                    </Box>
                    <Box className="drawer__body">{childrenProp}</Box>
                </Box>
            </Box>
        </StyledBox>
    )
}
