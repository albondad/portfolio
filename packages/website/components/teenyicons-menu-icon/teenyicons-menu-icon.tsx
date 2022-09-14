import { StyledBox } from './teenyicons-menu-icon.styled-components'
import { SvgIcon } from '..'
import classNames from 'classnames'
import React, { ComponentProps, useMemo } from 'react'

export type TeenyiconsMenuIconPropsType = ComponentProps<typeof StyledBox> & {}

export const TeenyiconsMenuIcon = ({
    className: classNameProp,
    ...restProps
}: TeenyiconsMenuIconPropsType) => {
    const classNameMemo = useMemo(() => {
        const newClassNameMemo = classNames('TeenyiconsMenuIcon', classNameProp)
        return newClassNameMemo
    }, [classNameProp])

    return (
        <SvgIcon className={classNameMemo} {...restProps}>
            <path d="M24 3.2H0V1.6h24v1.6Zm0 6.4H0V8h24v1.6Zm0 6.4H0v-1.6h24V16Zm0 6.4H0v-1.6h24v1.6Z" />
        </SvgIcon>
    )
}
