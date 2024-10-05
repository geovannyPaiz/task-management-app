import { TaskRow } from "Components/organisms/TaskRow";

interface ListTaskProps {
  title: string;
  taskList: Task[];
}
const ListTask = ({ title, taskList }: ListTaskProps) => {
  return (
    <div className="flex w-full justify-start my-2">
      <div className="flex flex-col w-full">
        <div className="w-full bg-gray1 p-4 gap-y-4 rounded-t-[8px] border-[1px] border-[#393D41]">
          <p className="text-[18px] leading-[32px] font-semibold">{title}</p>
        </div>
        {taskList.map((task, index) => (
          <TaskRow task={task} key={index} />
        ))}
      </div>
    </div>
  );
};
export default ListTask;
