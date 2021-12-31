import React from "react";
import GenericAccordion from "../generic/GenericAccordion";
import { useAppsContext } from "../../context/AppsContext";
import GenericTable from "../generic/GenericTable";
import { columnsPaths, tableHeaders } from "../../config/appDictionary";

const AppsAccordions = () => {
  const [state] = useAppsContext();

  return (
    <div className="accordions">
      {state.filteredApps.map((app) => (
        <GenericAccordion title={app.title} key={app.key}>
          <GenericTable
            items={app.items}
            headers={tableHeaders}
            columnPaths={columnsPaths}
          />
        </GenericAccordion>
      ))}
    </div>
  );
};

export default AppsAccordions;
