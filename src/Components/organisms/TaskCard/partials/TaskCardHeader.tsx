interface TaskCardHeaderProps {
  name: string;
}
const TaskCardHeader = ({ name }: TaskCardHeaderProps) => {
  return (
    <div className="w-full flex flex-row justify-between items-center">
      <p className="text-[18px] leading-[32px] font-semibold">{name}</p>
      <div className="w-6 h-6 cursor-pointer hover:opacity-50">
        <p className="text-[18px] leading-[32px] font-semibold text-gray2">
          ...
        </p>
      </div>
    </div>
  );
};
export default TaskCardHeader;
