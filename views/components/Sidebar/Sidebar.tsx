import React, { useContext, useEffect } from "react";
import Logo from "../../assets/images/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "../../helpers/routes";
import Router, { useRouter } from "next/router";
import { useAuth } from "../../context/AuthContext";
import { LOCAL_STORAGE_KEYS } from "../../helpers/localStorageKeys";
import { sidebar } from "../../helpers/data/Sidebar";
import { ClickedIndexContext } from "../../helpers/context";

interface ISidebarProps {
  isSidebar?: boolean;
  setIsSidebar?: any;
}

export default function Sidebar(props: ISidebarProps) {
  const { isSidebar, setIsSidebar } = props;
  const router = useRouter();
  const ActiveLink = (href: string) => router.pathname.startsWith(href);
  const { logout } = useAuth();
  const { clickedIndex, setClickedIndex } = useContext(ClickedIndexContext);

  // Load the data from localStorage when the component mounts
  useEffect(() => {
    const savedData = localStorage.getItem("clicked");
    if (savedData) {
      setClickedIndex(parseInt(savedData));
    }
  }, [setClickedIndex]);

  // Save the data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("clicked", clickedIndex.toString());
  }, [clickedIndex]);

  const toggle = (index: any) => {
    if (clickedIndex === index) {
      setClickedIndex(1000000);
    } else {
      setClickedIndex(index);
    }
  };

  const handleLogout = () => {
    logout();
    Router.push(ROUTES.LANDINGPAGE);
  };

  const user =
    typeof window !== "undefined"
      ? localStorage?.getItem(LOCAL_STORAGE_KEYS.USER)
      : null;

  const users = user ? JSON.parse(user) : null;

  return (
    <>
      <div
        className={`flex flex-col max-w-[250px] w-full h-screen border border-r-[#B9B9B930] fixed bg-bespokeWhite lg:left-0 top-0 z-[51] lg:z-50 overflow-scroll ${
          isSidebar ? "left-0" : "-left-[250px]"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-3 border border-b-[#B9B9B930] ">
          <Image src={Logo} alt="bespoke-logo" className="lg:w-[100%]" />
          <p
            className="lg:hidden cursor-pointer text-[18px]"
            onClick={() => setIsSidebar(false)}
          >
            x
          </p>
        </div>
        <div className="p-4 flex flex-col gap-[24px] ">
          {sidebar.map((item, index) => (
            <div className="flex flex-col gap-[8px]" key={index}>
              {index > 0 && <hr />}
              <p className="text-[16px] font-[500] text-[#686868] px-2 ">
                {item?.section}
              </p>
              <div className="flex flex-col gap-[12px] ">
                {item?.menus?.map((menu, index) =>
                  menu?.subMenus.length > 0 ? (
                    <div key={index}>
                      <div
                        className={`flex gap-[4px] items-center px-2 py-[6px] cursor-pointer ${
                          ActiveLink(menu?.path) &&
                          "bg-[#FFFAF5] text-bespokeOrange "
                        } `}
                        onClick={() => toggle(index)}
                        key={index}
                      >
                        <Image
                          src={
                            ActiveLink(menu?.path) ? menu.activeIcon : menu.icon
                          }
                          alt="menu-icon"
                        />
                        <p className="text-[16px] whitespace-nowrap ">
                          {menu.menu}
                        </p>
                      </div>
                      {clickedIndex === index && (
                        <div className="flex flex-col">
                          {menu.subMenus.map((subMenu, index) => (
                            <Link
                              href={subMenu.path}
                              key={index}
                              className={`py-1 pl-[28px] pr-1 text-[15px] whitespace-nowrap ${
                                ActiveLink(subMenu?.path) &&
                                "text-bespokeOrange "
                              } `}
                            >
                              {subMenu?.subMenu}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={menu.path}
                      key={index}
                      className={`flex gap-[4px] items-center px-2 py-[6px] ${
                        ActiveLink(menu?.path) &&
                        "bg-[#FFFAF5] text-bespokeOrange "
                      } `}
                      onClick={() => setClickedIndex(1000000)}
                    >
                      <Image
                        src={
                          ActiveLink(menu?.path) ? menu.activeIcon : menu.icon
                        }
                        alt="menu-icon"
                      />
                      <p className="text-[16px] whitespace-nowrap ">
                        {menu.menu}
                      </p>
                    </Link>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
