import { StyledBox } from './teenyicons-mongodb-icon.styled-components'
import { SvgIcon } from '..'
import classNames from 'classnames'
import React, { ComponentProps, useMemo } from 'react'

export type TeenyiconsMongodbPropsType = ComponentProps<typeof StyledBox> & {}

export const TeenyiconsMongodb = ({
    className: classNameProp,
    ...restProps
}: TeenyiconsMongodbPropsType) => {
    const classNameMemo = useMemo(() => {
        const newClassNameMemo = classNames('TeenyiconsMongodb', classNameProp)
        return newClassNameMemo
    }, [classNameProp])

    return (
        <SvgIcon className={classNameMemo} {...restProps}>
            <path d="m12.082.798.588-.539a.797.797 0 0 0-1.175 0l.587.539Zm0 20.712-.626.492a.796.796 0 0 0 1.253 0l-.627-.492ZM7.891 5.372l-.588-.54.588.537v.003Zm8.383 0 .588-.539-.588.537v.002ZM12.88 23.9V.798h-1.593V23.9h1.593Zm-.17-2.882-4.584-5.833-1.253.984 4.584 5.835 1.253-.985v-.001ZM8.477 5.908l4.195-4.572L11.492.26l-4.19 4.573 1.173 1.077h.002Zm3.018-4.572 4.193 4.573 1.174-1.076L12.67.261l-1.177 1.074.002.001Zm4.545 13.847-4.584 5.835 1.253.984 4.583-5.834-1.252-.985Zm-.352-9.273a7.17 7.17 0 0 1 .35 9.273l1.254.985a8.763 8.763 0 0 0-.43-11.335L15.688 5.91v.001Zm-7.563 9.273a7.17 7.17 0 0 1 .352-9.273L7.303 4.832a8.763 8.763 0 0 0-.43 11.334l1.252-.984v.001Z" />
        </SvgIcon>
    )
}
