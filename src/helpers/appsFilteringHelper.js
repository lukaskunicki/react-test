const handleAppsFiltering = (apps, selectedTab) => {
  const newApps = [...apps];

  const filterResults = newApps.map((app) =>
    app.items.filter((item) => item.type === selectedTab)
  );

  return {
    selectedTab: selectedTab,
    mature: filterResults[0] || [],
    beta: filterResults[1] || [],
  };
};

export default handleAppsFiltering;
