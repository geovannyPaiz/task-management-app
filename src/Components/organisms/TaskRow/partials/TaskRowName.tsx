interface TaskRowNameProps {
  name: string;
  task: Task;
}

const TaskRowName = ({ name, task }: TaskRowNameProps) => {
  return (
    <div className="w-[500px] flex flex-row justify-between items-center border-r-[1px] border-[#393D41] p-4 ">
      <div>
        <p className="text-[15px] leading-[24px]">{name}</p>
      </div>
      <div className="flex flex-row items-center gap-x-2">
        <i className="fa-solid fa-paperclip h-4 w-4" />
        <div className="flex flex-row justify-center items-center gap-x-1">
          <p className="text-[15px] leading-[24px] font-semibold">
            {task.position}
          </p>
          <i className="fa-solid fa-diagram-project h-4 w-4" />
        </div>
        <div className="flex flex-row justify-center items-center gap-x-1">
          <p className="text-[15px] leading-[24px] font-semibold">{0}</p>
          <i className="fa-solid fa-comment h-4 w-4" />
        </div>
      </div>
    </div>
  );
};
export default TaskRowName;
