import { useState } from "react";

const useDashboard = () => {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [tab, setTab] = useState(0);

  return {
    value,
    setValue,
    loading,
    setLoading,
    search,
    setSearch,
    tab,
    setTab,
  };
};
export default useDashboard;
