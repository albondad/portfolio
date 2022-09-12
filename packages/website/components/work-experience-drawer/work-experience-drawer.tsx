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
            'WorkExperienceDrawer',
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
        console.log(
            '[remove me] workExperienceCollectionId',
            workExperienceCollectionId
        )
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
        routerHook.push('/')
    }

    return (
        <StyledDrawer
            className={classNameMemo}
            isOpen={isDrawerOpenMemo}
            onClose={handleDrawerClose}
            heading={workExperienceMemo?.organization}
        >
            <Box className="WorkExperienceDrawer-paragraph">
                {workExperienceMemo?.title}
            </Box>
            <Box className="WorkExperienceDrawer-paragraph">
                {formattedDateMemo}
            </Box>
            <Box className="WorkExperienceDrawer-imageGallery">
                <ImageGallery imageSources={workExperienceMemo?.imageSources} />
            </Box>
            <Box className="WorkExperienceDrawer-heading">A Bit of Context</Box>
            <Box className="WorkExperienceDrawer-paragraph">
                {workExperienceMemo?.description}
            </Box>
            <Box className="WorkExperienceDrawer-heading">What I Did</Box>
            {workExperienceMemo?.responsibilities.map((element, index) => {
                return (
                    <Box key={index} className="WorkExperienceDrawer-paragraph">
                        - {element}
                    </Box>
                )
            })}
            <Box className="WorkExperienceDrawer-heading">Skills Used</Box>{' '}
            {workExperienceMemo?.skills.map((element, index) => {
                return (
                    <Box key={index} className="WorkExperienceDrawer-paragraph">
                        - {element}
                    </Box>
                )
            })}
        </StyledDrawer>
    )
}
