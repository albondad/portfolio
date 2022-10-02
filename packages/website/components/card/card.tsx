import { Box } from '..'
import { StyledBox } from './card.styled-components'
import classNames from 'classnames'
import React, { ComponentProps, useMemo } from 'react'
import Image from 'next/image'

export type CardPropsType = ComponentProps<typeof StyledBox> & {
    details?: string[]
    heading?: string
    imageSource?: string
    onImageClick?: () => {}
}

export const Card = ({
    className: classNameProp,
    details: detailsProp = [],
    heading: headingProp,
    imageSource: imageSourceProp = '',
    onImageClick: onImageClickProp,
    ...restProps
}: CardPropsType) => {
    const classNameMemo = useMemo(() => {
        const newClassNameMemo = classNames('card', classNameProp)
        return newClassNameMemo
    }, [classNameProp])

    return (
        <StyledBox className={classNameMemo} {...restProps}>
            <Box className="card__image" src={imageSourceProp}>
                {imageSourceProp && (
                    <Image
                        alt="image"
                        layout="fill"
                        onClick={onImageClickProp}
                        src={imageSourceProp}
                    />
                )}
            </Box>
            <Box className="card__heading">{headingProp}</Box>
            <Box className="card__details">
                {detailsProp.map((element, index) => {
                    return <Box key={index}>{element}</Box>
                })}
            </Box>
        </StyledBox>
    )
}
