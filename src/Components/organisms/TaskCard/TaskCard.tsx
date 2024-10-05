import { memo } from "react";
import TaskCardHeader from "./partials/TaskCardHeader";
import TaskCardBody from "./partials/TaskCardBody";
import TaskCardFooter from "./partials/TaskCardFooter";

interface TaskCardProps {
  icon?: string;
  comment: number;
  task: Task;
}

const TaskCard = memo(({ icon, comment, task }: TaskCardProps) => {
  return (
    <div className="flex flex-col w-[348px] bg-gray1 rounded-[8px] p-4 gap-y-4">
      <TaskCardHeader name={task.name} task={task} />
      <TaskCardBody
        points={task.pointEstimate}
        date={task.dueDate}
        icon={icon}
        tags={task.tags}
      />
      <TaskCardFooter
        comment={comment}
        diagram={task.position}
        user={task.assignee}
      />
    </div>
  );
});

export default TaskCard;
