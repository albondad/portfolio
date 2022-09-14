import { StyledBox } from './teenyicons-code-icon.styled-components'
import { SvgIcon } from '..'
import classNames from 'classnames'
import React, { ComponentProps, useMemo } from 'react'

export type TeenyiconsCodeIconPropsType = ComponentProps<typeof StyledBox> & {}

export const TeenyiconsCodeIcon = ({
    className: classNameProp,
    ...restProps
}: TeenyiconsCodeIconPropsType) => {
    const classNameMemo = useMemo(() => {
        const newClassNameMemo = classNames('TeenyiconsCodeIcon', classNameProp)
        return newClassNameMemo
    }, [classNameProp])

    return (
        <SvgIcon className={classNameMemo} {...restProps}>
            <path d="m15.965 15.965-.565.566 1.131 1.131.567-.564-1.133-1.133Zm5.366-4.234.567.567.564-.567-.564-.566-.567.566Zm-4.233-5.366L16.53 5.8 15.4 6.931l.565.567 1.133-1.133ZM6.365 17.098l.566.564 1.131-1.13-.564-.567-1.133 1.133ZM2.13 11.73l-.566-.566L1 11.73l.565.567.566-.567Zm5.367-4.233.564-.567L6.932 5.8l-.567.565 1.133 1.133Zm9.6 9.6 4.8-4.8-1.133-1.133-4.8 4.8 1.133 1.133Zm4.8-5.933-4.8-4.8-1.133 1.133 4.8 4.8 1.133-1.133Zm-14.4 4.8-4.8-4.8-1.133 1.133 4.8 4.8 1.133-1.133Zm-4.8-3.667 4.8-4.8-1.133-1.133-4.8 4.8 1.133 1.133ZM12.542 2l-3.2 19.2 1.578.262 3.2-19.2L12.542 2Z" />
        </SvgIcon>
    )
}
