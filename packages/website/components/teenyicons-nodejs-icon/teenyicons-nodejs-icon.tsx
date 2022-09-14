import { StyledBox } from './teenyicons-teenyicons-nodejs-icon.styled-components'
import { SvgIcon } from '..'
import classNames from 'classnames'
import React, { ComponentProps, useMemo } from 'react'

export type TeenyiconsNodejsIconPropsType = ComponentProps<
    typeof StyledBox
> & {}

export const TeenyiconsNodejsIcon = ({
    className: classNameProp,
    ...restProps
}: TeenyiconsNodejsIconPropsType) => {
    const classNameMemo = useMemo(() => {
        const newClassNameMemo = classNames(
            'TeenyiconsNodejsIcon',
            classNameProp
        )
        return newClassNameMemo
    }, [classNameProp])

    return (
        <SvgIcon className={classNameMemo} {...restProps}>
            <path d="m12 1.021 10.1 5.892v10.174L12 22.98 1.9 17.087V6.913L12 1.02ZM2.9 7.487v9.026l2.48 1.446-.004-.006 1.43-.715A2.701 2.701 0 0 0 8.3 14.823V6.4h1v8.422a3.7 3.7 0 0 1-2.046 3.31l-.85.425L12 21.821l9.1-5.308V7.487L12 2.18 2.9 7.487Zm9.45.062A2.9 2.9 0 0 1 14.4 6.7h1.867A2.633 2.633 0 0 1 18.9 9.333V9.6h-1v-.267c0-.902-.731-1.633-1.633-1.633H14.4a1.9 1.9 0 1 0 0 3.8H16a2.9 2.9 0 1 1 0 5.8h-1.6a2.9 2.9 0 0 1-2.9-2.9h1a1.9 1.9 0 0 0 1.9 1.9H16a1.9 1.9 0 0 0 0-3.8h-1.6a2.9 2.9 0 0 1-2.05-4.95Z" />
        </SvgIcon>
    )
}
