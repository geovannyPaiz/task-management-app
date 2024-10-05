interface TaskCardFooterProps {
  diagram: number;
  comment: number;
  user: {
    avatar: string;
    fullName: string;
  };
}

const TaskCardFooter = ({ diagram, comment, user }: TaskCardFooterProps) => {
  return (
    <div className="flex flex-row w-full justify-between">
      <div className="flex flex-row items-center gap-x-2">
        <img
          src={user?.avatar}
          className="h-8 w-8 rounded-[32px]"
          alt="no imagen"
        />
        <p className="text-[15px] leading-[24px] font-semibold">
          {user?.fullName}
        </p>
      </div>
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
