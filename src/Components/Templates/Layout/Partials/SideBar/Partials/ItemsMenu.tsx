import { useNavigate, useLocation } from "react-router-dom";
import cls from "classnames";

interface ItemsMenuProps {
  item: INavbarItem;
}

const ItemsMenu = ({ item }: ItemsMenuProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  return (
    <li>
      <div
        className={cls(
          "py-2 flex space-between items-center w-full hover: cursor-pointer",
          {
            "border-r-4 border-red1 bg-gradient-to-r from-transparent to-red2 ":
              pathname === `${item.path}`,
          }
        )}
        onClick={() => navigate(item.path)}
        style={{ backgroundSize: "500% 1%" }}
      >
        <span
          className={cls("text-gray2 w-full pl-4 hover:text-red2", {
            "text-red2": pathname === `${item.path}`,
          })}
        >
          {item.text}
        </span>
      </div>
    </li>
  );
};
export default ItemsMenu;
