import { StyledBox } from './teenyicons-arrow-left-small-icon.styled-components'
import { SvgIcon } from '..'
import classNames from 'classnames'
import React, { ComponentProps, useMemo } from 'react'

export type TeenyiconsArrowLeftSmallIconPropsType = ComponentProps<
    typeof StyledBox
> & {}

export const TeenyiconsArrowLeftSmallIcon = ({
    className: classNameProp,
    ...restProps
}: TeenyiconsArrowLeftSmallIconPropsType) => {
    const classNameMemo = useMemo(() => {
        const newClassNameMemo = classNames(
            'TeenyiconsArrowLeftIcon-root',
            classNameProp
        )
        return newClassNameMemo
    }, [classNameProp])

    return (
        <SvgIcon className={classNameMemo} {...restProps}>
            <path d="m9.833 15.766.567.565 1.13-1.131-.564-.566-1.133 1.132ZM7.2 12l-.567-.566-.565.566.565.566L7.2 12Zm3.766-2.634.565-.566L10.4 7.669l-.567.565 1.133 1.132Zm0 5.268-3.2-3.2-1.133 1.132 3.2 3.2 1.133-1.132Zm-3.2-2.068 3.2-3.2-1.133-1.132-3.2 3.2 1.133 1.132ZM7.2 12.8h10.4v-1.6H7.2v1.6Z" />
        </SvgIcon>
    )
}
