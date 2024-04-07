import React, { useState } from "react";
import Image from "next/image";
import EditIcon from "../../../../views/assets/images/edit-icon.svg";
import DeleteIcon from "../../../../views/assets/images/delete-icon.svg";
import AuthenticatedLayout from "../../../../views/components/Layout/AuthenticatedLayout";
import { employees } from "../../../../views/helpers/data/Employees";
import AddCategory from "./AddCategory";

const InventoryAsset = () => {
  const [selectAllItem, setSelectAllItem] = useState(false);
  const [selectedItems, setSelectedItems] = useState<any>([]);
  const [categoryPopup, setCategoryPopup] = useState(false);

  const handleClick = () => {
    setCategoryPopup(true);
  };

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
    <>
      <AuthenticatedLayout>
        <div className="flex flex-col gap-6 lg:gap-8">
          <div className="flex items-center justify-between">
            <p className="text-[16px] lg:text-[18px] font-[500] text-bespokeBlack">
              Inventory
            </p>
            <div className="flex items-center gap-5">
              <div
                className="flex items-center gap-2 px-2 py-1 rounded-[4px] bg-bespokeDeepPurple cursor-pointer"
                onClick={handleClick}
              >
                <p className="text-[12px] font-[400] text-bespokeWhite">
                  Add Category
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col rounded-[8px_8px_0px_0px] overflow-scroll ">
            <div className="flex w-[150%] lg:w-[100%] rounded-[8px_8px_0px_0px] overflow-hidden bg-[#F0F0F0] border-[0.5px] border-[#B9B9B950]">
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
              <p className="px-3 py-2 w-[85%] font-[500] text-[12px] leading-[24px] whitespace-nowrap text-[#212529] ">
                Category name
              </p>
              <div className="w"></div>
            </div>
            {employees?.map((detail: any, index: any) => (
              <form
                key={index}
                className="flex w-[150%] lg:w-[100%] overflow-hidden items-center border-[0.5px] border-b-[#B9B9B950] hover:bg-[#FFFAF5] cursor-pointer "
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
                <div className="px-3 py-2 w-[85%] font-[400] text-[14px] leading-[24px] whitespace-nowrap text-[#212529] ">
                  <p className="font-[400] text-[12px] leading-[16px] whitespace-nowrap text-[#212529]">
                    {detail?.name}
                  </p>
                </div>
                <div className="px-3 py-2 w-[40%] lg:w-[5%] font-[400] text-[14px] leading-[24px] whitespace-nowrap text-[#212529] flex  gap-[12px] items-center ">
                  <div className="flex items-center gap-2">
                    <p className="text-bespokeBlack text-[12px]">Active</p>
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        value=""
                        className="sr-only peer"
                      />
                      <div className="relative h-[11.2px] w-4 peer-focus:outline-none bg-gray-700 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[1px] after:bg-white after:rounded-full after:h-[7px] after:w-[7px] after:transition-all peer-checked:bg-[#219653]"></div>
                    </label>
                  </div>
                  <Image
                    src={EditIcon}
                    alt="edit-icon"
                    onClick={() => console.log("first")}
                  />
                  <Image
                    src={DeleteIcon}
                    alt="delete-icon"
                    onClick={() => console.log("first")}
                  />
                </div>
              </form>
            ))}
          </div>
        </div>
      </AuthenticatedLayout>
      {categoryPopup && (
        <AddCategory closeModal={setCategoryPopup} showModal={categoryPopup} />
      )}
    </>
  );
};

export default InventoryAsset;
