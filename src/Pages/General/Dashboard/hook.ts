import { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { GET_TASK, CREATE_TASK_MUTATION } from "Services/Task";
import { useLocation } from "react-router-dom";

const useDashboard = () => {
  const [value, setValue] = useState("");
  const [search, setSearch] = useState("");
  const { loading, data } = useQuery(GET_TASK);
  const [poolTask, setPoolTask] = useState<PoolTask[]>([]);
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();

  const isDashboard = location.pathname.includes("/dashboard");
  const [createTask, { loading: createTaskLoading }] = useMutation(
    CREATE_TASK_MUTATION,
    {
      refetchQueries: [{ query: GET_TASK }],
    }
  );

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
  }, [loading, data]);

  const saveTask = async (task: any) => {
    try {
      await createTask({
        variables: {
          input: {
            name: task.name,
            dueDate: task.dueDate,
            pointEstimate: task.pointEstimate,
            status: task.status,
            tags: task.tags,
            assigneeId: task.assigneeId,
          },
        },
      });
    } catch (e) {
      console.error("Error creando la tarea:", e);
    }
  };

  return {
    value,
    setValue,
    loading,
    search,
    setSearch,
    isDashboard,
    poolTask,
    showModal,
    setShowModal,
    saveTask,
    createTaskLoading,
  };
};
export default useDashboard;
