import { Box, Card, CardPropsType, ConstrainedContent } from '..'
import { StyledBox } from './card-list.styled-components'
import classNames from 'classnames'
import React, { ComponentProps, useMemo, ReactNode } from 'react'

export type CardListPropsType = ComponentProps<typeof StyledBox> & {
    childrenProp?: ReactNode
    heading?: string
    items?: CardPropsType[]
}

export const CardList = ({
    children: childrenProp,
    className: classNameProp,
    heading: headingProp,
    items: itemsProp = [],
    ...restProps
}: CardListPropsType) => {
    const classNameMemo = useMemo(() => {
        const newClassNameMemo = classNames('CardList-root', classNameProp)
        return newClassNameMemo
    }, [classNameProp])

    return (
        <StyledBox className={classNameMemo} {...restProps}>
            <ConstrainedContent className="CardList-mainContent">
                <Box className="CardList-heading">{headingProp}</Box>
                <Box className="CardList-list">
                    {itemsProp.map((element) => {
                        return (
                            <Box key={element.key} className="CardList-item">
                                <Card {...element} />
                            </Box>
                        )
                    })}
                </Box>
            </ConstrainedContent>
        </StyledBox>
    )
}
