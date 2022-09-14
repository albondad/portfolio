import { StyledBox } from './teenyicons-javascript-icon.styled-components'
import { SvgIcon } from '..'
import classNames from 'classnames'
import React, { ComponentProps, useMemo } from 'react'

export type TeenyiconsJavascriptIconPropsType = ComponentProps<
    typeof StyledBox
> & {}

export const TeenyiconsJavascriptIcon = ({
    className: classNameProp,
    ...restProps
}: TeenyiconsJavascriptIconPropsType) => {
    const classNameMemo = useMemo(() => {
        const newClassNameMemo = classNames(
            'TeenyiconsJavascriptIcon',
            classNameProp
        )
        return newClassNameMemo
    }, [classNameProp])

    return (
        <SvgIcon className={classNameMemo} {...restProps}>
            <path d="M1 1h23v23H1V1Zm.983.983v21.034h21.034V1.983H1.983Zm8.453 16.021v-7.863h.983v7.863a2.85 2.85 0 1 1-5.701 0H6.7a1.867 1.867 0 1 0 3.735 0Zm3.98-6.733a2.85 2.85 0 0 1 2.016-.835h1.835a2.588 2.588 0 0 1 2.588 2.588v.262h-.983v-.262c0-.886-.719-1.605-1.605-1.605h-1.835a1.868 1.868 0 0 0 0 3.735h1.572a2.85 2.85 0 0 1 0 5.7h-1.572a2.85 2.85 0 0 1-2.85-2.85h.982a1.868 1.868 0 0 0 1.868 1.868h1.572a1.868 1.868 0 0 0 0-3.735h-1.572a2.85 2.85 0 0 1-2.016-4.866Z" />
        </SvgIcon>
    )
}
