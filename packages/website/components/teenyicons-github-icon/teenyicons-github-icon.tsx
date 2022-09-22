import { SvgIcon } from '..'
import { StyledBox } from './teenyicons-github-icon.styled-components'
import classNames from 'classnames'
import React, { ComponentProps, useMemo } from 'react'

export type TeenyiconsGithubIconPropsType = ComponentProps<
    typeof StyledBox
> & {}

export const TeenyiconsGithubIcon = ({
    className: classNameProp,
    ...restProps
}: TeenyiconsGithubIconPropsType) => {
    const classNameMemo = useMemo(() => {
        const newClassNameMemo = classNames(
            'TeenyiconsGithubIcon-root',
            classNameProp
        )
        return newClassNameMemo
    }, [classNameProp])

    return (
        <SvgIcon className={classNameMemo} {...restProps}>
            <path d="M9.04 19.963a.8.8 0 0 0-.48-1.526l.48 1.526Zm-5.837-4.736-.774-.205-.407 1.55.775.202.406-1.549v.002ZM14.4 23.2v.8H16v-.8h-1.6Zm.1-7.7-.085-.796a.8.8 0 0 0-.479 1.363l.563-.566.002-.002ZM20 9.46h.8v-.004l-.8.003v.002Zm-1.333-3.21-.745-.289a.8.8 0 0 0 .179.853l.566-.565Zm-.08-3.228.73-.326a.8.8 0 0 0-.51-.442l-.22.768ZM15.111 4.29l-.202.775a.8.8 0 0 0 .637-.103l-.435-.672Zm-6.221 0-.436.672a.8.8 0 0 0 .637.103l-.201-.775ZM5.413 3.024l-.22-.768a.8.8 0 0 0-.511.441l.73.327Zm-.08 3.227.566.565a.8.8 0 0 0 .18-.855l-.746.29ZM4 9.488h.8v-.003l-.8.003ZM9.5 15.5l.564.568a.8.8 0 0 0-.469-1.362l-.096.794h.002ZM8.8 17.6h.8l-.002-.06-.798.06ZM8 23.2v.8h1.6v-.8H8Zm.56-4.763c-.965.304-1.578.27-1.984.136-.402-.133-.71-.4-1.006-.784a7.687 7.687 0 0 1-.432-.644c-.136-.222-.292-.483-.448-.715-.306-.45-.757-1.012-1.487-1.204l-.406 1.548c.128.032.294.152.568.554.131.195.256.403.413.66.15.242.323.511.523.774.405.527.957 1.06 1.776 1.33.816.27 1.785.24 2.963-.129l-.48-1.526ZM16 17.5c0-.51-.022-.973-.166-1.405-.154-.46-.42-.816-.77-1.163l-1.128 1.136c.248.245.333.392.38.533.055.168.084.406.084.899H16Zm-1.414-1.205c1.444-.155 3.02-.52 4.235-1.571 1.248-1.08 1.98-2.767 1.98-5.264h-1.6c0 2.174-.625 3.36-1.428 4.054-.838.726-2.013 1.045-3.358 1.189l.17 1.592Zm6.214-6.84a5.367 5.367 0 0 0-1.568-3.773l-1.131 1.13a3.77 3.77 0 0 1 1.1 2.648l1.6-.005Zm-1.387-2.919c.24-.614.352-1.27.336-1.93l-1.6.04c.012.447-.066.893-.227 1.311l1.49.58Zm.336-1.93a4.992 4.992 0 0 0-.432-1.913l-1.46.653c.183.41.282.851.294 1.3l1.6-.04h-.002Zm-1.162-1.585c.22-.77.22-.77.218-.77H18.8l-.006-.004a2.02 2.02 0 0 0-.387-.05 3.475 3.475 0 0 0-.817.087c-.68.145-1.638.507-2.912 1.33l.868 1.345c1.15-.743 1.93-1.015 2.38-1.11a1.92 1.92 0 0 1 .49-.049l-.013-.001a.394.394 0 0 1-.016-.003l-.01-.004h-.004l-.003-.001c-.002 0-.004 0 .217-.771v.001Zm-3.275.491a13.135 13.135 0 0 0-6.624 0l.403 1.55a11.535 11.535 0 0 1 5.818 0l.403-1.55Zm-5.989.103c-1.275-.823-2.235-1.184-2.915-1.328a3.472 3.472 0 0 0-.816-.085c-.13.004-.259.02-.386.048l-.006.003h-.005l.218.77.22.77H5.63l-.003.001-.005.002a.512.512 0 0 1-.025.006l-.013.002h.013c.16-.004.32.012.477.048.45.096 1.23.368 2.38 1.11l.87-1.344v-.003Zm-4.64-.922a4.992 4.992 0 0 0-.432 1.912l1.6.04c.01-.448.11-.89.293-1.299l-1.46-.653Zm-.432 1.912c-.016.661.096 1.317.336 1.931l1.491-.579a3.392 3.392 0 0 1-.228-1.312l-1.6-.04h.001Zm.515 1.077A5.366 5.366 0 0 0 3.605 7.43l1.478.608c.19-.456.467-.872.816-1.224l-1.133-1.13ZM3.605 7.43A5.366 5.366 0 0 0 3.2 9.488l1.6-.005c0-.496.096-.986.283-1.443l-1.478-.608v-.003ZM3.2 9.488c0 2.485.733 4.155 1.982 5.229 1.212 1.04 2.784 1.408 4.224 1.579l.19-1.589c-1.356-.163-2.53-.483-3.372-1.206-.803-.69-1.424-1.86-1.424-4.016H3.2v.003Zm5.736 5.446c-.8.797-1.006 1.744-.934 2.727l1.598-.12c-.048-.653.083-1.093.466-1.474l-1.128-1.134-.002.001ZM8 17.6v5.6h1.6v-5.6H8Zm8 5.6v-2.4h-1.6v2.4H16Zm0-2.4v-3.3h-1.6v3.3H16Z" />
        </SvgIcon>
    )
}
