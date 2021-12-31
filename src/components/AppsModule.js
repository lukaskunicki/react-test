import React from "react";
import "../assets/AppsModule.scss";
import { AppsProvider } from "../context/AppsContext";
import AppsTabs from "./exclusive/AppsTabs";
import AppsAccordions from "./exclusive/AppsAccordions";

const AppsModule = () => {
  return (
    <AppsProvider>
      <div className="container">
        <AppsTabs />
        <AppsAccordions />
      </div>
    </AppsProvider>
  );
};

export default AppsModule;
