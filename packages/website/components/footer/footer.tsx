import { Box, ConstrainedContent, SocialMediaButtons } from '..'
import { StyledBox } from './footer.styled-components'
import classNames from 'classnames'
import React, { ComponentProps, useMemo } from 'react'

export type FooterPropsType = ComponentProps<typeof StyledBox> & {}

export const Footer = ({
    className: classNameProp,
    ...restProps
}: FooterPropsType) => {
    const classNameMemo = useMemo(() => {
        const newClassNameMemo = classNames('footer', classNameProp)
        return newClassNameMemo
    }, [classNameProp])

    return (
        <StyledBox className={classNameMemo} {...restProps}>
            <ConstrainedContent className="footer__constrained-content">
                <Box className="footer__heading">{"Let's Connect"}</Box>
                <Box className="footer__actions">
                    <SocialMediaButtons />
                </Box>
            </ConstrainedContent>
        </StyledBox>
    )
}
