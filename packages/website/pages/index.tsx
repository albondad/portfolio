import type { NextPage } from "next";
import { Fragment } from "react";
import {
  HeroHeader,
  NavigationBar,
  ExperienceAndProjectsCardList,
  EducationAndCertifcationsCardList,
  SkillList,
  Space,
  Skill,
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
    </Fragment>
  );
};

export default IndexPage;
