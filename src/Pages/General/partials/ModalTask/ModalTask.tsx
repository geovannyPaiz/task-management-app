import { Modal } from "Components/organisms";
import { Dropdown } from "Components/atoms/Dropdown";
import Points from "Assets/img/Points.svg";
import Tags from "Assets/img/Tags.svg";
import { useState, useEffect } from "react";
import { GET_USERS } from "Services/Users";
import { useQuery } from "@apollo/client";
import { Loader } from "Components/atoms";
import CalendarPicker from "Components/atoms/CalendarPicker/CalendarPicker";
import moment from "moment";
import InputText from "Components/atoms/InputText/inputText";

type TModalTask = {
  onSave: ((task: any) => Promise<void>) | (() => void);
  onCancel: () => void;
  labelSaveButton: string;
  visible: boolean;
  title: string;
  loading: boolean;
} & ModalProps;

const ModalTask = ({
  onCancel,
  onSave,
  labelSaveButton,
  visible,
  loading: loadingSave,
}: TModalTask) => {
  const [points, setPoints] = useState<OptionsDropdown>();
  const [user, setUser] = useState<OptionsDropdown>();
  const [tags, setTags] = useState<OptionsDropdown>();
  const [date, setDate] = useState<Date>();
  const { loading, data } = useQuery(GET_USERS);
  const [listUsers, setListUsers] = useState<OptionsDropdown[]>();
  const [taskName, setTaskName] = useState("");

  useEffect(() => {
    if (loading === false && data) {
      const { users }: { users: User[] } = data;
      if (users) {
        setListUsers(
          users.map((user) => {
            return {
              label: user.fullName,
              value: user.id,
              avatar: user.avatar,
              fullName: user.fullName,
            };
          })
        );
      }
    }
  }, [loading, data]);

  const onCancelTask = () => {
    setTaskName("");
    setTags(undefined);
    setDate(undefined);
    setPoints(undefined);
    setUser(undefined);
    onCancel();
  };

  const onSaveTask = () => {
    const task = {
      name: taskName,
      dueDate: date,
      pointEstimate: points?.value,
      status: "BACKLOG",
      tags: [tags?.value] as string[],
      assignee: { ...user, id: user?.value },
    };
    onSave(task);
    onCancelTask();
  };

  return (
    <Modal
      loading={loadingSave}
      onCancel={onCancelTask}
      onSave={onSaveTask}
      labelSaveButton={labelSaveButton}
      visible={visible}
    >
      {loading ? (
        <Loader size={50} />
      ) : (
        <div className="flex flex-col">
          <InputText
            value={taskName}
            onChange={(value: string) => setTaskName(value)}
            placeholder="Task Name"
          />
          <div className="flex flex-row flex-x-2 w-full justify-center items-center gap-y-4 bg-gray3">
            <Dropdown
              label="Estimate"
              options={[
                { label: "0 Points", value: "ZERO" },
                { label: "1 Points", value: "ONE" },
                { label: "2 Points", value: "TWO" },
                { label: "3 Points", value: "FOUR" },
                { label: "4 Points", value: "EIGHT" },
              ]}
              icon={Points}
              value={points}
              onChange={(value: OptionsDropdown) => setPoints(value)}
            />
            <Dropdown
              label="Assignee"
              options={listUsers || []}
              value={user}
              onChange={(value: OptionsDropdown) => setUser(value)}
            />
            <Dropdown
              label="Label"
              options={[
                { label: "ANDROID", value: "ANDROID" },
                { label: "IOS", value: "IOS" },
                { label: "NODE_JS", value: "NODE_JS" },
                { label: "RAILS", value: "RAILS" },
                { label: "REACT", value: "REACT" },
              ]}
              value={tags}
              onChange={(value: OptionsDropdown) => setTags(value)}
              icon={Tags}
            />
            <CalendarPicker
              value={date ? moment(date).format("DD/MM/YYYY") : ""}
              onChange={(value: Date) => setDate(value)}
            />
          </div>
        </div>
      )}
    </Modal>
  );
};
export default ModalTask;
