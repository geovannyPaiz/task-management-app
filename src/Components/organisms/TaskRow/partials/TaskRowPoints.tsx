import { numberToNumeric } from "Utils/NumberConverter";

interface TaskRowPointsProps {
  points: string;
}

const TaskRowPoints = ({ points }: TaskRowPointsProps) => {
  return (
    <div className="w-[140px] flex flex-row justify-between items-center border-r-[1px] border-[#393D41] p-4">
      <p className="text-[15px] leading-[24px]">
        {numberToNumeric(points)} Points
      </p>
    </div>
  );
};
export default TaskRowPoints;
