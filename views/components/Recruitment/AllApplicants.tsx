import Image from "next/image";
import React, { useState } from "react";
import { applicants } from "../../helpers/data/Applicants";

const AllApplicants = () => {
  const [selectAllItem, setSelectAllItem] = useState(false);
  const [selectedItems, setSelectedItems] = useState<any>([]);

  const handleCheckboxChange = (index: any) => {
    // Check if the item is already selected
    const isSelected = selectedItems?.includes(index);

    if (isSelected) {
      // If selected, remove from the list
      setSelectedItems((prevSelected: any) =>
        prevSelected.filter((item: any) => item !== index)
      );
    } else {
      // If not selected, add to the list
      setSelectedItems((prevSelected: any) => [...prevSelected, index]);
    }
    // setSelectAllItem(false);
  };

  const handleSelectAllChange = () => {
    // Toggle the selectAllItem state
    setSelectAllItem((prevSelectAll) => !prevSelectAll);
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <p className="text-[18px] font-[500] text-bespokeBlack">
          All Applicants
        </p>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2 px-2 py-1 rounded-[4px] bg-bespokeDeepPurple cursor-pointer">
            <p className="text-[12px] font-[400] text-bespokeWhite">
              Export CSV
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col rounded-[8px_8px_0px_0px] overflow-hidden ">
        <div className="flex w-[100%] rounded-[8px_8px_0px_0px] overflow-hidden bg-[#F0F0F0] border-[0.5px] border-[#B9B9B950]">
          <div className="px-3 py-2 w-[3%] relative flex items-center justify-center ">
            <label
              htmlFor="bordered-checkbox"
              className="absolute top-[50%] translate-y-[-40%] right-[50%] translate-x-[50%] "
            >
              <input
                id="bordered-checkbox"
                type="checkbox"
                value=""
                name="DeleteAllChecker"
                className="custom-checkbox"
                // onChange={(e: any) => handleInputChange(e)}
                checked={selectAllItem}
                onChange={handleSelectAllChange}
              />
              {selectAllItem && (
                <Image
                  src=""
                  alt="Checkmark"
                  className="w-4 h-4 absolute top-0 left-0"
                />
              )}
            </label>
          </div>
          <p className="px-3 py-2 w-[20%] font-[500] text-[12px] leading-[24px] whitespace-nowrap text-[#212529] ">
            First name
          </p>
          <p className="px-3 py-2 w-[15%] font-[500] text-[12px] leading-[24px] whitespace-nowrap text-[#212529] ">
            Last name
          </p>
          <p className="px-3 py-2 w-[15%] font-[500] text-[12px] leading-[24px] whitespace-nowrap text-[#212529] ">
            Phone number
          </p>
          <p className="px-3 py-2 w-[10%] font-[500] text-[12px] leading-[24px] whitespace-nowrap text-[#212529] ">
            email
          </p>
        </div>
        {applicants?.map((applicant: any, index: any) => (
          <form
            key={index}
            className="flex w-[100%] overflow-hidden items-center border-[0.5px] border-b-[#B9B9B950] hover:bg-[#FFFAF5] cursor-pointer "
          >
            <div className="px-3 py-2 w-[3%] relative ">
              <label
                htmlFor={`bordered-checkbox-${index}`}
                className="absolute top-[50%] translate-y-[-40%] right-[50%] translate-x-[50%] "
              >
                <input
                  id={`bordered-checkbox-${index}`}
                  type="checkbox"
                  value=""
                  name="DeleteChecker"
                  className="custom-checkbox"
                  onChange={() => handleCheckboxChange(index)}
                  checked={selectedItems?.includes(index)}
                />
                {selectedItems?.includes(index) && (
                  <Image
                    src=""
                    alt="Checkmark"
                    className="w-4 h-4 absolute top-0 left-0"
                  />
                )}
              </label>
            </div>
            <div className="px-3 py-2 w-[20%] font-[400] text-[14px] leading-[24px] whitespace-nowrap text-[#212529] ">
              <p className="font-[400] text-[12px] leading-[16px] whitespace-nowrap text-[#212529]">
                {applicant?.firstName}
              </p>
            </div>
            <div className="px-3 py-2 w-[15%] font-[400] text-[14px] leading-[24px] whitespace-nowrap text-[#212529] ">
              <p className="font-[400] text-[12px] leading-[16px] whitespace-nowrap text-[#212529]">
                {applicant?.lastName}
              </p>
            </div>
            <div className="px-3 py-2 w-[15%] font-[400] text-[14px] leading-[24px] whitespace-nowrap text-[#212529] ">
              <p className="font-[400] text-[12px] leading-[16px] whitespace-nowrap text-[#212529]">
                {applicant?.phoneNumber}
              </p>
            </div>
            <div className="px-3 py-2 w-[10%] font-[400] text-[14px] leading-[24px] whitespace-nowrap text-[#212529] ">
              <p className="font-[400] text-[12px] leading-[16px] whitespace-nowrap text-[#212529]">
                {applicant?.email}
              </p>
            </div>
          </form>
        ))}
      </div>
    </div>
  );
};

export default AllApplicants;
