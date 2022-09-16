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
        const newClassNameMemo = classNames('NavigationBar-root', classNameProp)
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
            {/* <Box className="NavigationBar-errorMessage">
                <ConstrainedContent>
                    Thanks for dropping by! This site is still in development so
                    expect bug fixes and design changes in the future.
                </ConstrainedContent>
            </Box> */}
            <ConstrainedContent className="NavigationBar-constrainedContent">
                <Box className="NavigationBar-logo">AL BONDAD</Box>
                <Box className="NavigationBar-links">
                    <Box
                        as="a"
                        className="NavigationBar-item"
                        href="/pdfs/al-bondad-resume.pdf"
                        target="_blank"
                    >
                        Resume
                    </Box>
                </Box>
                <Box className="NavigationBar-menu" onClick={handleMenuClick}>
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
