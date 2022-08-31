import type { NextPage } from "next";
import { Fragment } from "react";
import { HeroHeader, NavigationBar, Card } from "../components";

const IndexPage: NextPage = () => {
  return (
    <Fragment>
      <NavigationBar />
      <HeroHeader />
      <Card />
    </Fragment>
  );
};

export default IndexPage;
