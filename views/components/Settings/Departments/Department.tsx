import Image from "next/image";
import React, { useState } from "react";
import EditIcon from "../../../assets/images/edit-icon.svg";
import DeleteIcon from "../../../assets/images/delete-icon.svg";
import DepartmentIcon from "../../../assets/images/department-icon.svg";
import AddJobTitle from "./AddDepartment";

const departmentData = [
  {
    location: "Marketing and Sales",
  },
  {
    location: "Research and Development",
  },
  {
    location: "Care workers",
  },
  {
    location: "Admin",
  },
];

const Department = () => {
  const [popup, setPopup] = useState(false);

  return (
    <>
      <div className="flex flex-col gap-4 w-[820px]">
        <div className="flex items-center justify-between w-full">
          <p className="text-[16px] font-[400] text-bespokeBlack ">Department</p>
          <div
            className="flex items-center gap-2 px-2 py-1 rounded-[4px] bg-bespokeDeepPurple cursor-pointer"
            onClick={() => setPopup(true)}
          >
            <p className="text-[12px] font-[400] text-bespokeWhite">
              Add Department
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          {departmentData.map((location, index) => (
            <div
              className="px-5 py-4 bg-bespokeWhite flex justify-between items-center rounded-[8px] border-[0.2px] border-[#F0F0F0] "
              key={index}
            >
              <div className="flex items-center gap-6">
                <Image src={DepartmentIcon} alt="location-icon" />
                <div className="flex flex-col gap-2">
                  <p className="text-[16px] font-[500] text-bespokeBlack ">
                    {location.location}
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
      {popup && <AddJobTitle closeModal={setPopup} showModal={popup} />}
    </>
  );
};

export default Department;
