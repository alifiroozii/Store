import React from "react";
import MainHeader from "./MainHeader";


const SiteLayout = (props) => {

  return (
    <>
      <MainHeader />
      <props.Component/>
    </>
  );
};

export default SiteLayout;
