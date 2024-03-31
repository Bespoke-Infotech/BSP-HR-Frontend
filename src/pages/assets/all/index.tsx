import React, { useState } from "react";
import Image from "next/image";
import AuthenticatedLayout from "../../../../views/components/Layout/AuthenticatedLayout";
import { employees } from "../../../../views/helpers/data/Employees";
import { useRouter } from "next/router";
import { ROUTES } from "../../../../views/helpers/routes";

const AllAssets = () => {
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

  const router = useRouter();

  const handleClick = () => {
    router.push(ROUTES.ADD_ASSETS);
  };

  return (
    <AuthenticatedLayout>
      <div className="flex flex-col gap-8">
        <div className="flex items-center justify-between">
          <p className="text-[18px] font-[500] text-bespokeBlack">Assets</p>
          <div className="flex items-center gap-5">
            <div
              className="flex items-center gap-2 px-2 py-1 rounded-[4px] bg-bespokeDeepPurple cursor-pointer"
              onClick={handleClick}
            >
              <p className="text-[12px] font-[400] text-bespokeWhite">
                Add asset
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
            <p className="px-3 py-2 w-[35%] font-[500] text-[12px] leading-[24px] whitespace-nowrap text-[#212529] ">
              Asset name
            </p>
            <p className="px-3 py-2 w-[15%] font-[500] text-[12px] leading-[24px] whitespace-nowrap text-[#212529] ">
              Category
            </p>
            <p className="px-3 py-2 w-[15%] font-[500] text-[12px] leading-[24px] whitespace-nowrap text-[#212529] ">
              Serial number
            </p>
            <p className="px-3 py-2 w-[10%] font-[500] text-[12px] leading-[24px] whitespace-nowrap text-[#212529] ">
              Used by
            </p>
            <p className="px-3 py-2 w-[10%] font-[500] text-[12px] leading-[24px] whitespace-nowrap text-[#212529] ">
              Location
            </p>
          </div>
          {employees?.map((detail: any, index: any) => (
            <div
              key={index}
              className="flex w-[100%] overflow-hidden items-center border-[0.5px] border-b-[#B9B9B950] hover:bg-[#FFFAF5] cursor-pointer "
              onClick={() => router.push(`all/${index}`)}
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
              <div className="px-3 py-2 w-[35%] font-[400] text-[14px] leading-[24px] whitespace-nowrap text-[#212529] ">
                <p className="font-[400] text-[12px] leading-[16px] whitespace-nowrap text-[#212529]">
                  {detail?.name}
                </p>
              </div>
              <div className="px-3 py-2 w-[15%] font-[400] text-[14px] leading-[24px] whitespace-nowrap text-[#212529] ">
                <p className="font-[400] text-[12px] leading-[16px] whitespace-nowrap text-[#212529]">
                  {detail?.jobTitle}
                </p>
              </div>
              <div className="px-3 py-2 w-[15%] font-[400] text-[14px] leading-[24px] whitespace-nowrap text-[#212529] ">
                <p className="font-[400] text-[12px] leading-[16px] whitespace-nowrap text-[#212529]">
                  {detail?.department}
                </p>
              </div>
              <div className="px-3 py-2 w-[10%] font-[400] text-[14px] leading-[24px] whitespace-nowrap text-[#212529] ">
                <p className="font-[400] text-[12px] leading-[16px] whitespace-nowrap text-[#212529]">
                  {detail?.division}
                </p>
              </div>
              <div className="px-3 py-2 w-[10%] font-[400] text-[14px] leading-[24px] whitespace-nowrap text-[#212529] ">
                <p className="font-[400] text-[12px] leading-[16px] whitespace-nowrap text-[#212529]">
                  {detail?.type}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AuthenticatedLayout>
  );
};

export default AllAssets;
