import { StyledBox } from './space.styled-components'
import classNames from 'classnames'
import React, { ComponentProps, useMemo } from 'react'

export type SpacePropsType = ComponentProps<typeof StyledBox> & {}

export const Space = ({
    className: classNameProp,
    size: sizeProp,
    ...restProps
}: SpacePropsType) => {
    const classNameMemo = useMemo(() => {
        const newClassNameMemo = classNames('space', classNameProp)
        return newClassNameMemo
    }, [classNameProp])

    return <StyledBox className={classNameMemo} {...restProps}></StyledBox>
}
