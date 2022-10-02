import { StyledBox } from './svg-icon.styled-components'
import classNames from 'classnames'
import React, { ComponentProps, useMemo } from 'react'

export type SvgIconPropsType = ComponentProps<typeof StyledBox> & {
    viewBox?: string
    xmlns?: string
}

export const SvgIcon = ({
    className: classNameProp,
    viewBoxProp: viewBoxProp = '0 0 24 24',
    xmlns: xmlnsProp,
    width: widthProp = '24',
    height: heightProp = '24',
    as: asProp = 'svg',
    ...restProps
}: SvgIconPropsType) => {
    const classNameMemo = useMemo(() => {
        const newClassNameMemo = classNames('svg-icon', classNameProp)
        return newClassNameMemo
    }, [classNameProp])

    return (
        <StyledBox
            {...restProps}
            as={asProp}
            className={classNameMemo}
            height={heightProp}
            viewBox={viewBoxProp}
            width={widthProp}
            xmlns={xmlnsProp}
        />
    )
}
