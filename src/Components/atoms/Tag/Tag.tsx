import cls from "classnames";

interface TagProps {
  icon?: string;
  label?: string;
  type: "normal" | "primary" | "warning" | "danger";
}

const Tag = ({ type, icon, label }: TagProps) => {
  return (
    <div
      className={cls(
        "px-4 py-2 bg-[#94979A1A] gap-x-2 h-8 items-center opacity-90 rounded-[4px] flex flex-row",
        {
          "bg-[#70B2521A]": type === "primary",
          "bg-[#E5B4541A": type === "warning",
          "bg-[#DA584B1A]": type === "danger",
        }
      )}
    >
      {icon && (
        <i
          className={cls(`${icon} h-6 w-6 flex items-center justify-center`, {
            "text-green1": type === "primary",
            "text-yellow1": type === "warning",
            "text-red1": type === "danger",
          })}
        />
      )}
      <p
        className={cls("text-[15px] leading-[24px] font-semibold", {
          "text-green1": type === "primary",
          "text-yellow1": type === "warning",
          "text-red1": type === "danger",
        })}
      >
        {label}
      </p>
    </div>
  );
};

export default Tag;
