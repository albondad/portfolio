import type { NextPage } from "next";
import { Fragment } from "react";
import {
  ExperienceAndProjectsCard,
  IntroductionSection,
  NavigationBar,
} from "../components";

const Home: NextPage = () => {
  return (
    <Fragment>
      <NavigationBar />
      <IntroductionSection />
      <ExperienceAndProjectsCard />
    </Fragment>
  );
};

export default Home;
