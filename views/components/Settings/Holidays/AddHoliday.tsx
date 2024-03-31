import React, { Dispatch, SetStateAction, useState } from "react";
import Image from "next/image";
import CloseIcon from "../../../assets/images/close-icon.svg";
import { ModalContainer } from "../../Modal/ModalContainer";
import CustomInputField from "../../CustomHTMLElements/CustomInputField";
import { OutlineButton, PrimaryButton } from "../../Button/Button";

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
      <div className="flex flex-col rounded-[24px] overflow-hidden relative z-[100] w-[500px] ">
        <div className="p-6 flex items-center justify-between bg-[#F0F0F0]">
          <p className="text-[#1E1E1E] text-[18px] lg:leading-[19px] font-[500]">
            Add Holiday
          </p>
          <Image
            src={CloseIcon}
            alt="close-icon"
            onClick={() => closeModal(!showModal)}
            className="cursor-pointer"
          />
        </div>
        <div className="p-6 flex flex-col gap-[32px] bg-bespokeWhite ">
          <CustomInputField
            type="text"
            label=" "
            name="name"
            onChange={(e: any) => handleInputChange(e)}
            required
            extraLabel="Name"
            style="bg-transparent"
          />
          <CustomInputField
            type="date"
            label=" "
            name="date"
            onChange={(e: any) => handleInputChange(e)}
            required
            extraLabel="Date"
            style="bg-transparent"
          />
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
      </div>
    </ModalContainer>
  );
};

export default AddHoliday;
