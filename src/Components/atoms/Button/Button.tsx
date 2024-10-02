import cls from "classnames";

interface ButtonProps {
  icon?: string;
  label?: string;
  onClick: () => void;
  loading: boolean;
}

const Button = ({ loading, onClick, icon, label }: ButtonProps) => {
  return (
    <div
      className={cls(
        "h-10 w-10 flex justify-center items-center bg-red2 rounded-[8px] hover:opacity-50 cursor-pointer",
        {
          "pointer-events-none opacity-50": loading,
        }
      )}
      onClick={onClick}
    >
      {loading ? (
        <i
          className={`fa-duotone fa-spinner-third fa-spin text-white h-8 w-8`}
        />
      ) : (
        <>{icon ? <i className={`${icon}`} /> : <p>{label}</p>}</>
      )}
    </div>
  );
};

export default Button;
