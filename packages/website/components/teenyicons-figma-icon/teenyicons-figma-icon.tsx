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
            'teenyicons-figma-icon',
            classNameProp
        )
        return newClassNameMemo
    }, [classNameProp])

    return (
        <SvgIcon className={classNameMemo} {...restProps}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.8 3.2a2.4 2.4 0 1 0 0 4.8h2.4V3.2H8.8Zm0-1.6a4 4 0 0 0-2.4 7.2 4.001 4.001 0 0 0 0 6.4 4 4 0 1 0 6.4 3.2v-3.2a4 4 0 1 0 4.8-6.4 4.002 4.002 0 0 0 .428-6.028A4 4 0 0 0 15.2 1.6H8.8Zm4 1.6V8h2.4a2.4 2.4 0 0 0 0-4.8h-2.4Zm-1.6 6.4H8.8a2.4 2.4 0 0 0 0 4.8h2.4V9.6Zm0 6.4H8.8a2.4 2.4 0 1 0 2.4 2.4V16Zm1.6-4a2.4 2.4 0 1 0 4.8 0 2.4 2.4 0 0 0-4.8 0Z"
            />
        </SvgIcon>
    )
}
