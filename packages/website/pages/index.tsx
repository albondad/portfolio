import type { NextPage } from "next";
import { Fragment } from "react";
import {
  HeroHeader,
  NavigationBar,
  ExperienceAndProjectsCardList,
  EducationAndCertifcationsCardlist,
} from "../components";

const IndexPage: NextPage = () => {
  return (
    <Fragment>
      <NavigationBar />
      <HeroHeader />
      <ExperienceAndProjectsCardList />
      <EducationAndCertifcationsCardlist />
    </Fragment>
  );
};

export default IndexPage;
