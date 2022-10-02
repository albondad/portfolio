import { StyledDrawer } from './work-experience-drawer.styled-components'
import classNames from 'classnames'
import React, { ComponentProps, useMemo } from 'react'
import { useRouter } from 'next/router'
import { Box, ImageGallery } from '..'
import { workExperienceCollection } from '../../collections'
import { DateTime } from 'luxon'

export type WorkExperienceDrawerPropsType = ComponentProps<
    typeof StyledDrawer
> & {}

export const WorkExperienceDrawer = ({
    className: classNameProp,
    ...restProps
}: WorkExperienceDrawerPropsType) => {
    const routerHook = useRouter()

    const classNameMemo = useMemo(() => {
        const newClassNameMemo = classNames(
            'work-experience-drawer',
            classNameProp,
            {}
        )
        return newClassNameMemo
    }, [classNameProp])

    const isDrawerOpenMemo = useMemo(() => {
        const isDrawerOpenMemo =
            routerHook.query.slug?.[0] === 'work-experience'

        return isDrawerOpenMemo
    }, [routerHook])

    const workExperienceMemo = useMemo(() => {
        const workExperienceCollectionId = routerHook.query.slug?.[1]
        const newWorkExperienceMemo =
            workExperienceCollection.workExperience.find(
                (element) => element.id === workExperienceCollectionId
            )

        return newWorkExperienceMemo
    }, [routerHook])

    const formattedDateMemo = useMemo(() => {
        const endDate = workExperienceMemo?.endDate || ''
        const formattedEndDate = DateTime.fromISO(endDate).toFormat('LLLL yyyy')

        const startDate = workExperienceMemo?.startDate || ''
        const formattedStartDate =
            DateTime.fromISO(startDate).toFormat('LLLL yyyy')

        const newFormattedDatememo = `${formattedStartDate} to ${formattedEndDate}`

        return newFormattedDatememo
    }, [workExperienceMemo?.endDate, workExperienceMemo?.startDate])

    const handleDrawerClose = () => {
        routerHook.push('/', undefined, { scroll: false })
    }

    return (
        <StyledDrawer
            className={classNameMemo}
            isOpen={isDrawerOpenMemo}
            onClose={handleDrawerClose}
            heading={workExperienceMemo?.organization}
        >
            <Box className="work-experience-drawer__paragraph">
                {workExperienceMemo?.title}
            </Box>
            <Box className="work-experience-drawer__paragraph">
                {formattedDateMemo}
            </Box>
            <Box className="work-experience-drawer__image-gallery">
                <ImageGallery imageSources={workExperienceMemo?.imageSources} />
            </Box>
            <Box className="work-experience-drawer__heading">
                A Bit of Context
            </Box>
            <Box className="work-experience-drawer__paragraph">
                {workExperienceMemo?.description}
            </Box>
            <Box className="work-experience-drawer__heading">What I Did</Box>
            {workExperienceMemo?.responsibilities.map((element, index) => {
                return (
                    <Box
                        key={index}
                        className="work-experience-drawer__paragraph"
                    >
                        - {element}
                    </Box>
                )
            })}
            <Box className="work-experience-drawer__heading">Skills Used</Box>{' '}
            {workExperienceMemo?.skills.map((element, index) => {
                return (
                    <Box
                        key={index}
                        className="work-experience-drawer__paragraph"
                    >
                        - {element}
                    </Box>
                )
            })}
        </StyledDrawer>
    )
}
