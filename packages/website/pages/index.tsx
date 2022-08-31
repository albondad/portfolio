import type { NextPage } from "next";
import { Fragment } from "react";
import { HeroHeader, NavigationBar } from "../components";

const IndexPage: NextPage = () => {
  return (
    <Fragment>
      <NavigationBar />
      <HeroHeader />
    </Fragment>
  );
};

export default IndexPage;
