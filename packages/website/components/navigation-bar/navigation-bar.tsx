import { Box, ConstrainedContent } from '..'
import { StyledBox } from './navigation-bar.styled-components'
import classNames from 'classnames'
import React, { ComponentProps, useMemo } from 'react'

export type NavigationBarPropsType = ComponentProps<typeof StyledBox> & {}

export const NavigationBar = ({
    className: classNameProp,
    ...restProps
}: NavigationBarPropsType) => {
    const classNameMemo = useMemo(() => {
        const newClassNameMemo = classNames('NavigationBar-root', classNameProp)
        return newClassNameMemo
    }, [classNameProp])

    return (
        <StyledBox className={classNameMemo} {...restProps}>
            <Box className="NavigationBar-errorMessage">
                <ConstrainedContent>
                    Thanks for dropping by! I{"'"}m still in the middle of
                    developing albondad.com so you can expect some bug fixes and
                    design changes in the future.
                </ConstrainedContent>
            </Box>
            <ConstrainedContent className="NavigationBar-constrainedContent">
                <Box className="NavigationBar-logo">AL BONDAD</Box>
            </ConstrainedContent>
        </StyledBox>
    )
}
