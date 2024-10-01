import { Sidebar } from "./Partials/SideBar";

interface ILayoutProps {
  children: React.ReactNode;
  itemsNav: INavbarItem[];
}
const Layout = ({ children, itemsNav = [] }: ILayoutProps) => {
  return (
    <div className="h-screen w-full grid grid-cols-12 gap-4">
      <div className="col-span-2">
        <Sidebar itemsNav={itemsNav} />
      </div>
      <div className="col-span-10 overflow-y-auto scroll transition-all ease-in-out duration-300 w-full">
        {children}
      </div>
    </div>
  );
};

export default Layout;
