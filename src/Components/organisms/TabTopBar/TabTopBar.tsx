import cls from "classnames";
import { Button } from "Components/atoms/Button";
interface TabTopBarProps {
  value: boolean;
  loading: boolean;
  setShowModal: (value: boolean) => void;
}

const TabTopBar = ({ value, loading, setShowModal }: TabTopBarProps) => {
  return (
    <div className="flex flex-row w-full h-12 justify-between">
      <div className="flex flex-row">
        <i
          className={cls(
            "flex fa-solid fa-bars text-gray2 h-10 w-10 justify-center items-center rounded-[8px] hover:opacity-50 cursor-pointer",
            {
              "border-2 border-red2 text-red2": !value,
            }
          )}
        />
        <i
          className={cls(
            "flex fa-solid fa-grip text-gray2 h-10 w-10 justify-center items-center rounded-[8px] hover:opacity-50 cursor-pointer",
            {
              "border-2 border-red2 text-red2": value,
            }
          )}
        />
      </div>
      <Button
        onClick={() => setShowModal(true)}
        loading={loading}
        icon="fa-solid fa-plus"
        type="primary"
      />
    </div>
  );
};

export default TabTopBar;
