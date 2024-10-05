import DatePicker, { DateObject } from "react-multi-date-picker";
import Calendar from "Assets/img/Calendar.svg";
import "./styles.css";

interface CalendarPickerProps {
  value?: string;
  onChange: (value: Date) => void;
}

const CalendarPicker = ({ value, onChange }: CalendarPickerProps) => {
  return (
    <div className="flex flex-row gap-x-4 items-center">
      <img src={Calendar} alt="calendario" />
      <DatePicker
        value={value}
        onChange={(dateInfo: DateObject) => {
          onChange(dateInfo.toDate());
        }}
        style={{
          background: "#94979A1A",
          borderColor: "#94979A1A",
        }}
        // className="custom-input custom-calendar"
        format="DD/MM/YYYY"
      />
    </div>
  );
};

export default CalendarPicker;
