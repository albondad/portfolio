import type { NextPage } from "next";
import { Fragment } from "react";
import { Hero, NavigationBar } from "../components";

const IndexPage: NextPage = () => {
  return (
    <Fragment>
      <NavigationBar />
      <Hero />
    </Fragment>
  );
};

export default IndexPage;
