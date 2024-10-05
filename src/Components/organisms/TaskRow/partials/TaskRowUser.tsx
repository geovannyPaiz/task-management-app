interface TaskRowUserProps {
  user: User;
}

const TaskRowUser = ({ user }: TaskRowUserProps) => {
  return (
    <div className="w-[200px] flex flex-row justify-between items-center border-r-[1px] border-[#393D41] p-4">
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
    </div>
  );
};
export default TaskRowUser;
