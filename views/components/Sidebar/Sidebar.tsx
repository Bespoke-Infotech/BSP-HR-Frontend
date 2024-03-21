import React from "react";
import Logo from "../../assets/images/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "../../helpers/routes";
import Router, { useRouter } from "next/router";
import { useAuth } from "../../context/AuthContext";
import { LOCAL_STORAGE_KEYS } from "../../helpers/localStorageKeys";
import { sidebar } from "../../helpers/data/Sidebar";

export default function Sidebar() {
  const router = useRouter();
  const ActiveLink = (href: string) => router.pathname.startsWith(href);
  const { logout } = useAuth();

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
      <div className="flex flex-col max-w-[150px] w-full h-screen border border-r-[#B9B9B930] fixed left-0 top-0 z-50">
        <div className="flex items-center px-6 py-3 border border-b-[#B9B9B930] ">
          <Image src={Logo} alt="bespoke-logo" className="" />
        </div>
        <div className="p-4 flex flex-col gap-[24px] ">
          {sidebar.map((item, index) => (
            <div className="flex flex-col gap-[8px]" key={index}>
              <p className="text-[12px] font-[500] text-[#686868] px-2 ">
                {item?.section}
              </p>
              <div className="flex flex-col gap-[12px] ">
                {item?.menus?.map((menu, index) => (
                  <Link
                    href={menu.path}
                    key={index}
                    className={`flex gap-[4px] items-center px-2 py-[6px] ${
                      ActiveLink(menu?.path) &&
                      "bg-[#FFFAF5] text-bespokeOrange "
                    } `}
                  >
                    <Image
                      src={ActiveLink(menu?.path) ? menu.activeIcon : menu.icon}
                      alt="menu-icon"
                    />
                    <p className="text-[13px] whitespace-nowrap ">{menu.menu}</p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="w-[20%] py-[21px] px-8 bg-[#AACEBB] bg-opacity-10 hidden lg:block relative">
      <Image src={Logo} alt="" width={176} height={20.12} />

      <ul className="w-full flex-1 flex flex-col gap-y-2 overflow-y-auto pt-[79px]">
        <Link href={ROUTES.LANDINGPAGE}>
          <li
            className={`flex items-center py-2 px-3 cursor-pointer ${
              ActiveLink(ROUTES.LANDINGPAGE) &&
              "bg-[#80B599] bg-opacity-20 rounded-[32px]"
            }`}
          >
            <Image
              src={
                ActiveLink(ROUTES.LANDINGPAGE)
                  ? GreenDashboardIcon
                  : GrayDashboardIcon
              }
              alt={`Dashboard Icon`}
              width={20}
              height={20}
              className={`pr-2 `}
            />
            <span
              className={`text-sm  ${
                ActiveLink(ROUTES.LANDINGPAGE) ||
                router.pathname.includes(ROUTES.LANDINGPAGE)
                  ? "text-bespokeGreen font-semibold"
                  : "text-[#4D5154] font-normal hover:text-bespokeDimGreen"
              }`}
            >
              Dashboard
            </span>
          </li>
        </Link>
        
        <p className="text-[12px] leading-[16px] font-normal py-2 px-3 text-[#4D5154] pt-[44px]">
          INSURANCE
        </p>
        <Link href={ROUTES.LANDINGPAGE}>
          <li
            className={`text-sm flex items-center py-2 px-3 cursor-pointer ${
              ActiveLink(ROUTES.LANDINGPAGE) &&
              "bg-[#80B599] bg-opacity-20 rounded-[32px]"
            }`}
          >
            <Image
              src={
                ActiveLink(ROUTES.LANDINGPAGE)
                  ? GreenPolicyIcon
                  : GrayPolicyIcon
              }
              alt={`Policy Icon`}
              width={20}
              height={20}
              className={`pr-2 `}
            />
            <span
              className={`text-sm ${
                ActiveLink(ROUTES.LANDINGPAGE)
                  ? "text-bespokeGreen font-semibold"
                  : "text-[#4D5154] font-normal hover:text-bespokeDimGreen"
              }`}
            >
              Landing page
            </span>
          </li>
        </Link>
        <Link href={ROUTES.LANDINGPAGE}>
          <li
            className={`text-sm flex items-center py-2 px-3 cursor-pointer ${
              ActiveLink(ROUTES.LANDINGPAGE) &&
              "bg-[#80B599] bg-opacity-20 rounded-[32px]"
            }`}
          >
            <Image
              src={GrayClaimIcon}
              alt={`Claim Icon`}
              width={20}
              height={20}
              className={`pr-2 `}
            />
            <span
              className={`text-sm ${
                ActiveLink(ROUTES.LANDINGPAGE)
                  ? "text-bespokeGreen font-semibold"
                  : "text-[#4D5154] font-normal hover:text-bespokeDimGreen"
              }`}
            >
              Landing page
            </span>
          </li>
        </Link>
      </ul>
    </div> */}
    </>
  );
}
