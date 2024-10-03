import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_TASK } from "Services/Task";

const useDashboard = () => {
  const [value, setValue] = useState("");
  const [search, setSearch] = useState("");
  const [tab, setTab] = useState(0);
  const { loading, data } = useQuery(GET_TASK);
  const [poolTask, setPoolTask] = useState<PoolTask[]>([]);

  const groupTasksByStatus = (tasks: Task[]) => {
    return tasks.reduce((acc, task) => {
      const { status } = task;
      const statusGroup: any = acc.find((group) => group.status === status);
      if (statusGroup) {
        statusGroup.tasks.push(task);
      } else {
        acc.push({
          status: status,
          tasks: [task],
        });
      }
      setPoolTask(acc);
      return acc;
    }, [] as PoolTask[]);
  };

  useEffect(() => {
    if (loading === false && data) {
      const { tasks }: { tasks: Task[] } = data;
      if (tasks) {
        groupTasksByStatus(tasks);
      }
    }
  }, [loading]);

  return {
    value,
    setValue,
    loading,
    search,
    setSearch,
    tab,
    setTab,
    poolTask,
  };
};
export default useDashboard;
