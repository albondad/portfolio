import { StyledBox } from './constrained-content.styled-components'
import classNames from 'classnames'
import React, { ComponentProps, useMemo } from 'react'

export type ConstrainedContentPropsType = ComponentProps<typeof StyledBox> & {}

export const ConstrainedContent = ({
    className: classNameProp,
    ...restProps
}: ConstrainedContentPropsType) => {
    const classNameMemo = useMemo(() => {
        const newClassNameMemo = classNames(
            'ConstrainedContent-root',
            classNameProp
        )
        return newClassNameMemo
    }, [classNameProp])

    return <StyledBox className={classNameMemo} {...restProps}></StyledBox>
}
