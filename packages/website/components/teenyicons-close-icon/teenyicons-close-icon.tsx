import { StyledBox } from './teenyicons-close-icon.styled-components'
import { SvgIcon } from '..'
import classNames from 'classnames'
import React, { ComponentProps, useMemo } from 'react'

export type TeenyiconsCloseIconPropsType = ComponentProps<typeof StyledBox> & {}

export const TeenyiconsCloseIcon = ({
    className: classNameProp,
    ...restProps
}: TeenyiconsCloseIconPropsType) => {
    const classNameMemo = useMemo(() => {
        const newClassNameMemo = classNames(
            'teenyicons-close-icon',
            classNameProp
        )
        return newClassNameMemo
    }, [classNameProp])

    return (
        <SvgIcon className={classNameMemo} {...restProps}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.868 12 1.834 2.966l1.132-1.132L12 10.868l9.034-9.034 1.132 1.132L13.13 12l9.035 9.034-1.132 1.132L12 13.13l-9.034 9.035-1.132-1.132L10.868 12Z"
            />
        </SvgIcon>
    )
}
