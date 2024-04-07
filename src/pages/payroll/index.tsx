import React, { useState } from "react";
import AuthenticatedLayout from "../../../views/components/Layout/AuthenticatedLayout";
import Image from "next/image";
import { payroll } from "../../../views/helpers/data/Payroll";
import ArrowDown from "../../../views/assets/images/arrow-down.svg";
import EmptyView from "../../../views/components/EmptyView/EmptyView";
import AddEmployee from "../../../views/assets/images/add-employee-icon.svg";
import { useRouter } from "next/router";
import { ROUTES } from "../../../views/helpers/routes";

const Payroll = () => {
  const [selectAllItem, setSelectAllItem] = useState(false);
  const [selectedItems, setSelectedItems] = useState<any>([]);

  const router = useRouter();

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

  const handleClick = () => {
    router.push(ROUTES.ADD_PAYROLL);
  };

  return (
    <AuthenticatedLayout>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col lg:flex-row gap-4 lg:items-center justify-between">
          <p className="text-[16px] lg:text-[18px] font-[500] text-bespokeBlack">Payroll</p>
          <div className="grid grid-cols-3 lg:flex items-center gap-5">
            <div className="col-span-3 flex items-center justify-between gap-2 px-2 py-1 rounded-[4px] border-[0.5px] border-[#B9B9B9] cursor-pointer">
              <p className="text-[12px] font-[400] text-bespokeBlack">
                <span>01 July </span> - <span>31 July 24 </span>
              </p>
              <Image src={ArrowDown} alt="arrow-down" />
            </div>
            <div className="flex items-center justify-between gap-2 px-2 py-1 rounded-[4px] border-[0.5px] border-[#B9B9B9] cursor-pointer">
              <p className="text-[12px] font-[400] text-bespokeBlack">Filter</p>
              <Image src={ArrowDown} alt="arrow-down" />
            </div>
            <div
              className="flex items-center justify-center gap-2 px-2 py-1 rounded-[4px] border-[0.5px] border-[#B9B9B9] cursor-pointer"
              onClick={handleClick}
            >
              <p className="text-[12px] font-[400] text-bespokeBlack">
                Create Payroll
              </p>
            </div>
            <div className="flex items-center justify-center gap-2 px-2 py-1 rounded-[4px] bg-bespokeDeepPurple cursor-pointer">
              <p className="text-[12px] font-[400] text-bespokeWhite">
                Export CSV
              </p>
            </div>
          </div>
        </div>

        {payroll.length < 1 ? (
          <EmptyView
            buttonAction={handleClick}
            buttonText="Create payroll"
            description="Lorem ipsum dolor sit amet consectetur."
            emptyIcon={AddEmployee}
            title="Create Payroll"
          />
        ) : (
          <div className="flex flex-col rounded-[8px_8px_0px_0px] overflow-scroll ">
            <div className="flex w-[250%] lg:w-[100%] rounded-[8px_8px_0px_0px] overflow-hidden bg-[#F0F0F0] border-[0.5px] border-[#B9B9B950]">
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
                Employee name
              </p>
              <p className="px-3 py-2 w-[15%] font-[500] text-[12px] leading-[24px] whitespace-nowrap text-[#212529] ">
                Payday
              </p>
              <p className="px-3 py-2 w-[15%] font-[500] text-[12px] leading-[24px] whitespace-nowrap text-[#212529] ">
                Currency
              </p>
              <p className="px-3 py-2 w-[15%] font-[500] text-[12px] leading-[24px] whitespace-nowrap text-[#212529] ">
                Payment amount
              </p>
              <p className="px-3 py-2 w-[15%] font-[500] text-[12px] leading-[24px] whitespace-nowrap text-[#212529] ">
                Employment type
              </p>
              <p className="px-3 py-2 w-[15%] font-[500] text-[12px] leading-[24px] whitespace-nowrap text-[#212529] ">
                Status
              </p>
            </div>
            {payroll?.map((detail: any, index: any) => (
              <div
                key={index}
                className="flex w-[250%] lg:w-[100%] overflow-hidden items-center border-[0.5px] border-b-[#B9B9B950] hover:bg-[#FFFAF5] cursor-pointer "
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
                    {detail?.name}
                  </p>
                </div>
                <div className="px-3 py-2 w-[15%] font-[400] text-[14px] leading-[24px] whitespace-nowrap text-[#212529] ">
                  <p className="font-[400] text-[12px] leading-[16px] whitespace-nowrap text-[#212529]">
                    {detail?.payday}
                  </p>
                </div>
                <div className="px-3 py-2 w-[15%] font-[400] text-[14px] leading-[24px] whitespace-nowrap text-[#212529] ">
                  <p className="font-[400] text-[12px] leading-[16px] whitespace-nowrap text-[#212529]">
                    {detail?.currency}
                  </p>
                </div>
                <div className="px-3 py-2 w-[15%] font-[400] text-[14px] leading-[24px] whitespace-nowrap text-[#212529] ">
                  <p className="font-[400] text-[12px] leading-[16px] whitespace-nowrap text-[#212529]">
                    {detail?.amount}
                  </p>
                </div>
                <div className="px-3 py-2 w-[15%] font-[400] text-[14px] leading-[24px] whitespace-nowrap text-[#212529] ">
                  <p className="font-[400] text-[12px] leading-[16px] whitespace-nowrap text-[#212529]">
                    {detail?.employmentType}
                  </p>
                </div>
                <div className="px-3 py-2 w-[15%] font-[400] text-[14px] leading-[24px] whitespace-nowrap text-[#212529] ">
                  <p
                    className={`font-[400] text-[12px] leading-[16px] whitespace-nowrap text-[#212529] px-1 py-1 rounded-[4px] w-fit ${
                      detail?.status === "Successful"
                        ? "bg-[#E6FFF3B2] text-[#069952]"
                        : detail?.status === "Failed"
                        ? "bg-[#FFE6E6] text-[#CC0000]"
                        : "bg-[#FFFAF5] text-[#684212]"
                    }`}
                  >
                    {detail?.status}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </AuthenticatedLayout>
  );
};

export default Payroll;
