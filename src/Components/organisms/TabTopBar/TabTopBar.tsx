import cls from "classnames";
import { Button } from "Components/atoms/Button";

interface TabTopBarProps {
  value: number;
  onChange: (value: number) => void;
  loading: boolean;
}

const TabTopBar = ({ value, onChange, loading }: TabTopBarProps) => {
  return (
    <div className="flex flex-row w-full h-12 justify-between">
      <div className="flex flex-row">
        <i
          className={cls(
            "flex fa-solid fa-bars text-gray2 h-10 w-10 justify-center items-center rounded-[8px] hover:opacity-50 cursor-pointer",
            {
              "border-2 border-red2 text-red2": value === 0,
            }
          )}
          onClick={() => onChange(0)}
        />
        <i
          className={cls(
            "flex fa-solid fa-grip text-gray2 h-10 w-10 justify-center items-center rounded-[8px] hover:opacity-50 cursor-pointer",
            {
              "border-2 border-red2 text-red2": value === 1,
            }
          )}
          onClick={() => onChange(1)}
        />
      </div>
      <Button onClick={() => {}} loading={loading} icon="fa-solid fa-plus" />
    </div>
  );
};

export default TabTopBar;
