import cls from "classnames";
import { MouseEventHandler } from "react";

interface ButtonProps {
  icon?: string;
  label?: string;
  onClick: ((task: Task) => Promise<void>) | (() => void);
  loading?: boolean;
  type?: "primary" | "normal";
  disabled?: boolean;
}

const Button = ({
  loading,
  onClick,
  icon,
  label,
  type = "primary",
  disabled,
}: ButtonProps) => {
  return (
    <div
      className={cls(
        "flex h-10 w-10 justify-center items-center rounded-[8px] hover:opacity-50 cursor-pointer",
        {
          "pointer-events-none opacity-50": loading || disabled,
          "bg-transparent": type === "normal",
          "bg-red2": type === "primary",
          "w-auto px-2": label,
        }
      )}
      onClick={onClick as MouseEventHandler<HTMLDivElement>}
    >
      {loading ? (
        <i className={`fas fa-spinner fa-spin text-white h-8 w-8`} />
      ) : (
        <>{icon ? <i className={`${icon}`} /> : <p>{label}</p>}</>
      )}
    </div>
  );
};

export default Button;
