interface TaskCardFooterProps {
  diagram: number;
  comment: number;
}

const TaskCardFooter = ({ diagram, comment }: TaskCardFooterProps) => {
  return (
    <div className="flex flex-row w-full justify-between">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSXHO9HdR32K85UdK-eKOu3X4bQg7zIsb76g&s"
        className="h-8 w-8 rounded-[32px]"
      />
      <div className="flex flex-row items-center gap-x-2">
        <i className="fa-solid fa-paperclip h-4 w-4" />
        <div className="flex flex-row justify-center items-center gap-x-1">
          <p className="text-[15px] leading-[24px] font-semibold">{diagram}</p>
          <i className="fa-solid fa-diagram-project h-4 w-4" />
        </div>
        <div className="flex flex-row justify-center items-center gap-x-1">
          <p className="text-[15px] leading-[24px] font-semibold">{comment}</p>
          <i className="fa-solid fa-comment h-4 w-4" />
        </div>
      </div>
    </div>
  );
};

export default TaskCardFooter;
