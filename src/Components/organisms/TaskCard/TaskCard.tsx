import { memo } from "react";
import TaskCardHeader from "./partials/TaskCardHeader";
import TaskCardBody from "./partials/TaskCardBody";
import TaskCardFooter from "./partials/TaskCardFooter";

interface TaskCardProps {
  name: string;
  points: number;
  label: string;
  type: "normal" | "primary" | "warning" | "danger";
  icon?: string;
  tags: {
    label: string;
    type: "normal" | "primary" | "warning" | "danger";
    icon?: string;
  }[];
  comment: number;
  diagram: number;
}

const TaskCard = memo(
  ({
    name,
    points,
    label,
    type,
    icon,
    tags,
    comment,
    diagram,
  }: TaskCardProps) => {
    return (
      <div className="flex flex-col w-[348px] bg-gray1 rounded-[8px] p-4 gap-y-4">
        <TaskCardHeader name={name} />
        <TaskCardBody
          points={points}
          label={label}
          type={type}
          icon={icon}
          tags={tags}
        />
        <TaskCardFooter comment={comment} diagram={diagram} />
      </div>
    );
  }
);

export default TaskCard;
