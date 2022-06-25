import type { NextPage } from "next";
import { Fragment } from "react";
import {
  NavigationBar,
  IntroductionSectionContainer,
  IntroductionSectionDescription,
  Box,
  TeenyiconsTextDocumentIcon,
  Text,
  IntroductionSectionActions,
} from "../components";

const Home: NextPage = () => {
  return (
    <Fragment>
      <NavigationBar />

      <IntroductionSectionContainer>
        <IntroductionSectionDescription />
        <IntroductionSectionActions />
      </IntroductionSectionContainer>
    </Fragment>
  );
};

export default Home;
