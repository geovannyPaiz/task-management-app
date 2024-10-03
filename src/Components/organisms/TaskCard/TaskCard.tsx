import { memo } from "react";
import TaskCardHeader from "./partials/TaskCardHeader";
import TaskCardBody from "./partials/TaskCardBody";
import TaskCardFooter from "./partials/TaskCardFooter";

interface TaskCardProps {
  name: string;
  points: string;
  date: string;
  icon?: string;
  tags: string[];
  comment: number;
  diagram: number;
  user: {
    avatar: string;
  };
}

const TaskCard = memo(
  ({
    name,
    points,
    date,
    icon,
    tags,
    comment,
    diagram,
    user,
  }: TaskCardProps) => {
    return (
      <div className="flex flex-col w-[348px] bg-gray1 rounded-[8px] p-4 gap-y-4">
        <TaskCardHeader name={name} />
        <TaskCardBody points={points} date={date} icon={icon} tags={tags} />
        <TaskCardFooter comment={comment} diagram={diagram} user={user} />
      </div>
    );
  }
);

export default TaskCard;
