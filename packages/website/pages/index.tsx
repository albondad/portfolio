import { Fragment } from 'react';
import type { NextPage } from 'next'
import {
  Banner,
  Cards,
  NavigationBar
} from '../common';

const Home: NextPage = () => {
  return (
    <Fragment>
      <NavigationBar />
      <Banner />
      <Cards items={[
        {
          header: "HEADER 01",
          details: [
            "detail 01",
            "detail 02"
          ]
        },
        {
          header: "HEADER 02",
          details: [
            "detail 01",
            "detail 02"
          ]jadb0y331  A
        }
      ]} />
    </Fragment>
  )
}

export default Home
