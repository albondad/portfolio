import { SvgIcon } from '..'
import { StyledBox } from './teenyicons-text-document-icon.styled-components'
import classNames from 'classnames'
import React, { ComponentProps, useMemo } from 'react'

export type TeenyiconsTextDocumentIconPropsType = ComponentProps<
    typeof StyledBox
> & {}

export const TeenyiconsTextDocumentIcon = ({
    className: classNameProp,
    ...restProps
}: TeenyiconsTextDocumentIconPropsType) => {
    const classNameMemo = useMemo(() => {
        const newClassNameMemo = classNames(
            'TeenyiconsTextDocumentIcon-root',
            classNameProp
        )
        return newClassNameMemo
    }, [classNameProp])

    return (
        <SvgIcon className={classNameMemo} {...restProps}>
            <path d="M7.6 11.192h-.8v1.6h.8v-1.6Zm9.6 1.6h.8v-1.6h-.8v1.6Zm-9.6 3.197h-.8v1.6h.8v-1.6Zm9.6 1.611h.8V16h-.8v1.6ZM7.6 6.395h-.8v1.6h.8v-1.6ZM14 8h.8V6.4H14V8ZM17.2.8l.566-.566L17.531 0H17.2v.8ZM22 5.6h.8v-.331l-.234-.235L22 5.6ZM7.6 12.792h9.6v-1.6H7.6v1.6Zm0 4.797 9.6.011V16l-9.6-.011v1.6Zm0-9.594L14 8V6.4l-6.4-.005v1.6ZM20.4 22.4h-16V24h16v-1.6Zm-16.8-.8V2.4H2v19.2h1.6Zm.8-20h12.8V0H4.4v1.6Zm16.8 4v16h1.6v-16h-1.6Zm-4.566-4.234 4.8 4.8 1.132-1.132-4.8-4.8-1.132 1.132ZM4.4 22.4a.8.8 0 0 1-.8-.8H2A2.4 2.4 0 0 0 4.4 24v-1.6Zm16 1.6a2.4 2.4 0 0 0 2.4-2.4h-1.6a.8.8 0 0 1-.8.8V24ZM3.6 2.4a.8.8 0 0 1 .8-.8V0A2.4 2.4 0 0 0 2 2.4h1.6Z" />
        </SvgIcon>
    )
}
