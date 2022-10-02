import { StyledBox } from './teenyicons-typescript-icon.styeld-components'
import { SvgIcon } from '..'
import classNames from 'classnames'
import React, { ComponentProps, useMemo } from 'react'

export type TeenyiconsTypescriptIconPropsType = ComponentProps<
    typeof StyledBox
> & {}

export const TeenyiconsTypescriptIcon = ({
    className: classNameProp,
    ...restProps
}: TeenyiconsTypescriptIconPropsType) => {
    const classNameMemo = useMemo(() => {
        const newClassNameMemo = classNames(
            'teenyicons-typescript-icon',
            classNameProp
        )
        return newClassNameMemo
    }, [classNameProp])

    return (
        <SvgIcon className={classNameMemo} {...restProps}>
            <path d="M0 0h24v24H0V0Zm1.6 1.6v20.8h20.8V1.6H1.6Zm3.2 8h8v1.6H9.6v9.6H8v-9.6H4.8V9.6Zm8.937.937A3.2 3.2 0 0 1 16 9.6h1.867a2.933 2.933 0 0 1 2.933 2.933v.267h-1.6v-.267c0-.736-.597-1.333-1.333-1.333H16a1.6 1.6 0 0 0 0 3.2h1.6a3.2 3.2 0 1 1 0 6.4H16a3.2 3.2 0 0 1-3.2-3.2h1.6a1.6 1.6 0 0 0 1.6 1.6h1.6a1.6 1.6 0 0 0 0-3.2H16a3.2 3.2 0 0 1-2.263-5.463Z" />
        </SvgIcon>
    )
}
