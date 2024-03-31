import Image from "next/image";
import React, { useState } from "react";
import EditIcon from "../../../assets/images/edit-icon.svg";
import DeleteIcon from "../../../assets/images/delete-icon.svg";
import AddHoliday from "./AddHoliday";

const holidaysData = [
  {
    date: "Jan 01",
    event: "New Year's Day",
    affected: "All employees",
  },
  {
    date: "Jan 01",
    event: "New Year's Day",
    affected: "All employees",
  },
  {
    date: "Jan 01",
    event: "New Year's Day",
    affected: "All employees",
  },
  {
    date: "Jan 01",
    event: "New Year's Day",
    affected: "All employees",
  },
];

const Holidays = () => {
  const [popup, setPopup] = useState(false);

  return (
    <>
      <div className="flex flex-col gap-4 w-[820px]">
        <div className="flex items-center justify-between w-full">
          <p className="text-[16px] font-[400] text-bespokeBlack ">Holidays</p>
          <div
            className="flex items-center gap-2 px-2 py-1 rounded-[4px] bg-bespokeDeepPurple cursor-pointer"
            onClick={() => setPopup(true)}
          >
            <p className="text-[12px] font-[400] text-bespokeWhite">
              Add Holiday
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          {holidaysData.map((holiday, index) => (
            <div
              className="px-5 py-4 bg-bespokeWhite flex justify-between items-center rounded-[8px] border-[0.2px] border-[#F0F0F0] "
              key={index}
            >
              <div className="flex items-center gap-6">
                <div className="p-[10px] rounded-[4px] bg-[#684212] text-bespokeWhite text-[8px] text-center font-[500] leading-[0] ">
                  <p>Jan</p>
                  <br />
                  <p>01</p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-[18px] font-[500] text-bespokeBlack ">
                    {holiday.event}
                  </p>
                  <p className="text-[12px] font-[200] text-bespokeBlack ">
                    Applied to: {holiday.affected}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 aspect-square rounded-[50%] bg-[#F0F0F0] p-1 cursor-pointer flex items-center justify-center ">
                  <Image src={EditIcon} alt="edit-icon" className="" />
                </div>
                <div className="w-6 aspect-square rounded-[50%] bg-[#F0F0F0] p-1 cursor-pointer flex items-center justify-center ">
                  <Image
                    src={DeleteIcon}
                    alt="delete-icon"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {popup && <AddHoliday closeModal={setPopup} showModal={popup} />}
    </>
  );
};

export default Holidays;
