import { Box, SocialMediaButtons, ConstrainedContent } from '..'
import { StyledBox } from './hero-header.styled-components'
import classNames from 'classnames'
import Image from 'next/image'
import portaitImage from '../../images/portait.png'
import React, { ComponentProps, useMemo } from 'react'

export type HeroHeaderPropsType = ComponentProps<typeof StyledBox> & {}

export const HeroHeader = ({
    className: classNameProp,
    ...restProps
}: HeroHeaderPropsType) => {
    const classNameMemo = useMemo(() => {
        const newClassNameMemo = classNames('hero-header', classNameProp)
        return newClassNameMemo
    }, [classNameProp])

    return (
        <StyledBox className={classNameMemo} {...restProps}>
            <ConstrainedContent className="hero-header__constrained-content">
                <Box className="hero-header__image">
                    <Image
                        src="/images/portrait.png"
                        layout="fill"
                        alt="portait image"
                    />
                </Box>

                <Box className="hero-header__text">
                    <Box className="hero-header__heading">
                        SOFTWARE DEVELOPER
                    </Box>
                    <Box className="hero-header__description">
                        Hello there, thank you for dropping by! I’m a software
                        developer based in Illinois with over two and a half
                        years of experience in web development. I’ve worked as a
                        software developer in small companies, startups, and
                        organizations, both full time, part-time, and as a
                        contracted developer, and would be looking forward to
                        working with you!
                    </Box>
                </Box>

                <Box className="hero-header__actions">
                    <SocialMediaButtons>test</SocialMediaButtons>
                </Box>
            </ConstrainedContent>
        </StyledBox>
    )
}
