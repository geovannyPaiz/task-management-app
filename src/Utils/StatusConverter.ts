export const formatStatus = (status: string) => {
  if (status === "ANDROID") {
    return "primary";
  } else if (status === "IOS") {
    return "warning";
  }
  if (status === "NODE_JS") {
    return "danger";
  } else {
    return "normal";
  }
};
