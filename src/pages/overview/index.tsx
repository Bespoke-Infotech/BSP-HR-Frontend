import React from "react";
import AuthenticatedLayout from "../../../views/components/Layout/AuthenticatedLayout";
import Image from "next/image";
import { PrimaryButton } from "../../../views/components/Button/Button";
import {
  cardDetails,
  companyNews,
  upcomingDaysOff,
} from "../../../views/helpers/data/Overview";
import CalendarIcon from "../../../views/assets/images/calendar-icon.svg";
import AvatarIcon from "../../../views/assets/images/avatar-icon.svg";
import IncreaseArrow from "../../../views/assets/images/increase-arrow.svg";
import ArrowDown from "../../../views/assets/images/arrow-down.svg";
import OverviewHeroBackground from "../../../views/assets/images/overview-hero-bg.png";

const Overview = () => {
  return (
    <AuthenticatedLayout>
      <div className="flex flex-col gap-11">
        <div className=" px-6 relative py-[14px] flex justify-between rounded-[8px] overflow-hidden items-center  ">
          <Image
            src={OverviewHeroBackground}
            alt="overview-hero-background"
            className="absolute right-0 top-0 z-0 "
          />
          <div className="flex flex-col gap-1 relative z-1">
            <p className="text-[14px] font-[500] text-bespokeWhite ">
              Hi Paul Smith
            </p>
            <p className="text-[12px] font-[400] text-bespokeWhite ">
              You have up to 50days of freemium
            </p>
          </div>
          <PrimaryButton
            title="Upgrade to Pro"
            onClick={() => console.log("first")}
            className="text-[14px] pt-1 pb-1 pr-3 pl-3 font-[400] whitespace-nowrap bg-bespokeWhite border-transparent text-black w-fit h-full hover:bg-bespokeWhite hover:border-bespokeWhite relative z-1"
          />
        </div>
        <div className="grid grid-cols-10 gap-[74px]">
          <div className="col-span-7">
            <div className="flex flex-col gap-8">
              <div className="grid grid-cols-3 gap-8">
                {cardDetails.map((card, index) => (
                  <div
                    className="p-4 rounded-[8px] bg-bespokeWhite flex flex-col gap-2 border-[0.2px] border-[#B9B9B9]"
                    key={index}
                  >
                    <div className="flex flex-col gap-3">
                      <p className="text-[14px] font-[400] text-[#4B4B4B] ">
                        {card.category}
                      </p>
                      <p className="text-[24px] font-[500] text-bespokeBlack ">
                        {card.value}
                      </p>
                    </div>
                    <div className="flex gap-4 items-center w-full p-2 rounded-[4px] bg-[#FBFBFB] ">
                      <div className="flex items-center gap-1 text-[#069952]">
                        <Image src={IncreaseArrow} alt="increase-arrow" />
                        <p className="text-[12px] font-[400] text-[#069952] ">
                          15%
                        </p>
                      </div>
                      <p className="text-[12px] font-[400] text-[#989898] ">
                        {card.label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-bespokeWhite rounded-[24px] p-8 flex flex-col gap-10 min-h-[400px]">
                <div className="flex items-center justify-between">
                  <div className=" border-[0.2px] border-b-[#B9B9B9] border-x-transparent border-t-transparent flex gap-6 py-1 ">
                    <div className="flex items-center gap-1 cursor-pointer">
                      <div className="h-3 w-3 flex justify-center items-center rounded-[50%] bg-[#FDE0BD] ">
                        <div className="h-[6px] w-[6px] flex justify-center items-center rounded-[50%] bg-bespokeOrange " />
                      </div>
                      <p className="text-[#686868] text-[12px] font-[300] ">
                        Headcount
                      </p>
                    </div>
                    <div
                      className="flex items-center gap-1 cursor-pointer"
                      // onClick={() =>
                      //   handleNewHire(details?.newHire ? false : true)
                      // }
                    >
                      <div className="h-3 w-3 flex justify-center items-center rounded-[50%] bg-[#FDE0BD] ">
                        {/* {details?.newHire && (
                        <div className="h-[6px] w-[6px] flex justify-center items-center rounded-[50%] bg-bespokeOrange " />
                      )} */}
                      </div>
                      <p className="text-[#686868] text-[12px] font-[300] ">
                        Location
                      </p>
                    </div>
                    <div className="flex items-center gap-1 cursor-pointer">
                      <div className="h-3 w-3 flex justify-center items-center rounded-[50%] bg-[#FDE0BD] ">
                        <div className="h-[6px] w-[6px] flex justify-center items-center rounded-[50%] bg-bespokeOrange " />
                      </div>
                      <p className="text-[#686868] text-[12px] font-[300] ">
                        Divisions
                      </p>
                    </div>
                    <div className="flex items-center gap-1 cursor-pointer">
                      <div className="h-3 w-3 flex justify-center items-center rounded-[50%] bg-[#FDE0BD] ">
                        <div className="h-[6px] w-[6px] flex justify-center items-center rounded-[50%] bg-bespokeOrange " />
                      </div>
                      <p className="text-[#686868] text-[12px] font-[300] ">
                        Department
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-5">
                    <div className="flex items-center gap-2 px-2 py-1 rounded-[4px] border-[0.5px] border-[#B9B9B9] cursor-pointer">
                      <p className="text-[12px] font-[400] text-bespokeBlack">
                        Period
                      </p>
                      <Image src={ArrowDown} alt="arrow-down" />
                    </div>
                    <div className="flex items-center gap-2 px-2 py-1 rounded-[4px] bg-bespokeDeepPurple cursor-pointer">
                      <p className="text-[12px] font-[400] text-bespokeWhite">
                        Full report
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3 flex flex-col gap-[35px] ">
            <div className="flex flex-col gap-3">
              <p className="text-[16px] font-[500] text-bespokeBlack ">
                Upcoming Days Off
              </p>
              <div className="px-3 flex flex-col border-[0.2px] border-[#B9B9B9] rounded-[8px] w-full ">
                {upcomingDaysOff.map((detail, index) => (
                  <div
                    className="px-4 py-2 flex gap-2 items-center border-[0.2px] border-transparent border-b-[#B9B9B9] cursor-pointer"
                    key={index}
                  >
                    <Image src={CalendarIcon} alt="calendar-icon" />
                    <div className="flex flex-col">
                      <p className="text-[14px] font-[400] text-bespokeBlack ">
                        {detail.date}
                      </p>
                      <p className="text-[12px] font-[300] text-[#686868] ">
                        {detail.event}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-[16px] font-[500] text-bespokeBlack ">
                Company news
              </p>
              <div className="px-3 flex flex-col border-[0.2px] border-[#B9B9B9] rounded-[8px] w-full ">
                {companyNews.map((detail, index) => (
                  <div
                    className="px-4 py-2 flex flex-col gap-2 border-[0.2px] border-transparent border-b-[#B9B9B9] cursor-pointer"
                    key={index}
                  >
                    <p className="text-[12px] font-[400] text-[#686868] ">
                      {detail.date}
                    </p>
                    <div className="flex gap-2 items-center">
                      <Image src={AvatarIcon} alt="calendar-icon" />
                      <div className="flex flex-col">
                        <p className="text-[14px] font-[400] text-bespokeBlack ">
                          {detail.name}
                        </p>
                        <p className="text-[12px] font-[300] text-[#686868] ">
                          {detail.event}
                        </p>
                        <p className="text-[12px] font-[300] text-[#686868] ">
                          {detail.category}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
};

export default Overview;
