import {
    Box,
    ConstrainedContent,
    Skill,
    TeenyiconsCodeIcon,
    TeenyiconsCss3Icon,
    TeenyiconsFigmaIcon,
    TeenyiconsGitIcon,
    TeenyiconsHtml5Icon,
    TeenyiconsJavascriptIcon,
    TeenyiconsMongodb,
    TeenyiconsNodejsIcon,
    TeenyiconsReactIcon,
    TeenyiconsTypescriptIcon,
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
        const newClassNameMemo = classNames('skill-list__', classNameProp)
        return newClassNameMemo
    }, [classNameProp])

    return (
        <StyledBox className={classNameMemo} {...restProps} id="skills">
            <ConstrainedContent className="skill-list__constrained-content">
                <Box className="skill-list__heading">{headingProp}</Box>
                <Box className="skill-list__list">
                    <Box className="skill-list__item">
                        <Skill label="React" icon={<TeenyiconsReactIcon />} />
                    </Box>
                    <Box className="skill-list__item">
                        <Skill
                            label="Material UI"
                            icon={<TeenyiconsCodeIcon />}
                        />
                    </Box>
                    <Box className="skill-list__item">
                        <Skill
                            label="Semantic UI"
                            icon={<TeenyiconsCodeIcon />}
                        />
                    </Box>
                    <Box className="skill-list__item">
                        <Skill
                            label="Node.js"
                            icon={<TeenyiconsNodejsIcon />}
                        />
                    </Box>
                    <Box className="skill-list__item">
                        <Skill label="Express" icon={<TeenyiconsCodeIcon />} />
                    </Box>
                    <Box className="skill-list__item">
                        <Skill label="MongoDB" icon={<TeenyiconsMongodb />} />
                    </Box>
                    <Box className="skill-list__item">
                        <Skill
                            label="Javascript"
                            icon={<TeenyiconsJavascriptIcon />}
                        />
                    </Box>
                    <Box className="skill-list__item">
                        <Skill
                            label="Typescript"
                            icon={<TeenyiconsTypescriptIcon />}
                        />
                    </Box>
                    <Box className="skill-list__item">
                        <Skill label="HTML" icon={<TeenyiconsHtml5Icon />} />
                    </Box>
                    <Box className="skill-list__item">
                        <Skill label="CSS" icon={<TeenyiconsCss3Icon />} />
                    </Box>
                    <Box className="skill-list__item">
                        <Skill label="Git" icon={<TeenyiconsGitIcon />} />
                    </Box>
                    <Box className="skill-list__item">
                        <Skill label="Figma" icon={<TeenyiconsFigmaIcon />} />
                    </Box>
                    <Box className="skill-list__item">
                        <Skill label="Adobe XD" icon={<TeenyiconsCodeIcon />} />
                    </Box>
                </Box>
            </ConstrainedContent>
        </StyledBox>
    )
}
