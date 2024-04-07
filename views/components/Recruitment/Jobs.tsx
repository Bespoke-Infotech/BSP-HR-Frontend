import React, { useState } from "react";
import CustomInputField from "../CustomHTMLElements/CustomInputField";
import Image from "next/image";
import ApplicantsIcon from "../../assets/images/employees-icon.svg";
import MoreIcon from "../../assets/images/more-icon.svg";
import AddIcon from "../../assets/images/popover-add.svg";
import DeleteIcon from "../../assets/images/popover-delete.svg";
import DuplicateIcon from "../../assets/images/popover-duplicate.svg";
import EditIcon from "../../assets/images/popover-edit.svg";
import { Popover } from "@headlessui/react";

const jobData = [
  {
    title: "Recruitment Manager",
    ref: "#3",
    contractType: "Full-time",
    applicants: "2",
  },
  {
    title: "Recruitment Manager",
    ref: "#3",
    contractType: "Full-time",
    applicants: "2",
  },
  {
    title: "Recruitment Manager",
    ref: "#3",
    contractType: "Full-time",
    applicants: "2",
  },
  {
    title: "Recruitment Manager",
    ref: "#3",
    contractType: "Full-time",
    applicants: "2",
  },
  {
    title: "Recruitment Manager",
    ref: "#3",
    contractType: "Full-time",
    applicants: "2",
  },
  {
    title: "Recruitment Manager",
    ref: "#3",
    contractType: "Full-time",
    applicants: "2",
  },
];
const Jobs = () => {
  const [details, setDetails] = useState<any>();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };

  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">
        <div className="w-full lg:w-[400px]">
          <CustomInputField
            type="text"
            label=" "
            name="search"
            onChange={(e: any) => handleInputChange(e)}
            required
            placeholder="Search Job"
            extraLabel="Find"
            style="bg-transparent"
          />
        </div>
        <div
          className="flex items-center gap-2 px-4 py-2 rounded-[4px] bg-bespokeDeepPurple cursor-pointer"
          //   onClick={handleClick}
        >
          <p className="text-[16px] font-[600] text-bespokeWhite text-center whitespace-nowrap w-full lg:w-fit">
            Add job
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 gap-y-6 w-full">
        {jobData.map((job, index) => (
          <div
            className="bg-bespokeWhite flex flex-col gap-3 py-3 px-4 border-[0.2px] border-[#B9B9B9] rounded-[8px] w-full "
            key={index}
          >
            <div className="flex flex-col gap-1">
              <p className="text-[16px] font-[500] text-bespokeBlack whitespace-nowrap">
                {job.title}
              </p>
              <p className="text-[14px] font-[400] text-[#4B4B4B] whitespace-nowrap">
                Ref: {job.ref}
              </p>
              <p className="text-[14px] font-[400] text-bespokeBlack whitespace-nowrap">
                Contract type: {job.contractType}
              </p>
            </div>
            <div className="flex justify-between items-center w-full">
              <div className="flex gap-1 items-center">
                <Image src={ApplicantsIcon} alt="applicants-icon" />
                <p className="text-[14px] font-[400] text-[#4B4B4B] whitespace-nowrap">
                  {job.applicants}
                </p>
              </div>

              <Popover className="relative">
                <>
                  <Popover.Button
                    className={`group inline-flex gap-1 items-center rounded-md text-base font-normal text-[#4D5154] hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-transparent`}
                  >
                    <Image src={MoreIcon} alt="applicants-icon" />
                    <p className="text-[14px] font-[400] text-[#4B4B4B] whitespace-nowrap">
                      Action
                    </p>
                  </Popover.Button>

                  <Popover.Panel
                    className="absolute right-0 z-50 w-[145px] px-3 py-1 sm:px-2 bg-bespokeWhite rounded-[8px] shadow-lg border-[0.2px] border-[#B9B9B9] ;
                    "
                  >
                    <div className="">
                      <div className="items-center grid">
                        <div className="flex items-center px-2 py-1 gap-2 cursor-pointer hover:bg-[#FFFAF5]">
                          <Image src={AddIcon} alt="add-icon" className="w-4" />
                          <p className="text-bespokeBlack text-[12px] font-[400] whitespace-nowrap">
                            Add Applicants
                          </p>
                        </div>
                        <div className="flex items-center px-2 py-1 gap-2 cursor-pointer hover:bg-[#FFFAF5]">
                          <Image
                            src={EditIcon}
                            alt="add-icon"
                            // className="w-4"
                          />
                          <p className="text-bespokeBlack text-[12px] font-[400] whitespace-nowrap">
                            Edit Job
                          </p>
                        </div>
                        <div className="flex items-center px-2 py-1 gap-2 cursor-pointer hover:bg-[#FFFAF5]">
                          <Image
                            src={DeleteIcon}
                            alt="add-icon"
                            className="w-4"
                          />
                          <p className="text-bespokeBlack text-[12px] font-[400] whitespace-nowrap">
                            Delete Job
                          </p>
                        </div>
                        <div className="flex items-center px-2 py-1 gap-2 cursor-pointer hover:bg-[#FFFAF5]">
                          <Image
                            src={DuplicateIcon}
                            alt="add-icon"
                            className="w-4"
                          />
                          <p className="text-bespokeBlack text-[12px] font-[400] whitespace-nowrap">
                            Duplicate Job
                          </p>
                        </div>
                      </div>
                    </div>
                  </Popover.Panel>
                </>
              </Popover>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jobs;
