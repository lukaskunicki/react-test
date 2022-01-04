import React from "react";
import "../assets/AppsModule.scss";
import { AppsProvider } from "../context/AppsContext";
import AppsTabs from "./exclusive/AppsTabs";
import AppsAccordions from "./exclusive/AppsAccordions";

const AppsModule = () => {
  return (
    <div className="container">
      <AppsProvider>
        <AppsTabs />
        <AppsAccordions />
      </AppsProvider>
    </div>
  );
};

export default AppsModule;
