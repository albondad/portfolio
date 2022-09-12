import type { NextPage } from 'next'
import { Fragment } from 'react'
import {
    HeroHeader,
    NavigationBar,
    WorkExperienceCardList,
    EducationAndCertifcationsCardList,
    SkillList,
    Space,
    Footer,
    Drawer,
    WorkExperienceDrawer,
} from '../components'

const IndexPage: NextPage = () => {
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
            <Drawer />
        </Fragment>
    )
}

export default IndexPage
