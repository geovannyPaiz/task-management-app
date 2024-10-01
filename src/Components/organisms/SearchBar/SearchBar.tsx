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
    <div className="w-full">
      <i className="fa-solid fa-search text-gray2 w-[24px] h-24px]" />
      <input
        className={cls(
          "w-full pointer-events-none bg-gray1 h-8 rounded-[24px] px-8"
        )}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        placeholder={"Search"}
        onClick={() => {
          setLoading(true);
          onSearch(value);
        }}
        value={value}
      />
    </div>
  );
};

export default SearchBar;
