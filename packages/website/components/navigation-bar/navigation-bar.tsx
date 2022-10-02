import {
    Box,
    ConstrainedContent,
    NavigationDrawer,
    TeenyiconsMenuIcon,
} from '..'
import { StyledBox } from './navigation-bar.styled-components'
import classNames from 'classnames'
import React, { ComponentProps, useMemo, useState } from 'react'

export type NavigationBarPropsType = ComponentProps<typeof StyledBox> & {}

export const NavigationBar = ({
    className: classNameProp,
    ...restProps
}: NavigationBarPropsType) => {
    const classNameMemo = useMemo(() => {
        const newClassNameMemo = classNames('NavigationBar', classNameProp)
        return newClassNameMemo
    }, [classNameProp])

    const [isNavigationDrawerOpenState, setIsNavigationDrawerOpenState] =
        useState(false)

    const handleMenuClick = () => {
        setIsNavigationDrawerOpenState(true)
    }

    const handleNavigationDrawerClose = () => {
        setIsNavigationDrawerOpenState(false)
    }

    return (
        <StyledBox className={classNameMemo} {...restProps}>
            <ConstrainedContent className="navigation-bar__constrained-content">
                <Box className="navigation-bar__logo">AL BONDAD</Box>
                <Box className="navigation-bar__links">
                    <Box
                        as="a"
                        className="navigation-bar__item"
                        href="/pdfs/al-bondad-resume.pdf"
                        target="_blank"
                    >
                        Resume
                    </Box>
                </Box>
                <Box className="navigation-bar__menu" onClick={handleMenuClick}>
                    <TeenyiconsMenuIcon />
                </Box>
            </ConstrainedContent>

            <NavigationDrawer
                isOpen={isNavigationDrawerOpenState}
                onClose={handleNavigationDrawerClose}
            />
        </StyledBox>
    )
}
