import React, { Dispatch, SetStateAction, useState } from "react";
import Image from "next/image";
import CloseIcon from "../../../assets/images/close-icon.svg";
import { ModalContainer } from "../../Modal/ModalContainer";
import CustomInputField from "../../CustomHTMLElements/CustomInputField";
import { OutlineButton, PrimaryButton } from "../../Button/Button";

const AddLocation = ({
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
            Add Location
          </p>
          <Image
            src={CloseIcon}
            alt="close-icon"
            onClick={() => closeModal(!showModal)}
            className="cursor-pointer"
          />
        </div>
        <div className="p-6 flex flex-col gap-[32px] bg-bespokeWhite ">
          <div className="grid grid-cols-2 gap-[40px]">
            <CustomInputField
              type="text"
              label=" "
              name="name"
              onChange={(e: any) => handleInputChange(e)}
              required
              extraLabel="Name"
              style="bg-transparent"
            />
            <label
              htmlFor="remote-check"
              className="flex flex-col gap-4 items-start w-fit"
            >
              <p className="text-[14px] font-[400] ">Remote</p>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="remote-check" className="accent-bespokeOrange " />
                <p className="text-[12px] font-[400] text-[#686868] ">Yes</p>
              </div>
            </label>
          </div>
          <CustomInputField
            type="text"
            label=" "
            name="address"
            onChange={(e: any) => handleInputChange(e)}
            required
            extraLabel="Address"
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

export default AddLocation;
