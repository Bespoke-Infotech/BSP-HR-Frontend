import Image from "next/image";
import React from "react";
import { OutlineButton, PrimaryButton } from "../Button/Button";
import AddEmployee from "../../assets/images/add-employee-icon.svg";
import { SetupStepPropsType } from "../../../src/pages/employees/add";

const EntryModal = ({
  details,
  setupStep,
  setDetails,
  setSetupStep,
  handleNewHire,
}: SetupStepPropsType) => {
  return (
    <div className="w-full py-[80px] border-[0.5px] border-[#B9B9B9] rounded-[16px] flex flex-col gap-[16px] justify-center items-center">
      <Image src={AddEmployee} alt="add-employee" />
      <div className="flex flex-col gap-2 items-center">
        <p className="text-[16px] font-[500] text-bespokeBlack whitespace-nowrap ">
          Add Employee
        </p>
        <p className="text-[14px] font-[500] text-[#686868] whitespace-nowrap ">
          Lorem ipsum dolor sit amet consectetur.
        </p>
      </div>
      <div className="flex items-center gap-4 mt-2">
        <PrimaryButton
          title="Add new employee"
          onClick={() => setSetupStep("ManualAdditionStepOne")}
          className="text-[14px] w-full pt-1 pb-1 font-[400] whitespace-nowrap"
          //   disabled={!details.email || !details.password}
        />
        <OutlineButton
          title="Import CSV"
          onClick={() => setSetupStep("ImportCSV")}
          className="text-[14px] w-full pt-1 pb-1 font-[400]"
          //   disabled={!details.email || !details.password}
        />
      </div>
    </div>
  );
};

export default EntryModal;
