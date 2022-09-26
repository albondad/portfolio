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
            'TeenyiconsTextDocumentIcon',
            classNameProp
        )
        return newClassNameMemo
    }, [classNameProp])

    return (
        <SvgIcon className={classNameMemo} {...restProps}>
            <path d="M7.2 11.192h-.8v1.6h.8v-1.6Zm9.6 1.6h.8v-1.6h-.8v1.6ZM7.2 16h-.8v1.6h.8V16Zm9.6 1.6h.8V16h-.8v1.6ZM7.2 6.395h-.8v1.6h.8v-1.6Zm9.6 1.6h.8v-1.6h-.8v1.6ZM21.6 5.6h.8v-.331l-.233-.235-.567.566ZM16.8.8l.566-.566L17.131 0h-.33v.8ZM7.2 12.792h9.6v-1.6H7.2v1.6Zm0 4.808h9.6V16H7.2v1.6Zm0-9.605h9.6v-1.6H7.2v1.6ZM20 22.4H4V24h16v-1.6Zm-16.8-.8V2.4H1.6v19.2h1.6Zm17.6-16v16h1.6v-16h-1.6ZM4 1.6h12.8V0H4v1.6Zm12.234-.234 4.8 4.8 1.133-1.132-4.8-4.8-1.133 1.132ZM4 22.4a.8.8 0 0 1-.8-.8H1.6A2.4 2.4 0 0 0 4 24v-1.6ZM20 24a2.4 2.4 0 0 0 2.4-2.4h-1.6a.8.8 0 0 1-.8.8V24ZM3.2 2.4a.8.8 0 0 1 .8-.8V0a2.4 2.4 0 0 0-2.4 2.4h1.6Z" />
        </SvgIcon>
    )
}
