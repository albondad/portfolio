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
            'TeenyiconsHtml5ITeenyiconsGitIconcon',
            classNameProp
        )
        return newClassNameMemo
    }, [classNameProp])

    return (
        <SvgIcon className={classNameMemo} {...restProps}>
            <path d="m11.206 2.268.565.567-.565-.567Zm-8.938 8.938-.565-.566.565.566Zm0 2.262.567-.565-.567.565Zm8.938 8.938-.566.565.566-.565Zm2.262 0-.565-.566.565.566Zm8.938-8.938.565.567-.565-.567Zm0-2.262-.566.565.566-.565Zm-8.938-8.938.567-.565-.567.565Zm-2.827-.565L1.703 10.64l1.132 1.132 8.936-8.936-1.13-1.132Zm-8.938 12.33 8.937 8.936 1.13-1.131-8.935-8.936-1.132 1.131Zm12.332 8.936 8.936-8.936-1.131-1.131-8.937 8.936 1.132 1.131Zm8.936-12.331-8.936-8.935-1.132 1.132 8.937 8.936 1.13-1.132v-.001Zm0 3.395a2.4 2.4 0 0 0 0-3.395l-1.131 1.131a.8.8 0 0 1 0 1.133l1.13 1.131Zm-12.33 8.938a2.4 2.4 0 0 0 3.395 0l-1.13-1.131a.8.8 0 0 1-1.134 0l-1.13 1.13ZM1.703 10.64a2.4 2.4 0 0 0 0 3.395l1.132-1.13a.8.8 0 0 1 0-1.134l-1.132-1.13Zm10.068-7.805a.8.8 0 0 1 1.132 0l1.13-1.133a2.4 2.4 0 0 0-3.395 0l1.131 1.132.002.001Zm-3.2 2.07 1.6 1.6 1.133-1.134-1.6-1.6L8.57 4.905Zm3.766 3.431a.8.8 0 0 1-.8-.8h-1.6a2.4 2.4 0 0 0 2.4 2.4v-1.6Zm.8-.8a.8.8 0 0 1-.8.8v1.6a2.4 2.4 0 0 0 2.4-2.4h-1.6Zm-.8-.8a.8.8 0 0 1 .8.8h1.6a2.4 2.4 0 0 0-2.4-2.4v1.6Zm0-1.6a2.4 2.4 0 0 0-2.4 2.4h1.6a.8.8 0 0 1 .8-.8v-1.6Zm1.034 4.566 2.4 2.4 1.13-1.132-2.4-2.4-1.13 1.132Zm3.766 3.434a.8.8 0 0 1-.8-.8h-1.6a2.4 2.4 0 0 0 2.4 2.4v-1.6Zm.8-.8a.8.8 0 0 1-.8.8v1.6a2.4 2.4 0 0 0 2.4-2.4h-1.6Zm-.8-.8a.8.8 0 0 1 .8.8h1.6a2.4 2.4 0 0 0-2.4-2.4v1.6Zm0-1.6a2.4 2.4 0 0 0-2.4 2.4h1.6a.8.8 0 0 1 .8-.8v-1.6Zm-5.6-.8v6.4h1.6v-6.4h-1.6Zm.8 8.8a.8.8 0 0 1-.8-.8h-1.6a2.4 2.4 0 0 0 2.4 2.4v-1.6Zm.8-.8a.8.8 0 0 1-.8.8v1.6a2.4 2.4 0 0 0 2.4-2.4h-1.6Zm-.8-.8a.8.8 0 0 1 .8.8h1.6a2.4 2.4 0 0 0-2.4-2.4v1.6Zm0-1.6a2.4 2.4 0 0 0-2.4 2.4h1.6a.8.8 0 0 1 .8-.8v-1.6Z" />
        </SvgIcon>
    )
}
