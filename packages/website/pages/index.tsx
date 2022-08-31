import type { NextPage } from "next";
import { Fragment } from "react";
import {
  HeroHeader,
  NavigationBar,
  ExperienceAndProjectsCardList,
} from "../components";

const IndexPage: NextPage = () => {
  return (
    <Fragment>
      <NavigationBar />
      <HeroHeader />
      <ExperienceAndProjectsCardList />
    </Fragment>
  );
};

export default IndexPage;
