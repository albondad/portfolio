import { StyledBox } from './teenyicons-css3-icon.styled-components'
import { SvgIcon } from '..'
import classNames from 'classnames'
import React, { ComponentProps, useMemo } from 'react'

export type TeenyiconsCss3IconPropsType = ComponentProps<typeof StyledBox> & {}

export const TeenyiconsCss3Icon = ({
    className: classNameProp,
    ...restProps
}: TeenyiconsCss3IconPropsType) => {
    const classNameMemo = useMemo(() => {
        const newClassNameMemo = classNames('TeenyiconsCss3Icon', classNameProp)
        return newClassNameMemo
    }, [classNameProp])

    return (
        <SvgIcon className={classNameMemo} {...restProps}>
            <path d="M2 2h20.724l-1.476 17.709-8.886 2.962-8.886-2.962L2 2Zm.959.882 1.348 16.174 8.055 2.685 8.055-2.685 1.348-16.174H2.959Zm13.197 4.236H7.42v-.883h9.617v9.23l-4.676 1.559-4.677-1.559v-2.436h.883v1.8l3.794 1.265 3.794-1.265v-3.476h-5.912v-.882h5.912V7.118Z" />
        </SvgIcon>
    )
}
