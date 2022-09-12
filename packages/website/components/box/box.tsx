import { StyledDiv } from './box.styled-components'
import classNames from 'classnames'
import React, { ComponentProps, useMemo } from 'react'

export type BoxPropsType = ComponentProps<typeof StyledDiv> & {}

export const Box = ({
    className: classNameProp,
    ...restProps
}: BoxPropsType) => {
    const classNameMemo = useMemo(() => {
        const newClassNameMemo = classNames('Box', classNameProp)
        return newClassNameMemo
    }, [classNameProp])

    return <StyledDiv className={classNameMemo} {...restProps} />
}
