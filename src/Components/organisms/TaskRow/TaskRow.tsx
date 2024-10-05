import { memo } from "react";
import TaskRowName from "./partials/TaskRowName";
import TaskRowTags from "./partials/TaskRowTags";
import TaskRowPoints from "./partials/TaskRowPoints";
import TaskRowUser from "./partials/TaskRowUser";
import TaskRowDate from "./partials/TaskRowDate";

interface TaskRowProps {
  task: Task;
}
const TaskRow = memo(({ task }: TaskRowProps) => {
  return (
    <div className="flex flex-row w-auto bg-gray1 border-b-[1px]  border-l-[1px]  border-r-[1px] border-[#393D41]">
      <TaskRowName name={task.name} task={task} />
      <TaskRowTags tags={task.tags} />
      <TaskRowPoints points={task.pointEstimate} />
      <TaskRowUser user={task.assignee} />
      <TaskRowDate date={task.dueDate} />
    </div>
  );
});
export default TaskRow;
