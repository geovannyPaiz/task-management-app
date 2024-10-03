interface ChildrenJsxProp {
  children?: React.ReactNode | React.ReactNode[];
}

interface INavbarItem {
  id: number;
  text: string;
  path: string;
  icon: string;
}

interface User {
  avatar: string;
  createdAt: string;
  email: string;
  fullName: string;
  id: string;
  type: string;
  updatedAt: string;
}

interface Task {
  assignee: User;
  createdAt: string;
  creator: User;
  dueDate: string;
  id: string;
  name: string;
  pointEstimate: string;
  position: number;
  status: string;
  tags: string[];
}

interface PoolTask {
  status: string;
  tasks: Task[];
}
