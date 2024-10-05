import { SearchBar } from "Components/organisms/SearchBar";
import { TabTopBar } from "Components/organisms/TabTopBar";
import PoolTask from "./partials/PoolTask/PoolTask";
import useDashboard from "./hook";
import { Loader } from "Components/atoms";
import ModalTask from "../partials/ModalTask/ModalTask";

export const Dashboard = () => {
  const {
    value,
    setValue,
    setSearch,
    tab,
    setTab,
    loading,
    poolTask,
    showModal,
    setShowModal,
    saveTask,
    createTaskLoading,
  } = useDashboard();
  return (
    <div className="flex flex-col h-full w-full gap-y-8">
      {loading ? (
        <Loader size={200} />
      ) : (
        <>
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
            setShowModal={(showModalValue: boolean) =>
              setShowModal(showModalValue)
            }
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
        </>
      )}
      <ModalTask
        visible={showModal}
        onSave={(task: Task) => saveTask(task)}
        onCancel={() => setShowModal(false)}
        labelSaveButton="Save"
        title="Create task"
        loading={createTaskLoading}
      />
    </div>
  );
};
export default Dashboard;
