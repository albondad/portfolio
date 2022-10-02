import { StyledBox } from './teenyicons-git-icon.styled-components'
import { SvgIcon } from '..'
import classNames from 'classnames'
import React, { ComponentProps, useMemo } from 'react'

export type TeenyiconsGitIconPropsType = ComponentProps<typeof StyledBox> & {}

export const TeenyiconsGitIcon = ({
    className: classNameProp,
    ...restProps
}: TeenyiconsGitIconPropsType) => {
    const classNameMemo = useMemo(() => {
        const newClassNameMemo = classNames(
            'teenyicons-git-icon',
            classNameProp
        )
        return newClassNameMemo
    }, [classNameProp])

    return (
        <SvgIcon className={classNameMemo} {...restProps}>
            <path d="m10.869 1.931.565.567-.565-.567ZM1.93 10.87l-.565-.567.565.567Zm0 2.262.567-.565-.567.565Zm8.938 8.938-.567.565.567-.565Zm2.262 0-.565-.567.565.567Zm8.938-8.938.565.566-.565-.566Zm0-2.262-.567.565.567-.565ZM13.13 1.93l.566-.565-.566.565Zm-2.827-.565-8.938 8.936 1.132 1.132 8.936-8.936-1.13-1.132Zm-8.938 12.33 8.936 8.936 1.132-1.131-8.936-8.936-1.132 1.13Zm12.332 8.936 8.936-8.936-1.132-1.131-8.936 8.936 1.131 1.13ZM22.633 10.3l-8.937-8.935-1.13 1.132 8.935 8.936 1.132-1.132v-.001Zm0 3.395a2.399 2.399 0 0 0 0-3.395l-1.132 1.13a.801.801 0 0 1 0 1.134l1.132 1.13Zm-12.33 8.938a2.4 2.4 0 0 0 3.395 0l-1.131-1.132a.801.801 0 0 1-1.133 0l-1.131 1.132Zm-8.938-12.33a2.401 2.401 0 0 0 0 3.395l1.132-1.131a.8.8 0 0 1 0-1.133l-1.132-1.131Zm10.068-7.805a.8.8 0 0 1 1.132 0l1.13-1.133a2.4 2.4 0 0 0-3.395 0l1.13 1.132.003.001Zm-3.2 2.069 1.6 1.6 1.132-1.133-1.6-1.6-1.132 1.133ZM12 8a.8.8 0 0 1-.8-.8H9.6A2.4 2.4 0 0 0 12 9.6V8Zm.8-.8a.8.8 0 0 1-.8.8v1.6a2.4 2.4 0 0 0 2.4-2.4h-1.6Zm-.8-.8a.8.8 0 0 1 .8.8h1.6A2.4 2.4 0 0 0 12 4.8v1.6Zm0-1.6a2.4 2.4 0 0 0-2.4 2.4h1.6a.8.8 0 0 1 .8-.8V4.8Zm1.034 4.566 2.4 2.4 1.13-1.133-2.4-2.4-1.13 1.133ZM16.8 12.8a.8.8 0 0 1-.8-.8h-1.6a2.4 2.4 0 0 0 2.4 2.4v-1.6Zm.8-.8a.8.8 0 0 1-.8.8v1.6a2.4 2.4 0 0 0 2.4-2.4h-1.6Zm-.8-.8a.8.8 0 0 1 .8.8h1.6a2.4 2.4 0 0 0-2.4-2.4v1.6Zm0-1.6a2.4 2.4 0 0 0-2.4 2.4H16a.8.8 0 0 1 .8-.8V9.6Zm-5.6-.8v6.4h1.6V8.8h-1.6Zm.8 8.8a.8.8 0 0 1-.8-.8H9.6a2.4 2.4 0 0 0 2.4 2.4v-1.6Zm.8-.8a.8.8 0 0 1-.8.8v1.6a2.4 2.4 0 0 0 2.4-2.4h-1.6ZM12 16a.8.8 0 0 1 .8.8h1.6a2.4 2.4 0 0 0-2.4-2.4V16Zm0-1.6a2.4 2.4 0 0 0-2.4 2.4h1.6a.8.8 0 0 1 .8-.8v-1.6Z" />
        </SvgIcon>
    )
}
