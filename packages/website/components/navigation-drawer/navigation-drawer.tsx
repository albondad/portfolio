import { Box, TeenyiconsCloseIcon } from '..'
import { StyledBox } from './navigation-drawer.styled-components'
import classNames from 'classnames'
import React, { ComponentProps, useEffect, useMemo } from 'react'
import { useRouter } from 'next/router'

export type NavigationDrawerPropsType = ComponentProps<typeof StyledBox> & {
    isOpen?: boolean
    onClose?: () => any
}

export const NavigationDrawer = ({
    children: childrenProp,
    className: classNameProp,
    heading: headingProp,
    isOpen: isOpenProp = true,
    onClose: onCloseProp,
    ...restProps
}: NavigationDrawerPropsType) => {
    const classNameMemo = useMemo(() => {
        const newClassNameMemo = classNames(
            'navigation-drawer',
            classNameProp,
            {
                'navigation-drawer__is-open-false': !isOpenProp,
                'navigation-drawer__is-open-true': !!isOpenProp,
            }
        )
        return newClassNameMemo
    }, [classNameProp, isOpenProp])

    useEffect(() => {
        const hasNavigationDrawerOpen = !!document.getElementsByClassName(
            'navigation-drawer__isOpenTrue'
        )[0]

        if (hasNavigationDrawerOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
    }, [isOpenProp])

    const rotuerHook = useRouter()

    const handleLinkClick = (data: { url: string }) => {
        onCloseProp?.()
        rotuerHook.push(data.url)
    }

    return (
        <StyledBox className={classNameMemo} {...restProps}>
            <Box
                className="navigation-drawer__overlay"
                onClick={onCloseProp}
            ></Box>
            <Box className="navigation-drawer__main-content">
                <Box className="navigation-drawer__constrained-content">
                    <Box className="navigation-drawer__header">
                        <Box
                            className="navigation-drawer__close"
                            onClick={onCloseProp}
                        >
                            <TeenyiconsCloseIcon />
                        </Box>
                    </Box>
                    <Box className="navigation-drawer__body">
                        <Box
                            className="navigation-drawer__link"
                            as="a"
                            href="/pdfs/al-bondad-resume.pdf"
                            target="_blank"
                        >
                            Resume
                        </Box>
                        <Box
                            className="navigation-drawer__link"
                            onClick={() => {
                                handleLinkClick({ url: '#work-experience' })
                            }}
                        >
                            Work Experience
                        </Box>
                        <Box
                            className="navigation-drawer__link"
                            onClick={() => {
                                handleLinkClick({
                                    url: '#education-and-certifications',
                                })
                            }}
                        >
                            Education and Certifications
                        </Box>
                        <Box
                            className="navigation-drawer__link"
                            onClick={() => {
                                handleLinkClick({ url: '#skills' })
                            }}
                        >
                            Skills
                        </Box>
                        {childrenProp}
                    </Box>
                </Box>
            </Box>
        </StyledBox>
    )
}
