import React from "react";
import Logo from "@/assets/images/logo.png";
import GreenDashboardIcon from "@/assets/images/dashboard-green-icon.svg";
import GrayDashboardIcon from "@/assets/images/dashboard-gray-icon.svg";
import GraySetUpIcon from "@/assets/images/setup-gray-icon.svg";
import GreenSetUpIcon from "@/assets/images/setup-green-icon.svg";
import GreenPolicyIcon from "@/assets/images/policy-green-icon.svg";
import GrayPolicyIcon from "@/assets/images/policy-gray-icon.svg";
import GrayClaimIcon from "@/assets/images/claim-gray-icon.svg";
import ImageAvatar from "@/assets/images/avatar.png";
import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "../../helpers/routes";
import Router, { useRouter } from "next/router";
import { Disclosure, Popover } from "@headlessui/react";
import ChevronUpIcon from "@/assets/images/claim-gray-icon.svg";
import { useAuth } from "../../context/AuthContext";
import { LOCAL_STORAGE_KEYS } from "../../helpers/localStorageKeys";

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
    <div className="w-[20%] py-[21px] px-8 bg-[#AACEBB] bg-opacity-10 hidden lg:block relative">
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
        {/* <Link href={ROUTES.SETUP_GUIDE}>
          <li
            className={`flex items-center py-2 px-3 cursor-pointer ${
              ActiveLink(ROUTES.SETUP_GUIDE) &&
              "bg-[#80B599] bg-opacity-20 rounded-[32px]"
            }`}
          >
            <Image
              src={
                ActiveLink(ROUTES.SETUP_GUIDE) ? GreenSetUpIcon : GraySetUpIcon
              }
              alt={`Setup Icon`}
              width={20}
              height={20}
              className={`pr-2 `}
            />

            <span
              className={`text-sm ${
                ActiveLink(ROUTES.SETUP_GUIDE)
                  ? "text-bespokeGreen font-semibold"
                  : "text-[#4D5154] font-normal hover:text-bespokeDimGreen"
              }`}
            >
              Setup Guide
            </span>
          </li>
        </Link> */}
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
      <div className={` absolute bottom-[50px]`}>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button
                className={`flex items-center justify-between px-2 py-[12px] text-[12px] leading-4 font-semibold text-[#4D5154] hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-transparent ${
                  open &&
                  "rounded-t border border-b-0 border-[#C8CCD0] bg-white"
                }`}
              >
                <Image src={ImageAvatar} alt="" width={32} height={32} />
                <p className="ml-3">{users?.Firstname ?? "Guest"}</p>
                <Image src={ChevronUpIcon} alt="arrow" />
              </Disclosure.Button>
              <Disclosure.Panel className="grid gap-[13px] bg-white rounded-b border border-t-0 border-[#C8CCD0]">
                <div className="border-t border-[#C8CCD0] pt-[13px] px-2 flex flex-col">
                  <Link href={ROUTES.LANDINGPAGE}>Settings</Link>
                  <Link
                    href="/contact"
                    className="pt-3 cursor-pointer"
                    target="_blank"
                  >
                    Support
                  </Link>
                </div>
                <div className="border-t px-2 pt-[13px] pb-3 border-[#C8CCD0] cursor-pointer">
                  <div onClick={() => handleLogout()}>Logout</div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}
