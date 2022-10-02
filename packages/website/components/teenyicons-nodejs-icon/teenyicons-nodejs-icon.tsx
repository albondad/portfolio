import { StyledBox } from './teenyicons-nodejs-icon.styled-components'
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
            'teenyicons-nodejs-icon',
            classNameProp
        )
        return newClassNameMemo
    }, [classNameProp])

    return (
        <SvgIcon className={classNameMemo} {...restProps}>
            <path d="M12 .674 22.4 6.74v10.52L12 23.325 1.6 17.26V6.74L12 .674ZM3.2 7.659v8.681l2.183 1.274 1.29-.645A2.401 2.401 0 0 0 8 14.822V6.4h1.6v8.422A4 4 0 0 1 7.388 18.4l-.354.177L12 21.474l8.8-5.134V7.66L12 2.525 3.2 7.66Zm8.937-.322A3.2 3.2 0 0 1 14.4 6.4h1.867A2.933 2.933 0 0 1 19.2 9.333V9.6h-1.6v-.267C17.6 8.597 17.003 8 16.267 8H14.4a1.6 1.6 0 0 0 0 3.2H16a3.2 3.2 0 1 1 0 6.4h-1.6a3.2 3.2 0 0 1-3.2-3.2h1.6a1.6 1.6 0 0 0 1.6 1.6H16a1.6 1.6 0 0 0 0-3.2h-1.6a3.2 3.2 0 0 1-2.263-5.463Z" />
        </SvgIcon>
    )
}
