import { Box } from '..'
import { StyledBox } from './card.styled-components'
import classNames from 'classnames'
import React, { ComponentProps, useMemo } from 'react'
import Image from 'next/image'

export type CardPropsType = ComponentProps<typeof StyledBox> & {
    details?: string[]
    heading?: string
    imageSource?: string
}

export const Card = ({
    className: classNameProp,
    details: detailsProp = [],
    heading: headingProp,
    imageSource: imageSourceProp = '',
    ...restProps
}: CardPropsType) => {
    const classNameMemo = useMemo(() => {
        const newClassNameMemo = classNames('Card-root', classNameProp)
        return newClassNameMemo
    }, [classNameProp])

    return (
        <StyledBox className={classNameMemo} {...restProps}>
            <Box className="Card-image" src={imageSourceProp}>
                {imageSourceProp && (
                    <Image src={imageSourceProp} alt="image" layout="fill" />
                )}
            </Box>
            <Box className="Card-heading">{headingProp}</Box>
            <Box className="Card-details">
                {detailsProp.map((element, index) => {
                    return (
                        <Box key={index} className="Card-detailItem">
                            {element}
                        </Box>
                    )
                })}
            </Box>
        </StyledBox>
    )
}
