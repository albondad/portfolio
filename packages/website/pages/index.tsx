import { Fragment } from 'react';
import type { NextPage } from 'next'
import {
  Banner,
  NavigationBar
} from '../common';

const Home: NextPage = () => {
  return (
    <Fragment>
      <NavigationBar />
      <Banner />
    </Fragment>
  )
}

export default Home
