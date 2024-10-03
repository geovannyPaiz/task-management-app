import { SearchBar } from "Components/organisms/SearchBar";
import { TabTopBar } from "Components/organisms/TabTopBar";
import PoolTask from "./partials/PoolTask/PoolTask";
import useDashboard from "./hook";

export const Dashboard = () => {
  const { value, setValue, setSearch, tab, setTab, loading, poolTask } =
    useDashboard();
  return (
    <div className="flex flex-col h-full w-full gap-y-8">
      <SearchBar
        value={value}
        setLoading={() => {}}
        onChange={(valueToSet: string) => setValue(valueToSet)}
        onSearch={(valueToSearch: string) => setSearch(valueToSearch)}
      />
      <TabTopBar
        value={tab}
        onChange={(valueTab: number) => setTab(valueTab)}
        loading={loading}
      />
      {poolTask && (
        <div className="flex flex-row gap-x-8 w-full overflow-x-auto">
          {poolTask.map((element, index) => (
            <PoolTask
              title={element.status}
              taskList={element.tasks}
              key={index}
            />
          ))}
        </div>
      )}
    </div>
  );
};
export default Dashboard;
