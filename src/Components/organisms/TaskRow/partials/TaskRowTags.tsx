import { Tag } from "Components/atoms/Tag";
import { formatStatus } from "Utils/StatusConverter";

interface TaskRowTagsProps {
  tags: string[];
}

const TaskRowTags = ({ tags }: TaskRowTagsProps) => {
  return (
    <div className="w-[200px] flex flex-row justify-between items-center border-r-[1px] border-[#393D41] p-4 gap-x-4">
      <Tag label={tags[0]} type={formatStatus(tags[0])} />
      {tags.length > 1 && (
        <div className="bg-[#94979A1A] px-4 py-[4px] rounded-[4px]">
          <p className="text-[15px] leading-[24px]">+{tags.length}</p>
        </div>
      )}
    </div>
  );
};
export default TaskRowTags;
