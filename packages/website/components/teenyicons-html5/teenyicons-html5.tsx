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
            'teenyicons-html5-icon',
            classNameProp
        )
        return newClassNameMemo
    }, [classNameProp])

    return (
        <SvgIcon className={classNameMemo} {...restProps}>
            <path d="M1.35.706h21.3l-1.514 18.17L12 21.92l-9.135-3.045L1.35.705Zm1.535 1.412 1.31 15.712L12 20.432l7.806-2.602 1.31-15.712H2.884ZM7.059 4.94h9.882v1.412h-8.47v2.823h8.47v5.45l-4.94 1.647-4.942-1.647V12H8.47v1.609L12 14.785l3.529-1.176v-3.02H7.059V4.94Z" />
        </SvgIcon>
    )
}
