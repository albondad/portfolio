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
        const newClassNameMemo = classNames('NavigationDrawer', classNameProp, {
            'NavigationDrawer-isOpenFalse': !isOpenProp,
            'NavigationDrawer-isOpenTrue': !!isOpenProp,
        })
        return newClassNameMemo
    }, [classNameProp, isOpenProp])

    useEffect(() => {
        const hasNavigationDrawerOpen = !!document.getElementsByClassName(
            'NavigationDrawer-isOpenTrue'
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
                className="NavigationDrawer-overlay"
                onClick={onCloseProp}
            ></Box>
            <Box className="NavigationDrawer-mainContent">
                <Box className="NavigationDrawer-constrainedContent">
                    <Box className="NavigationDrawer-header">
                        <Box
                            className="NavigationDrawer-close"
                            onClick={onCloseProp}
                        >
                            <TeenyiconsCloseIcon />
                        </Box>
                    </Box>
                    <Box className="NavigationDrawer-body">
                        <Box
                            className="NavigationDrawer-link"
                            as="a"
                            href="/pdfs/al-bondad-resume.pdf"
                            target="_blank"
                        >
                            Resume
                        </Box>
                        <Box
                            className="NavigationDrawer-link"
                            onClick={() => {
                                handleLinkClick({ url: '#work-experience' })
                            }}
                        >
                            Work Experience
                        </Box>
                        <Box
                            className="NavigationDrawer-link"
                            onClick={() => {
                                handleLinkClick({
                                    url: '#education-and-certifications',
                                })
                            }}
                        >
                            Education and Certifications
                        </Box>
                        <Box
                            className="NavigationDrawer-link"
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
