import { Box } from '..'
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
        const newClassNameMemo = classNames('skill', classNameProp)
        return newClassNameMemo
    }, [classNameProp])

    return (
        <StyledBox className={classNameMemo} {...restProps}>
            <Box className="skill__icon">{iconProp}</Box>
            <Box className="skill__label">{labelProp}</Box>
        </StyledBox>
    )
}
