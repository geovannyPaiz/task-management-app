import { Tag } from "Components/atoms/Tag";
import { numberToNumeric } from "Utils/NumberConverter";
import { formatDate, checkDateStatus } from "Utils/DateConverter";
import { formatStatus } from "Utils/StatusConverter";
interface TaskCardBodyProps {
  points: string;
  date: string;
  icon?: string;
  tags: string[];
}
const TaskCardBody = ({ points, date, icon, tags }: TaskCardBodyProps) => {
  return (
    <div className="flex flex-col w-full gap-y-2">
      <div className="flex flex-row justify-between ">
        <p className="text-[15px] leading-[24px] font-semibold">
          {numberToNumeric(points)} points
        </p>
        <Tag
          label={formatDate(date)}
          icon={icon}
          type={checkDateStatus(date)}
        />
      </div>
      <div className="flex flex-row gap-x-2 ">
        {tags.map((element, index) => (
          <Tag label={element} type={formatStatus(element)} key={index} />
        ))}
      </div>
    </div>
  );
};

export default TaskCardBody;
