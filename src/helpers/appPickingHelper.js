const appPickingHelper = (appName) => {
  if (!appName) return;
  window.location.hash = appName;
};

export default appPickingHelper;
