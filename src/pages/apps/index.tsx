import React from "react";
import AuthenticatedLayout from "../../../views/components/Layout/AuthenticatedLayout";
import Image from "next/image";
import AppHeroBackground from "../../../views/assets/images/app-hero-bg.png";
import AppArrow from "../../../views/assets/images/app-arrow.svg";
import { AppData } from "../../../views/helpers/data/App";

const Apps = () => {
  return (
    <AuthenticatedLayout>
      <div className="flex flex-col gap-6">
        <div className="bg-bespokeBlack px-6 relative py-[57px] flex flex-col gap-4 rounded-[8px] overflow-hidden  ">
          <p className="text-[24px] font-[500] text-bespokeWhite relative z-10 ">
            Enough Apps for your everyday need
          </p>
          <p className="text-[16px] font-[300] text-bespokeWhite relative z-10 ">
            Select from our readily available Apps crafted for you and for your
            everyday needs
          </p>
          <Image
            src={AppHeroBackground}
            alt="app-background"
            className="absolute right-0 top-0 z-0"
          />
        </div>
        <div className="flex flex-col gap-10">
          {AppData.map((app, index) => (
            <div className="flex flex-col gap-7 " key={index}>
              <p className="text-[16px] font-[400] text-[#4B4B4B] ">
                {app.AppCategory}
              </p>
              <div className="flex flex-wrap gap-[32px] ">
                {app.AppDetails?.map((detail, index) => (
                  <div
                    className="p-4 rounded-[8px] border-[0.2px] border-[#B9B9B9] flex flex-col gap-4 items-center bg-[#FFFFFF] "
                    key={index}
                  >
                    <Image src={detail.image} alt="app-image" />
                    <div className="flex items-center p-2 justify-between rounded-[4px] bg-[#FFFAF5] w-full cursor-pointer ">
                      <p className="text-[14px] font-[400] text-bespokeBlack ">
                        Visit App
                      </p>
                      <Image src={AppArrow} alt="arrow" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </AuthenticatedLayout>
  );
};

export default Apps;
