import cls from "classnames";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onSearch: (value: string) => void;
  setLoading: (value: boolean) => void;
}
const SearchBar = ({
  value,
  onChange,
  onSearch,
  setLoading,
}: SearchBarProps) => {
  return (
    <div className="w-full flex flex-row rounded-[24px] bg-gray1 h-16 px-4 items-center">
      <i className="fa-solid fa-search text-gray2 w-[24px] h-24px] hover:text-red2" />
      <input
        className={cls("flex bg-gray1 h-8 px-2 w-full")}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        placeholder={"Search"}
        value={value}
      />
      <i className="fa-solid fa-bell text-gray2 w-[24px] h-24px]" />
    </div>
  );
};

export default SearchBar;
