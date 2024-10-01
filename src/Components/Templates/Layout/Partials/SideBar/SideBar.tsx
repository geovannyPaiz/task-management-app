import ItemsMenu from "./Partials/ItemsMenu";
import logo from "Assets/img/Logo.svg";
export interface SidebarProps {
  itemsNav: INavbarItem[];
}

const Sidebar = ({ itemsNav }: SidebarProps) => {
  return (
    <>
      <div className="flex flex-col h-screen bg-gray1 rounded-[24px]">
        <div className="w-full h-16 bg-blue2 flex items-center justify-center">
          <img src={logo} alt="logo" className="w-auto" />
        </div>
        <nav className="w-full ">
          <ul>
            {itemsNav.map((item, index) => (
              <ItemsMenu key={index} item={item} />
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
