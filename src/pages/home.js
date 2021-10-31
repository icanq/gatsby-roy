import React from "react";
import Loadable from "react-loadable";
import "../styles/home.scss";

const loader = () => (
  <div className="loader-wrapper absolute">
    <h1>Wedding</h1>
    <h2>Roy & Nesya</h2>
  </div>
);
//
const HomeLazy = Loadable({
  loader: () => import("../containers/Home"),
  loading: loader,
});

const Index = () => {
  return (
    <>
      <HomeLazy />
    </>
  );
};
export default Index;
