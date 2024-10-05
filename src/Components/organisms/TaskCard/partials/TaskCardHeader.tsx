import { useState } from "react";
import useTaskCard from "./hook";
import ModalTask from "Pages/General/partials/ModalTask/ModalTask";

interface TaskCardHeaderProps {
  name: string;
  task: Task;
}
const TaskCardHeader = ({ name, task }: TaskCardHeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);
  const { onDeleteTask, onUpdateTask, loading } = useTaskCard();
  const [showModal, setShowModal] = useState(false);

  const handleOptionClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="w-full flex flex-row justify-between items-center">
      <p className="text-[18px] leading-[32px] font-semibold">{name}</p>
      <div className="relative inline-block">
        <div
          className="w-6 h-6 cursor-pointer rounded-[2px] hover:bg-gray2"
          onClick={toggleDropdown}
        >
          <p className="text-[18px] leading-[32px] font-semibold text-gray2 hover:text-gray1">
            ...
          </p>
        </div>
        {isOpen && (
          <ul className="absolute left-0 bg-gray3 text-white rounded-[8px] shadow-lg z-10 min-w-[140px]">
            <li
              onClick={() => {
                setShowModal(true);
                handleOptionClick();
              }}
              className="flex items-center px-4 py-2 hover:bg-gray2 cursor-pointer w-auto gap-x-1 items-center rounded-t-[8px]"
            >
              <i className="fa-solid fa-pencil h-6 w-6" />
              Edit
            </li>
            <li
              onClick={() => {
                onDeleteTask(task.id);
                handleOptionClick();
              }}
              className="flex items-center px-4 py-2 hover:bg-gray2 cursor-pointer w-auto gap-x-1 items-center rounded-b-[8px]"
            >
              <i className="fa-solid fa-trash h-6 w-6" />
              Delete
            </li>
          </ul>
        )}
      </div>

      <ModalTask
        visible={showModal}
        onSave={(task: Task) => onUpdateTask(task)}
        onCancel={() => setShowModal(false)}
        labelSaveButton="Edit"
        title="Create task"
        loading={loading}
        task={task}
      />
    </div>
  );
};
export default TaskCardHeader;
