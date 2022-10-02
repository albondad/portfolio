import { Box } from '..'
import { StyledBox } from './image-gallery.styled-components'
import classNames from 'classnames'
import React, { ComponentProps, useMemo, useState } from 'react'
import Image from 'next/image'

export type ImageGalleryPropsType = ComponentProps<typeof StyledBox> & {
    imageSources?: string[]
}

export const ImageGallery = ({
    className: classNameProp,
    imageSources: imageSourcesProp = [],
    ...restProps
}: ImageGalleryPropsType) => {
    const classNameMemo = useMemo(() => {
        const newClassNameMemo = classNames('image-gallery', classNameProp)
        return newClassNameMemo
    }, [classNameProp])

    const [currentIndexState, setCurrentIndexState] = useState(0)

    return (
        <StyledBox className={classNameMemo} {...restProps}>
            <Box className="image-gallery__main">
                {!!imageSourcesProp[0] && (
                    <Box className="image-gallery__image">
                        <Image
                            src={imageSourcesProp[currentIndexState]}
                            layout="fill"
                        />
                    </Box>
                )}
            </Box>
            <Box className="image-gallery__items">
                {imageSourcesProp.map((element, index) => {
                    const handleItemClick = () => {
                        setCurrentIndexState(index)
                    }

                    const itemClassName = classNames('image-gallery__item', {
                        'image-gallery__-is-disabled-true':
                            currentIndexState === index,
                        'image-gallery__is-disabled-false':
                            currentIndexState !== index,
                    })

                    return (
                        <Box
                            className={itemClassName}
                            key={index}
                            onClick={handleItemClick}
                        >
                            <Box className="image-gallery__image">
                                <Image src={element} layout="fill" />
                            </Box>
                        </Box>
                    )
                })}
            </Box>
        </StyledBox>
    )
}
