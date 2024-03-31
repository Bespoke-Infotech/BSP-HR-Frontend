import Image from "next/image";
import React, { useState } from "react";
import EditIcon from "../../../assets/images/edit-icon.svg";
import DeleteIcon from "../../../assets/images/delete-icon.svg";
import VacationIcon from "../../../assets/images/vacation-icon.svg";
import SickLeaveIcon from "../../../assets/images/sick-leave-icon.svg";
import MaternityLeaveIcon from "../../../assets/images/maternity-leave-icon.svg";
import BerievedIcon from "../../../assets/images/berieved-icon.svg";
import AddTimeOff from "./AddTimeOff";

const holidaysData = [
  {
    timeOff: "Vacation",
    period: "30 days period",
    icon: VacationIcon,
  },
  {
    timeOff: "Sick Leave",
    period: "5 days paid",
    icon: SickLeaveIcon,
  },
  {
    timeOff: "Maternity Leave",
    period: "30 days period",
    icon: MaternityLeaveIcon,
  },
  {
    timeOff: "Berieved",
    period: "10 days paid",
    icon: BerievedIcon,
  },
];

const TimeOff = () => {
  const [popup, setPopup] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(1000000);

  const toggle = (index: any) => {
    if (hoveredIndex === index) {
      setHoveredIndex(1000000);
    } else {
      setHoveredIndex(index);
    }
  };

  return (
    <>
      <div className="flex flex-col gap-4 w-[820px]">
        <div className="flex items-center justify-between w-full">
          <p className="text-[16px] font-[400] text-bespokeBlack ">Time Off</p>
          <div
            className="flex items-center gap-2 px-2 py-1 rounded-[4px] bg-bespokeDeepPurple cursor-pointer"
            onClick={() => setPopup(true)}
          >
            <p className="text-[12px] font-[400] text-bespokeWhite">
              Add Time Off
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          {holidaysData.map((timeOff, index) => (
            <div
              className="px-5 py-4 bg-bespokeWhite flex justify-between items-center rounded-[8px] border-[0.2px] border-[#F0F0F0] "
              key={index}
              onMouseEnter={() => toggle(index)}
              onMouseLeave={() => toggle(1000000)}
            >
              <div className="flex items-center gap-6">
                <Image src={timeOff.icon} alt="icon" />
                <div className="flex flex-col gap-2">
                  <p className="text-[18px] font-[500] leading-3 text-bespokeBlack ">
                    {timeOff.timeOff}
                  </p>
                  <p className="text-[12px] font-[200] leading-3 text-bespokeBlack ">
                    {timeOff.period}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2">
                  <p className="text-bespokeBlack text-[12px]">Activate</p>
                  <label className="inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="relative h-[11.2px] w-4 peer-focus:outline-none bg-gray-700 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[1px] after:bg-white after:rounded-full after:h-[7px] after:w-[7px] after:transition-all peer-checked:bg-[#219653]"></div>
                  </label>
                </div>
                <div className="w-6 aspect-square rounded-[50%] bg-[#F0F0F0] p-1 cursor-pointer flex items-center justify-center ">
                  <Image src={EditIcon} alt="edit-icon" className="" />
                </div>
                {hoveredIndex === index && (
                  <div
                    className="flex items-center gap-2 p-1 rounded-[4px] bg-[#F0F0F0] cursor-pointer"
                    // onClick={() => setPopup(true)}
                  >
                    <p className="text-[12px] font-[400] text-[#686868]">
                      View Employee
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      {popup && <AddTimeOff closeModal={setPopup} showModal={popup} />}
    </>
  );
};

export default TimeOff;
