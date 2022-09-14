import { StyledBox } from './teenyicons-html5.styled-components'
import { SvgIcon } from '..'
import classNames from 'classnames'
import React, { ComponentProps, useMemo } from 'react'

export type TeenyiconsHtml5IconPropsType = ComponentProps<typeof StyledBox> & {}

export const TeenyiconsHtml5Icon = ({
    className: classNameProp,
    ...restProps
}: TeenyiconsHtml5IconPropsType) => {
    const classNameMemo = useMemo(() => {
        const newClassNameMemo = classNames(
            'TeenyiconsHtml5Icon',
            classNameProp
        )
        return newClassNameMemo
    }, [classNameProp])

    return (
        <SvgIcon className={classNameMemo} {...restProps}>
            <path d="M2 2h20.724l-1.476 17.709-8.886 2.962-8.886-2.962L2 2Zm.959.882 1.348 16.174 8.055 2.685 8.055-2.685 1.348-16.174H2.959Zm4.726 3.353h9.618v.883H8.568v3.353h8.47v4.994l-4.676 1.559-4.677-1.559v-2.436h.883v1.8l3.794 1.265 3.794-1.265v-3.476h-8.47V6.235Z" />
        </SvgIcon>
    )
}
