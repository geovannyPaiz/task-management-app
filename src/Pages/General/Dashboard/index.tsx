import { SearchBar } from "Components/organisms/SearchBar";
import useDashboard from "./hook";

export const Dashboard = () => {
  const { value, setValue, setLoading, setSearch } = useDashboard();
  return (
    <div className="flex justify-center h-full w-full">
      <SearchBar
        value={value}
        setLoading={setLoading}
        onChange={(valueToSet: string) => setValue(valueToSet)}
        onSearch={(valueToSearch: string) => setSearch(valueToSearch)}
      />
    </div>
  );
};
export default Dashboard;
