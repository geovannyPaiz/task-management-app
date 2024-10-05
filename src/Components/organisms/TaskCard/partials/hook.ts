import { useMutation } from "@apollo/client";
import {
  GET_TASK,
  DELETE_TASK_MUTATION,
  UPDATE_TASK_MUTATION,
} from "Services/Task";

const useTaskCard = () => {
  const [deleteTask] = useMutation(DELETE_TASK_MUTATION, {
    refetchQueries: [{ query: GET_TASK }],
  });

  const onDeleteTask = (taskId: string) => {
    deleteTask({
      variables: { input: { id: taskId } },
    }).catch((err) => {
      console.error("Error deleting task:", err);
    });
  };
  const [updateTask, { loading }] = useMutation(UPDATE_TASK_MUTATION, {
    refetchQueries: [{ query: GET_TASK }],
  });

  const onUpdateTask = async (task: Task) => {
    await updateTask({
      variables: { input: task },
    }).catch((err) => {
      console.error("Error updating task:", err);
    });
  };

  return {
    onDeleteTask,
    onUpdateTask,
    loading,
  };
};

export default useTaskCard;
