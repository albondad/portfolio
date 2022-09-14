import { StyledBox } from './teenyicons-figma-icon.styled-components'
import { SvgIcon } from '..'
import classNames from 'classnames'
import React, { ComponentProps, useMemo } from 'react'

export type TeenyiconsFigmaIconPropsType = ComponentProps<typeof StyledBox> & {}

export const TeenyiconsFigmaIcon = ({
    className: classNameProp,
    ...restProps
}: TeenyiconsFigmaIconPropsType) => {
    const classNameMemo = useMemo(() => {
        const newClassNameMemo = classNames(
            'TeenyiconsFigmaIcon',
            classNameProp
        )
        return newClassNameMemo
    }, [classNameProp])

    return (
        <SvgIcon className={classNameMemo} {...restProps}>
            <path d="M11.4 2.3V2h1v.3h2.7a3.7 3.7 0 0 1 1.857 6.9 3.698 3.698 0 0 1 .76 5.816 3.7 3.7 0 0 1-5.317-.086v3.87a3.7 3.7 0 1 1-5.557-3.2A3.697 3.697 0 0 1 5 12.4a3.7 3.7 0 0 1 1.843-3.2A3.7 3.7 0 0 1 8.7 2.3h2.7Zm0 1H8.7a2.7 2.7 0 1 0 0 5.4h2.7V3.3Zm0 6.4H8.7a2.7 2.7 0 0 0 0 5.4h2.7V9.7Zm1 .17V9.7h.17a3.554 3.554 0 0 0-.17.17Zm2.7-1.17a2.7 2.7 0 0 0 0-5.4h-2.7v5.4h2.7Zm-3.7 7.4H8.7a2.7 2.7 0 1 0 2.7 2.7v-2.7Zm1-3.7a2.7 2.7 0 1 0 5.4 0 2.7 2.7 0 0 0-5.4 0Z" />
        </SvgIcon>
    )
}
