import { TaskCard } from "Components/organisms/TaskCard";
const PoolTask = () => {
  return (
    <div className="flex w-full justify-start">
      <div className="flex flex-col w-[348px] gap-y-4">
        <p className="text-[18px] leading-[32px] font-semibold">Working</p>
        <TaskCard
          name={"Google"}
          points={3}
          label="Yesterday"
          type="normal"
          icon="fa-solid fa-clock"
          tags={[
            { label: "Android", type: "primary" },
            { label: "IOS", type: "warning" },
          ]}
          comment={5}
          diagram={3}
        />
      </div>
    </div>
  );
};
export default PoolTask;
