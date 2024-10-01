import classNames from "classnames";

interface LoaderProps {
  size?: number;
  visible?: boolean;
  className?: string;
}

const Loader = ({
  size = 50,
  className = "",
  visible = false,
}: LoaderProps) => (
  <div
    className={classNames(
      "w-full h-full flex justify-center items-center",
      className,
      {
        hidden: !visible,
      }
    )}
  >
    <i
      className={`fa-duotone fa-spinner-third fa-spin text-red1`}
      style={{ fontSize: size }}
    />
  </div>
);

export default Loader;
