import React, { Dispatch, SetStateAction, useState } from "react";
import Image from "next/image";
import CloseIcon from "../../../assets/images/close-icon.svg";
import { ModalContainer } from "../../Modal/ModalContainer";
import CustomInputField from "../../CustomHTMLElements/CustomInputField";
import { OutlineButton, PrimaryButton } from "../../Button/Button";
import VacationIcon from "../../../assets/images/vacation-icon.svg";
import SickLeaveIcon from "../../../assets/images/sick-leave-icon.svg";
import MaternityLeaveIcon from "../../../assets/images/maternity-leave-icon.svg";
import BerievedIcon from "../../../assets/images/berieved-icon.svg";

const AddHoliday = ({
  showModal,
  closeModal,
  data,
}: {
  showModal: boolean;
  closeModal: Dispatch<SetStateAction<boolean>>;
  data?: any;
}): JSX.Element => {
  const [details, setDetails] = useState<any>();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };

  const handleSave = () => {
    data?.field((prevDetails: any) => [
      ...prevDetails,
      {
        label: details?.name,
        value: details?.name,
      },
    ]);
    closeModal(!showModal);
  };

  return (
    <ModalContainer showModal={showModal} closeModal={closeModal}>
      <div
        className={`w-full lg:w-[541px] relative right-0 h-auto min-h-[30vh] max-h-[90vh] z-[100] flex flex-col rounded-[24px] bg-bespokeWhite overflow-auto`}
      >
        <div className="p-6 flex items-center justify-between bg-[#F0F0F0] sticky top-0">
          <p className="text-[#1E1E1E] text-[18px] lg:leading-[19px] font-[500]">
            Add Time Off
          </p>
          <Image
            src={CloseIcon}
            alt="close-icon"
            onClick={() => closeModal(!showModal)}
            className="cursor-pointer"
          />
        </div>
        <div className="grid grid-cols-2 gap-6 gap-x-3 bg-bespokeWhite px-6 py-8">
          <div className="flex items-center gap-6 p-4 border-[0.5px] border-[#F0F0F0] rounded-[8px] cursor-pointer ">
            <Image src={VacationIcon} alt="vacation-icon" />
            <p className="text-bespokeBlack text-[14px] whitespace-nowrap font-[500]">Vacation</p>
          </div>
          <div className="flex items-center gap-6 p-4 border-[0.5px] border-[#F0F0F0] rounded-[8px] cursor-pointer ">
            <Image src={SickLeaveIcon} alt="vacation-icon" />
            <p className="text-bespokeBlack text-[14px] whitespace-nowrap font-[500]">
              Sick Leave
            </p>
          </div>
          <div className="flex items-center gap-6 p-4 border-[0.5px] border-[#F0F0F0] rounded-[8px] cursor-pointer ">
            <Image src={MaternityLeaveIcon} alt="vacation-icon" />
            <p className="text-bespokeBlack text-[14px] whitespace-nowrap font-[500]">
              Maternity Leave
            </p>
          </div>
          <div className="flex items-center gap-6 p-4 border-[0.5px] border-[#F0F0F0] rounded-[8px] cursor-pointer ">
            <Image src={BerievedIcon} alt="vacation-icon" />
            <p className="text-bespokeBlack text-[14px] whitespace-nowrap font-[500]">Berieved</p>
          </div>
        </div>
        <div className="p-6 flex flex-col gap-[32px] bg-bespokeWhite ">
          <CustomInputField
            type="text"
            label=" "
            name="employeeName"
            onChange={(e: any) => handleInputChange(e)}
            required
            extraLabel="Employee name *"
            style="bg-transparent"
          />
          <CustomInputField
            type="date"
            label=" "
            name="period"
            onChange={(e: any) => handleInputChange(e)}
            required
            extraLabel="Period *"
            style="bg-transparent"
          />
          <CustomInputField
            type="text"
            label=" "
            name="note"
            onChange={(e: any) => handleInputChange(e)}
            required
            extraLabel="Note"
            style="bg-transparent"
          />
          <label htmlFor="paid-check" className="flex items-center gap-2 w-fit">
            <input
              type="checkbox"
              id="paid-check"
              className="accent-bespokeOrange text-bespokeWhite bg-bespokeWhite "
            />
            <p className="text-[12px] font-[400] text-[#686868] ">Paid</p>
          </label>
          <div className="flex justify-between items-center">
            <PrimaryButton
              title="Save"
              onClick={handleSave}
              className="text-[14px] w-fit pt-1 pb-1 font-[400] whitespace-nowrap"
              disabled={!details?.name || !details?.date}
            />
            <OutlineButton
              title="Cancel"
              onClick={() => closeModal(!showModal)}
              className="text-[14px] w-fit pt-1 pb-1 font-[400]"
            />
          </div>
        </div>
        {/* </div> */}
      </div>
    </ModalContainer>
  );
};

export default AddHoliday;
