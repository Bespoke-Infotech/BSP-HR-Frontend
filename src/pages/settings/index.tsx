import React, { useState } from "react";
import { useRouter } from "next/router";
import AuthenticatedLayout from "../../../views/components/Layout/AuthenticatedLayout";
import Company from "../../../views/components/Settings/Company/Company";
import Holidays from "../../../views/components/Settings/Holidays/Holidays";
import Location from "../../../views/components/Settings/Locations/Location";
import JobTitle from "../../../views/components/Settings/JobTitles/JobTitle";
import Department from "../../../views/components/Settings/Departments/Department";
import TimeOff from "../../../views/components/Settings/TimeOff/TimeOff";

const Settings = () => {
  const router = useRouter();
  const { settingsQuery } = router.query;

  const handleDetailsRoute = (queryPath: string) => {
    router.push({
      pathname: `settings`,
      query: { settingsQuery: queryPath },
    });
  };

  const renderBasedOnQuery = () => {
    switch (settingsQuery) {
      case "company":
        return <Company />;
      case "time-off":
        return <TimeOff />;
      case "holidays":
        return <Holidays />;
      case "locations":
        return <Location />;
      case "job-titles":
        return <JobTitle />;
      case "departments":
        return <Department />;
      default:
        break;
    }
  };

  return (
    <>
      <AuthenticatedLayout>
        <p className="mb-6 font-[500] text-[18px] text-bespokeBlack ">
          Settings
        </p>
        <div className="flex flex-col gap-[24px]  ">
          <div className="w-full border-[0.2px] border-b-[#B9B9B9] border-x-transparent border-t-transparent flex gap-6 py-1 ">
            <div
              className="flex items-center gap-1 cursor-pointer"
              onClick={() => handleDetailsRoute("company")}
            >
              <div className="h-3 w-3 flex justify-center items-center rounded-[50%] bg-[#FDE0BD] ">
                {(!settingsQuery || settingsQuery === "company") && (
                  <div className="h-[6px] w-[6px] flex justify-center items-center rounded-[50%] bg-bespokeOrange " />
                )}
              </div>
              <p className="text-[#686868] text-[12px] font-[300] ">Company</p>
            </div>
            <div
              className="flex items-center gap-1 cursor-pointer"
              onClick={() => handleDetailsRoute("time-off")}
            >
              <div className="h-3 w-3 flex justify-center items-center rounded-[50%] bg-[#FDE0BD] ">
                {settingsQuery === "time-off" && (
                  <div className="h-[6px] w-[6px] flex justify-center items-center rounded-[50%] bg-bespokeOrange " />
                )}
              </div>
              <p className="text-[#686868] text-[12px] font-[300] ">Time off</p>
            </div>
            <div
              className="flex items-center gap-1 cursor-pointer"
              onClick={() => handleDetailsRoute("holidays")}
            >
              <div className="h-3 w-3 flex justify-center items-center rounded-[50%] bg-[#FDE0BD] ">
                {settingsQuery === "holidays" && (
                  <div className="h-[6px] w-[6px] flex justify-center items-center rounded-[50%] bg-bespokeOrange " />
                )}
              </div>
              <p className="text-[#686868] text-[12px] font-[300] ">Holidays</p>
            </div>
            <div
              className="flex items-center gap-1 cursor-pointer"
              onClick={() => handleDetailsRoute("job-titles")}
            >
              <div className="h-3 w-3 flex justify-center items-center rounded-[50%] bg-[#FDE0BD] ">
                {settingsQuery === "job-titles" && (
                  <div className="h-[6px] w-[6px] flex justify-center items-center rounded-[50%] bg-bespokeOrange " />
                )}
              </div>
              <p className="text-[#686868] text-[12px] font-[300] ">
                Job titles
              </p>
            </div>
            <div
              className="flex items-center gap-1 cursor-pointer"
              onClick={() => handleDetailsRoute("locations")}
            >
              <div className="h-3 w-3 flex justify-center items-center rounded-[50%] bg-[#FDE0BD] ">
                {settingsQuery === "locations" && (
                  <div className="h-[6px] w-[6px] flex justify-center items-center rounded-[50%] bg-bespokeOrange " />
                )}
              </div>
              <p className="text-[#686868] text-[12px] font-[300] ">
                Locations
              </p>
            </div>
            <div
              className="flex items-center gap-1 cursor-pointer"
              onClick={() => handleDetailsRoute("departments")}
            >
              <div className="h-3 w-3 flex justify-center items-center rounded-[50%] bg-[#FDE0BD] ">
                {settingsQuery === "departments" && (
                  <div className="h-[6px] w-[6px] flex justify-center items-center rounded-[50%] bg-bespokeOrange " />
                )}
              </div>
              <p className="text-[#686868] text-[12px] font-[300] ">
                Departments
              </p>
            </div>
          </div>
        </div>
        <div className="py-6">
          {!settingsQuery ? <Company /> : renderBasedOnQuery()}
        </div>
      </AuthenticatedLayout>
    </>
  );
};

export default Settings;
