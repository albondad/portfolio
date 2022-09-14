import {
    Box,
    ConstrainedContent,
    Skill,
    TeenyiconsCodeIcon,
    TeenyiconsCss3Icon,
    TeenyiconsFigmaIcon,
    TeenyiconsGithubIcon,
    TeenyiconsGitIcon,
    TeenyiconsHtml5Icon,
    TeenyiconsJavascriptIcon,
    TeenyiconsMongodb,
    TeenyiconsNodejsIcon,
    TeenyiconsReactIcon,
} from '..'
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
        <StyledBox className={classNameMemo} {...restProps} id="skills">
            <ConstrainedContent className="SkillList-constrainedContent">
                <Box className="SkillList-heading">{headingProp}</Box>
                <Box className="SkillList-list">
                    <Box className="SkillList-item">
                        <Skill label="React" icon={<TeenyiconsReactIcon />} />
                    </Box>
                    <Box className="SkillList-item">
                        <Skill
                            label="Material UI"
                            icon={<TeenyiconsCodeIcon />}
                        />
                    </Box>
                    <Box className="SkillList-item">
                        <Skill
                            label="Semantic UI"
                            icon={<TeenyiconsCodeIcon />}
                        />
                    </Box>
                    <Box className="SkillList-item">
                        <Skill
                            label="Node.js"
                            icon={<TeenyiconsNodejsIcon />}
                        />
                    </Box>
                    <Box className="SkillList-item">
                        <Skill label="Express" icon={<TeenyiconsCodeIcon />} />
                    </Box>
                    <Box className="SkillList-item">
                        <Skill label="MongoDB" icon={<TeenyiconsMongodb />} />
                    </Box>
                    <Box className="SkillList-item">
                        <Skill
                            label="Javascript"
                            icon={<TeenyiconsJavascriptIcon />}
                        />
                    </Box>
                    <Box className="SkillList-item">
                        <Skill label="HTML" icon={<TeenyiconsHtml5Icon />} />
                    </Box>
                    <Box className="SkillList-item">
                        <Skill label="CSS" icon={<TeenyiconsCss3Icon />} />
                    </Box>
                    <Box className="SkillList-item">
                        <Skill label="Git" icon={<TeenyiconsGitIcon />} />
                    </Box>
                    <Box className="SkillList-item">
                        <Skill label="Figma" icon={<TeenyiconsFigmaIcon />} />
                    </Box>
                    <Box className="SkillList-item">
                        <Skill label="Adobe XD" icon={<TeenyiconsCodeIcon />} />
                    </Box>
                </Box>
            </ConstrainedContent>
        </StyledBox>
    )
}
