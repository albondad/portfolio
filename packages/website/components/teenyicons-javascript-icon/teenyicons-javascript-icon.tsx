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
            <path d="M0 0h24v24H0V0Zm1.6 1.6v20.8h20.8V1.6H1.6Zm8 16v-8h1.6v8a3.2 3.2 0 1 1-6.4 0h1.6a1.6 1.6 0 0 0 3.2 0Zm4.137-7.063A3.2 3.2 0 0 1 16 9.6h1.867a2.933 2.933 0 0 1 2.933 2.933v.267h-1.6v-.267c0-.736-.597-1.333-1.333-1.333H16a1.6 1.6 0 0 0 0 3.2h1.6a3.2 3.2 0 1 1 0 6.4H16a3.2 3.2 0 0 1-3.2-3.2h1.6a1.6 1.6 0 0 0 1.6 1.6h1.6a1.6 1.6 0 0 0 0-3.2H16a3.2 3.2 0 0 1-2.263-5.463Z" />
        </SvgIcon>
    )
}
