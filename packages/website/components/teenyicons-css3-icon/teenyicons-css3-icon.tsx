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
            <path d="M1.35.706h21.3l-1.514 18.17L12 21.92l-9.135-3.045L1.35.705Zm1.535 1.412 1.31 15.712L12 20.432l7.806-2.602 1.31-15.712H2.884ZM15.53 6.353H7.059V4.94h9.882v9.685l-4.94 1.647-4.942-1.647V12H8.47v1.609L12 14.785l3.529-1.176v-3.02H9.882V9.175h5.648V6.353Z" />
        </SvgIcon>
    )
}
