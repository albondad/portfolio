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
            <path d="m16.234 16.234-.565.566 1.131 1.131.566-.565-1.132-1.132ZM21.6 12l.566.566.565-.566-.565-.566L21.6 12Zm-4.234-5.366-.566-.565L15.669 7.2l.565.566 1.132-1.132ZM6.634 17.366l.566.565L8.331 16.8l-.565-.566-1.132 1.132ZM2.4 12l-.566-.566-.565.566.565.566L2.4 12Zm5.366-4.234.565-.566L7.2 6.069l-.566.565 1.132 1.132Zm9.6 9.6 4.8-4.8-1.132-1.132-4.8 4.8 1.132 1.132Zm4.8-5.932-4.8-4.8-1.132 1.132 4.8 4.8 1.132-1.132Zm-14.4 4.8-4.8-4.8-1.132 1.132 4.8 4.8 1.132-1.132Zm-4.8-3.668 4.8-4.8-1.132-1.132-4.8 4.8 1.132 1.132ZM12.811 2.27l-3.2 19.2 1.578.262 3.2-19.2-1.578-.262Z" />
        </SvgIcon>
    )
}
