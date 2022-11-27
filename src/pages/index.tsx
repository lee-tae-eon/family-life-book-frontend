import Layout from "components/layout";
import type { NextPage } from "next";

const Home: NextPage = () => {
  const format = new Intl.NumberFormat();
  return (
    <Layout>
      <div className="text-amber-400">test</div>
    </Layout>
  );
};

export default Home;
