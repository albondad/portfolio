import type { NextPage } from "next";
import { Fragment } from "react";
import {
  HeroHeader,
  NavigationBar,
  ExperienceAndProjectsCardList,
  EducationAndCertifcationsCardList,
  SkillList,
  Space,
  Footer,
} from "../components";

const IndexPage: NextPage = () => {
  return (
    <Fragment>
      <NavigationBar />
      <HeroHeader />
      <Space />
      <ExperienceAndProjectsCardList />
      <Space size="large" />
      <EducationAndCertifcationsCardList />
      <Space />
      <SkillList />
      <Space />
      <Footer />
    </Fragment>
  );
};

export default IndexPage;
