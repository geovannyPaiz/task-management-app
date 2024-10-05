import { formatDate, checkDateStatus } from "Utils/DateConverter";
import { Tag } from "Components/atoms/Tag";

interface TaskRowDateProps {
  date: string;
}

const TaskRowDate = ({ date }: TaskRowDateProps) => {
  return (
    <div className="w-[250px] flex flex-row justify-between items-center border-r-[1px] border-[#393D41] p-4">
      <Tag label={formatDate(date)} type={checkDateStatus(date)} />{" "}
    </div>
  );
};
export default TaskRowDate;
