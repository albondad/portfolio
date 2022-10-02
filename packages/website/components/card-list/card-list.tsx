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
        const newClassNameMemo = classNames('card-list', classNameProp)
        return newClassNameMemo
    }, [classNameProp])

    return (
        <StyledBox className={classNameMemo} {...restProps}>
            <ConstrainedContent className="card-list__mainContent">
                <Box className="card-list__heading">{headingProp}</Box>
                <Box className="card-list__list">
                    {itemsProp.map((element) => {
                        return (
                            <Box key={element.key} className="card-list__item">
                                <Card {...element} />
                            </Box>
                        )
                    })}
                </Box>
            </ConstrainedContent>
        </StyledBox>
    )
}
