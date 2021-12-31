import { useContext } from "react";
import { AppsContext } from "../context/AppsContext";

const useAppsContext = () => {
  const context = useContext(AppsContext);
  if (context === undefined) {
    throw new Error("AppsContext needs to be used within the Apps context");
  }
  return context;
};

export default useAppsContext;
