import { StyledCardList } from './education-and-certifications-card-list.styled-components'
import classNames from 'classnames'
import React, { ComponentProps, useMemo } from 'react'
import { certifcationsCollection } from '../../collections'
import { DateTime } from 'luxon'

export type EducationAndCertifcationsCardListPropsType = ComponentProps<
    typeof StyledCardList
> & {}

export const EducationAndCertifcationsCardList = ({
    className: classNameProp,
    ...restProps
}: EducationAndCertifcationsCardListPropsType) => {
    const classNameMemo = useMemo(() => {
        const newClassNameMemo = classNames(
            'ExperienceAndProjectsCardList-root',
            classNameProp
        )
        return newClassNameMemo
    }, [classNameProp])

    const itemsMemo = useMemo(() => {
        const newItemsMemo = certifcationsCollection.certifications.map(
            (element) => {
                const formattedDate = `Issued ${DateTime.fromISO(
                    element.date
                ).toFormat('LLLL yyyy')}`

                const details = [element.organizationName, formattedDate]

                return {
                    key: element.id,
                    heading: element.name,
                    details: details,
                    imageSource: element.organizationImageSource,
                }
            }
        )

        return newItemsMemo
    }, [])

    return (
        <StyledCardList
            className={classNameMemo}
            heading="Education and Certifications"
            items={itemsMemo}
            {...restProps}
        />
    )
}
