import { useState } from "react";

const useExpanded = (initial) => {
  const [expanded, setExpanded] = useState(initial);

  const expandedHandler = () => {
    window.history.pushState(null, null, " ");
    setExpanded(!expanded);
  };

  return { expanded, setExpanded, expandedHandler };
};

export default useExpanded;
