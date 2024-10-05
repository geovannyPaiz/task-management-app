import { SearchBar } from "Components/organisms/SearchBar";
import { TabTopBar } from "Components/organisms/TabTopBar";
import PoolTask from "./partials/PoolTask/PoolTask";
import useDashboard from "./hook";
import { Loader } from "Components/atoms";
import ModalTask from "../partials/ModalTask/ModalTask";
import ListTask from "./partials/ListTask";
import cls from "classnames";

export const Dashboard = () => {
  const {
    value,
    setValue,
    setSearch,
    isDashboard,
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
            value={isDashboard}
            loading={loading}
            setShowModal={(showModalValue: boolean) =>
              setShowModal(showModalValue)
            }
          />
          {poolTask && (
            <div
              className={cls("flex gap-x-8 w-full overflow-x-auto", {
                "flex-row": isDashboard,
                "flex-col": !isDashboard,
              })}
            >
              {poolTask.map((element, index) => (
                <>
                  {isDashboard ? (
                    <PoolTask
                      title={element.status}
                      taskList={element.tasks}
                      key={index}
                    />
                  ) : (
                    <ListTask title={element.status} taskList={element.tasks} />
                  )}
                </>
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
