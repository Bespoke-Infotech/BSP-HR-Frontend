import React, { useEffect, useState } from "react";
import CustomSearchInput from "../CustomHTMLElements/CustomSearchInput";
import { OutlineButton, PrimaryButton } from "../Button/Button";
import Image from "next/image";
import Notification from "../../assets/images/notification.svg";
import ProfilePicture from "../../assets/images/profile-picture.svg";
import ArrowUpDown from "../../assets/images/arrow-up-down.svg";
import { useRouter } from "next/router";
import { ROUTES } from "../../helpers/routes";
import Logo from "../../assets/images/logo.svg";
import Menu from "../../assets/images/apps-icon.svg";

interface IHeaderProps {
  isSidebar?: boolean;
  setIsSidebar?: any;
}

const Header = (props: IHeaderProps) => {
  const { isSidebar, setIsSidebar } = props;
  const router = useRouter();

  const handleClick = () => {
    router.push(ROUTES.ADD_EMPLOYEES);
  };

  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setScreenWidth(window.innerWidth);
    } else {
      // Define a fallback value if window is not available (e.g., for server-side rendering)
      setScreenWidth(0); // or any other default value
    }
  }, []);

  return (
    <>
      <div
        className="fixed top-0 right-0 h-[48px] py-[6px] px-4 lg:px-7 border border-b-[#B9B9B930] flex items-center justify-between z-50 bg-[#FDFDFD] "
        style={{
          width: `${screenWidth > 1023 ? "calc(100% - 250px)" : "100%"}`,
        }}
      >
        <div className="flex items-center gap-2 lg:hidden">
          <Image src={Menu} alt="menu" onClick={() => setIsSidebar(true)} />
          <Image src={Logo} alt="logo" />
        </div>
        <CustomSearchInput
          placeholder="Search employees..."
          onClickSearchIcon={() => console.log("search")}
          style="pl-[0px] h-fit border-transparent bg-transparent focus:bg-transparent hidden lg:block "
        />
        <div className="flex items-center gap-[16px] ">
          <OutlineButton
            title="Book time off"
            // onClick={() => setSetupStep(setupStep + 1)}
            className="text-[14px] w-full pt-1 pb-1 font-[400] hidden lg:block"
            //   disabled={!details.email || !details.password}
          />
          <PrimaryButton
            title="Add a new employee"
            onClick={handleClick}
            className="text-[14px] w-full pt-1 pb-1 font-[400] whitespace-nowrap hidden lg:block"
            //   disabled={!details.email || !details.password}
          />
          <Image src={Notification} alt="notification" />
          <div className="h-5 w-[1px] bg-[#000000]" />
          <div className="flex items-center gap-[8px]">
            <div className="w-[32px]  aspect-square rounded-[50%] overflow-hidden bg-[#000000]">
              <Image
                src={ProfilePicture}
                alt="profile-pics"
                className="w-[32px]"
              />
            </div>
            <div className="hidden lg:flex flex-col gap-[2px]">
              <p className="text-[14px] font-[500] text-bespokeBlack whitespace-nowrap leading-4">
                Paul Smith
              </p>
              <p className="text-[12px] font-[300] text-[#686868] whitespace-nowrap leading-3">
                Admin
              </p>
            </div>
            <div className="">
              <Image src={ArrowUpDown} alt="profile-pics" className="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
