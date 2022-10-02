import {
    EducationAndCertifcationsCardList,
    EducationAndExperienceCertifications,
    Footer,
    HeroHeader,
    NavigationBar,
    SkillList,
    Space,
    WorkExperienceCardList,
    WorkExperienceDrawer,
} from '..'
import React, { ReactNode, Fragment } from 'react'

export type IndexLayoutPropsType = {
    children?: ReactNode
}

export const IndexLayout = ({
    children: childrenProp,
}: IndexLayoutPropsType) => {
    return (
        <Fragment>
            <NavigationBar />
            <HeroHeader />
            <Space />
            <WorkExperienceCardList />
            <Space />
            <Space />
            <EducationAndCertifcationsCardList />
            <Space />
            <Space />
            <SkillList />
            <Space />
            <Space />
            <Footer />
            <WorkExperienceDrawer />
            <EducationAndExperienceCertifications />
            {childrenProp}
        </Fragment>
    )
}
