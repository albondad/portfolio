import type { NextPage } from "next";
import { Fragment } from "react";
import { NavigationBar, IntroductionSection } from "../components";

const Home: NextPage = () => {
  return (
    <Fragment>
      <NavigationBar />
      <IntroductionSection />
    </Fragment>
  );
};

export default Home;
