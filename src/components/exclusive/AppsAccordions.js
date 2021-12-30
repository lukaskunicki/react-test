import React from "react";
import GenericAccordion from "../generic/GenericAccordion";
import { useAppsContext } from "../../context/AppsContext";

const AppsAccordions = () => {
  const [state] = useAppsContext();

  return (
    <div className="accordions">
      {state.filteredApps.map((app) => (
        <GenericAccordion items={app.items} title={app.title} key={app.key} />
      ))}
    </div>
  );
};

export default AppsAccordions;
