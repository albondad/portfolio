import { Box, ImageGallery } from '..'
import { DateTime } from 'luxon'
import { StyledDrawer } from './education-and-certifications-drawer.styled-components'
import { useRouter } from 'next/router'
import { certifcationsCollection } from '../../collections'
import classNames from 'classnames'
import React, { ComponentProps, useMemo } from 'react'

export type EducationAndExperienceCertificationsPropsType = ComponentProps<
    typeof StyledDrawer
> & {}

export const EducationAndExperienceCertifications = ({
    className: classNameProp,
    ...restProps
}: EducationAndExperienceCertificationsPropsType) => {
    const routerHook = useRouter()

    const classNameMemo = useMemo(() => {
        const newClassNameMemo = classNames(
            'education-and-certifications-drawer',
            classNameProp,
            {}
        )
        return newClassNameMemo
    }, [classNameProp])

    const isDrawerOpenMemo = useMemo(() => {
        const isDrawerOpenMemo =
            routerHook.query.slug?.[0] === 'education-and-certifications'

        return isDrawerOpenMemo
    }, [routerHook])

    const certificationsMemo = useMemo(() => {
        const certificationsId = routerHook.query.slug?.[1]
        const newcertificationsMemo =
            certifcationsCollection.certifications.find(
                (element) => element.id === certificationsId
            )

        return newcertificationsMemo
    }, [routerHook])

    const formattedDateMemo = useMemo(() => {
        const date = certificationsMemo?.date || ''
        const newFormattedDateMemo = `Issued at ${DateTime.fromISO(
            date
        ).toFormat('LLLL yyyy')}`

        return newFormattedDateMemo
    }, [certificationsMemo?.date])

    const handleDrawerClose = () => {
        routerHook.push('/', undefined, { scroll: false })
    }

    return (
        <StyledDrawer
            className={classNameMemo}
            isOpen={isDrawerOpenMemo}
            onClose={handleDrawerClose}
            heading={certificationsMemo?.name}
        >
            <Box className="education-and-certifications-drawer__paragraph">
                {certificationsMemo?.organizationName}
            </Box>

            <Box className="education-and-certifications-drawer__paragraph">
                {formattedDateMemo}
            </Box>

            <Box className="education-and-certifications-drawer__image-gallery">
                <ImageGallery imageSources={certificationsMemo?.imageSources} />
            </Box>

            {certificationsMemo?.links.map((element, index) => {
                return (
                    <Box
                        as="a"
                        className="education-and-certifications-drawer__link"
                        href={element.url}
                        key={index}
                        target="_blank"
                    >
                        {element.text}
                    </Box>
                )
            })}
        </StyledDrawer>
    )
}
