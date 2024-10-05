import { TaskCard } from "Components/organisms/TaskCard";

interface PoolTaskProps {
  title: string;
  taskList: Task[];
}
const PoolTask = ({ title, taskList }: PoolTaskProps) => {
  return (
    <div className="flex w-full justify-start">
      <div className="flex flex-col w-[348px] gap-y-4">
        <p className="text-[18px] leading-[32px] font-semibold">{title}</p>
        {taskList.map((task, index) => (
          <TaskCard
            task={task}
            icon="fa-solid fa-clock"
            comment={0}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};
export default PoolTask;
