import { Tag } from "Components/atoms/Tag";

interface TaskCardBodyProps {
  points: number;
  label: string;
  type: "normal" | "primary" | "warning" | "danger";
  icon?: string;
  tags: {
    label: string;
    type: "normal" | "primary" | "warning" | "danger";
    icon?: string;
  }[];
}
const TaskCardBody = ({
  points,
  label,
  type,
  icon,
  tags,
}: TaskCardBodyProps) => {
  return (
    <div className="flex flex-col w-full gap-y-2">
      <div className="flex flex-row justify-between ">
        <p className="text-[15px] leading-[24px] font-semibold">
          {points} points
        </p>
        <Tag label={label} icon={icon} type={type} />
      </div>
      <div className="flex flex-row gap-x-2 ">
        {tags.map((element) => (
          <Tag label={element.label} icon={element.icon} type={element.type} />
        ))}
      </div>
    </div>
  );
};

export default TaskCardBody;
