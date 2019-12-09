import { NextPage } from "next";

import { withApollo } from "../lib/apollo";

import Users from "./../components/Users";

const Home: NextPage<{ userAgent: string }> = ({ userAgent }) => (
  <>
    <h1>Hello world! - user agent: {userAgent}</h1>
    <Users />
  </>
);

Home.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers["user-agent"] || "" : navigator.userAgent;
  return { userAgent };
};

// export default Home;

export default withApollo(Home);
