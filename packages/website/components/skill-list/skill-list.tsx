import { Box, ConstrainedContent, Skill } from '..'
import { StyledBox } from './skill-list.styled-component'
import classNames from 'classnames'
import React, { ComponentProps, useMemo } from 'react'

export type SkillListPropsType = ComponentProps<typeof StyledBox> & {
    heading?: string
}

export const SkillList = ({
    className: classNameProp,
    heading: headingProp = 'Skills',
    ...restProps
}: SkillListPropsType) => {
    const classNameMemo = useMemo(() => {
        const newClassNameMemo = classNames('SkillList-root', classNameProp)
        return newClassNameMemo
    }, [classNameProp])

    return (
        <StyledBox className={classNameMemo} {...restProps}>
            <ConstrainedContent className="SkillList-constrainedContent">
                <Box className="SkillList-heading">{headingProp}</Box>
                <Box className="SkillList-list">
                    <Box className="SkillList-item">
                        <Skill />
                    </Box>
                    <Box className="SkillList-item">
                        <Skill />
                    </Box>
                    <Box className="SkillList-item">
                        <Skill />
                    </Box>
                    <Box className="SkillList-item">
                        <Skill />
                    </Box>
                    <Box className="SkillList-item">
                        <Skill />
                    </Box>
                    <Box className="SkillList-item">
                        <Skill />
                    </Box>
                    <Box className="SkillList-item">
                        <Skill />
                    </Box>
                    <Box className="SkillList-item">
                        <Skill />
                    </Box>
                </Box>
            </ConstrainedContent>
        </StyledBox>
    )
}
