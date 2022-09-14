import { Box, TeenyiconsTextDocumentIcon } from '..'
import { StyledBox } from './skill.styled-components'
import classNames from 'classnames'
import React, { ComponentProps, useMemo, ReactNode } from 'react'

export type SkillPropsType = ComponentProps<typeof StyledBox> & {
    label: string
    icon: ReactNode
}

export const Skill = ({
    className: classNameProp,
    icon: iconProp,
    label: labelProp,
    ...restProps
}: SkillPropsType) => {
    const classNameMemo = useMemo(() => {
        const newClassNameMemo = classNames('Skill-root', classNameProp)
        return newClassNameMemo
    }, [classNameProp])

    return (
        <StyledBox className={classNameMemo} {...restProps}>
            <Box className="Skill-icon">{iconProp}</Box>
            <Box className="Skill-label">{labelProp}</Box>
        </StyledBox>
    )
}
