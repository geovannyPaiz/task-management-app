interface InputTextProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}

const InputText = ({ value, onChange, placeholder }: InputTextProps) => {
  return (
    <input
      className="flex bg-gray1 h-8 px-2 w-full"
      onChange={(e) => {
        onChange(e.target.value);
      }}
      placeholder={placeholder}
      value={value}
    />
  );
};
export default InputText;
