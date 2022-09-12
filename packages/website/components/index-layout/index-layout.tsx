import {
    HeroHeader,
    NavigationBar,
    WorkExperienceCardList,
    EducationAndCertifcationsCardList,
    SkillList,
    Space,
    WorkExperienceDrawer,
    Footer,
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
            {childrenProp}
        </Fragment>
    )
}
