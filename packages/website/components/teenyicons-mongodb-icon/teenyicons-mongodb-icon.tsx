import { StyledBox } from './teenyicons-mongodb-icon.styled-components'
import { SvgIcon } from '..'
import classNames from 'classnames'
import React, { ComponentProps, useMemo } from 'react'

export type TeenyiconsMongodbPropsType = ComponentProps<typeof StyledBox> & {}

export const TeenyiconsMongodb = ({
    className: classNameProp,
    ...restProps
}: TeenyiconsMongodbPropsType) => {
    const classNameMemo = useMemo(() => {
        const newClassNameMemo = classNames(
            'teenyicons-mongodb-icon',
            classNameProp
        )
        return newClassNameMemo
    }, [classNameProp])

    return (
        <SvgIcon className={classNameMemo} {...restProps}>
            <path d="m12 .8.59-.54a.8.8 0 0 0-1.18 0L12 .8Zm0 20.8-.629.494a.799.799 0 0 0 1.258 0L12 21.6Zm-4.603-5.86-.629.497.629-.496ZM7.79 5.395 7.2 4.85l.59.54v.003Zm8.42 0 .59-.541-.59.539v.002Zm.393 10.347.63.496-.63-.496ZM12.8 24V.8h-1.6V24h1.6Zm-.171-2.894-4.603-5.858-1.258.989 4.603 5.859 1.258-.989v-.001ZM8.379 5.933l4.213-4.592L11.408.259 7.2 4.851l1.178 1.082h.001Zm3.03-4.592 4.212 4.592 1.18-1.08L12.59.26l-1.183 1.078.002.002Zm4.566 13.905-4.604 5.86 1.258.988 4.603-5.859-1.257-.989Zm-.354-9.312a7.2 7.2 0 0 1 .352 9.312l1.26.99A8.8 8.8 0 0 0 16.8 4.852l-1.18 1.08v.001Zm-7.595 9.312a7.2 7.2 0 0 1 .353-9.312L7.2 4.851a8.8 8.8 0 0 0-.432 11.383l1.258-.99v.002Z" />
        </SvgIcon>
    )
}
