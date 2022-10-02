import { StyledCardList } from './education-and-certifications-card-list.styled-components'
import classNames from 'classnames'
import React, { ComponentProps, useMemo } from 'react'
import { certifcationsCollection } from '../../collections'
import { DateTime } from 'luxon'
import { useRouter } from 'next/router'

export type EducationAndCertifcationsCardListPropsType = ComponentProps<
    typeof StyledCardList
> & {}

export const EducationAndCertifcationsCardList = ({
    className: classNameProp,
    ...restProps
}: EducationAndCertifcationsCardListPropsType) => {
    const routerHook = useRouter()

    const classNameMemo = useMemo(() => {
        const newClassNameMemo = classNames(
            'education-and-certifcations-card-list',
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

                const handleImageClick = () => {
                    routerHook.push(
                        `/education-and-certifications/${element.id}`,
                        undefined,
                        { scroll: false }
                    )
                }

                return {
                    key: element.id,
                    heading: element.name,
                    details: details,
                    imageSource: element.imageSources[0],
                    onImageClick: handleImageClick,
                }
            }
        )

        return newItemsMemo
    }, [])

    return (
        <StyledCardList
            className={classNameMemo}
            heading="Education and Certifications"
            id="education-and-certifications"
            items={itemsMemo}
            {...restProps}
        />
    )
}
