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
      <Space />
      <Space />
      <EducationAndCertifcationsCardList />
      <Space />
      <Space />
      <SkillList />
      <Space />
      <Space />
      <Footer />
    </Fragment>
  );
};

export default IndexPage;
