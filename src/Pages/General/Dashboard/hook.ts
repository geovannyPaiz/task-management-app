import { useState } from "react";

const useDashboard = () => {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  return {
    value,
    setValue,
    loading,
    setLoading,
    search,
    setSearch,
  };
};
export default useDashboard;
