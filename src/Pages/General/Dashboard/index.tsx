import { SearchBar } from "Components/organisms/SearchBar";
import { TabTopBar } from "Components/organisms/TabTopBar";

import useDashboard from "./hook";

export const Dashboard = () => {
  const { value, setValue, setLoading, setSearch, tab, setTab, loading } =
    useDashboard();
  return (
    <div className="flex flex-col h-full w-full gap-y-8">
      <SearchBar
        value={value}
        setLoading={setLoading}
        onChange={(valueToSet: string) => setValue(valueToSet)}
        onSearch={(valueToSearch: string) => setSearch(valueToSearch)}
      />
      <TabTopBar
        value={tab}
        onChange={(valueTab: number) => setTab(valueTab)}
        loading={loading}
      />
    </div>
  );
};
export default Dashboard;
