import { TaskCard } from "Components/organisms/TaskCard";

interface PoolTaskProps {
  title: string;
  taskList: Task[];
}
const PoolTask = ({ title, taskList }: PoolTaskProps) => {
  console.log("taskList", taskList);
  return (
    <div className="flex w-full justify-start">
      <div className="flex flex-col w-[348px] gap-y-4">
        <p className="text-[18px] leading-[32px] font-semibold">{title}</p>
        {taskList.map((task, index) => (
          <TaskCard
            name={task.name}
            points={task.pointEstimate}
            date={task.dueDate}
            icon="fa-solid fa-clock"
            tags={task.tags}
            comment={0}
            diagram={task.position}
            key={index}
            user={task.assignee}
          />
        ))}
      </div>
    </div>
  );
};
export default PoolTask;
