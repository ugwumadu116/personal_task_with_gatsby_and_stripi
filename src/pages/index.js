import React from "react";
import Layout from "../components/layout";
import HomeBanner from "../components/Home/HomeBanner";
import LatestCourse from '../components/Home/LatestCourse';
const IndexPage = () => (
  <Layout>
    <HomeBanner></HomeBanner>
    <LatestCourse></LatestCourse>
  </Layout>
)

export default IndexPage
