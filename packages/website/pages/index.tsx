import type { NextPage } from "next";
import { Fragment } from "react";
import {
  HeroHeader,
  NavigationBar,
  ExperienceAndProjectsCardList,
  EducationAndCertifcationsCardlist,
  Space,
} from "../components";

const IndexPage: NextPage = () => {
  return (
    <Fragment>
      <NavigationBar />
      <HeroHeader />
      <Space />
      <ExperienceAndProjectsCardList />
      <Space size="large" />
      <EducationAndCertifcationsCardlist />
      <Space />
    </Fragment>
  );
};

export default IndexPage;
