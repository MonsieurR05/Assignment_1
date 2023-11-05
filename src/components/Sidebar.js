import Image from "next/image";
import { AiOutlineHome } from "react-icons/ai";
import { GiMaterialsScience } from "react-icons/gi";
import { CgGames } from "react-icons/cg";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";
import { useContext } from "react";
import { SidebarContext } from "@/context/SidebarContext";
import { useRouter } from "next/router";

const sidebarItems = [
  {
    name: "Home",
    href: "/",
    icon: AiOutlineHome,
  },
  {
    name: "Discover",
    href: "/discover",
    icon: GiMaterialsScience,
  },
  {
    name: "Quiz",
    href: "/quiz",
    icon: CgGames,
  },
];

const Sidebar = () => {
  const router = useRouter();
  const { isCollapsed, toggleSidebarcollapse } = useContext(SidebarContext);

  return (
    <div className="sidebar_wrapper">
      <button className="btn1" onClick={toggleSidebarcollapse}>
        {isCollapsed ? <MdKeyboardArrowRight /> : <MdKeyboardArrowLeft />}
      </button>
      <aside className="sidebar" data-collapse={isCollapsed}>
        <div className="sidebar_top">
    
          <p className="sidebar_logoName">Climate Science</p>
        </div>
        <ul className="sidebar_list">
          {sidebarItems.map(({ name, href, icon: Icon }) => {
            return (
              <li className="sidebar_item" key={name}>
                <Link
                  className={`sidebar_link ${
                    router.pathname === href ? "sidebar_active" : ""
                  }`}
                  href={href}
                >
                  <span className="sidebar_icon">
                    <Icon />
                  </span>
                  <span className="sidebar_name">{name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
