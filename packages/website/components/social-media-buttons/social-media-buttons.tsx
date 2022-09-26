import {
    Box,
    Button,
    TeenyiconsGithubIcon,
    TeenyiconsLinkedInIcon,
    TeenyiconsTextDocumentIcon,
} from '..'
import { StyledBox } from './social-media-buttons.styled-components'
import classNames from 'classnames'
import React, { ComponentProps, useMemo } from 'react'
import { useRouter } from 'next/router'

export type SocialMediaButtonsPropsType = ComponentProps<typeof StyledBox> & {}

export const SocialMediaButtons = ({
    className: classNameProp,
    ...restProps
}: SocialMediaButtonsPropsType) => {
    const classNameMemo = useMemo(() => {
        const newClassNameMemo = classNames('SocialMediaButtons', classNameProp)
        return newClassNameMemo
    }, [classNameProp])

    const routerHook = useRouter()

    return (
        <StyledBox className={classNameMemo} {...restProps}>
            <Box
                as="a"
                href="/pdfs/al-bondad-resume.pdf"
                rel="noreferrer"
                target="_blank"
            >
                <Button>
                    <TeenyiconsTextDocumentIcon />
                </Button>
            </Box>
            <Box
                as="a"
                href="https://www.linkedin.com/in/albondad/"
                rel="noreferrer"
                target="_blank"
            >
                <Button>
                    <TeenyiconsLinkedInIcon />
                </Button>
            </Box>
            <Box
                as="a"
                href="https://github.com/albondad"
                rel="noreferrer"
                target="_blank"
            >
                <Button>
                    <TeenyiconsGithubIcon />
                </Button>
            </Box>
        </StyledBox>
    )
}
