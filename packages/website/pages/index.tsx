import type { NextPage } from "next";
import { Fragment } from "react";
import { HeroHeader, NavigationBar, Card, CardList } from "../components";

const IndexPage: NextPage = () => {
  return (
    <Fragment>
      <NavigationBar />
      <HeroHeader />
      <CardList />
    </Fragment>
  );
};

export default IndexPage;
