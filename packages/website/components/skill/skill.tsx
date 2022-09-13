import { Box, TeenyiconsTextDocumentIcon } from '..'
import { StyledBox } from './skill.styled-components'
import classNames from 'classnames'
import React, { ComponentProps, useMemo } from 'react'

export type SkillPropsType = ComponentProps<typeof StyledBox> & {
    label: string
}

export const Skill = ({
    className: classNameProp,
    label: labelProp,
    ...restProps
}: SkillPropsType) => {
    const classNameMemo = useMemo(() => {
        const newClassNameMemo = classNames('Skill-root', classNameProp)
        return newClassNameMemo
    }, [classNameProp])

    return (
        <StyledBox className={classNameMemo} {...restProps}>
            <Box className="Skill-icon">
                <TeenyiconsTextDocumentIcon />
            </Box>
            <Box className="Skill-label">{labelProp}</Box>
        </StyledBox>
    )
}
