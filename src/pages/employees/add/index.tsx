import React, { Dispatch, SetStateAction, useState } from "react";
import AuthenticatedLayout from "../../../../views/components/Layout/AuthenticatedLayout";
import Image from "next/image";
import ArrowDown from "../../../../views/assets/images/arrow-down.svg";
import EntryModal from "../../../../views/components/AddEmployee/EntryModal";
import ImportCSV from "../../../../views/components/AddEmployee/ImportCSV";
import ManualAdditionStepOne from "../../../../views/components/AddEmployee/ManualAdditionStepOne";
import ManualAdditionStepTwo from "../../../../views/components/AddEmployee/ManualAdditionStepTwo";
import ManualAdditionStepThree from "../../../../views/components/AddEmployee/ManualAdditionStepThree";
import ManualAdditionStepFour from "../../../../views/components/AddEmployee/ManualAdditionStepFour";

export interface SetupStepPropsType {
  setSetupStep: Dispatch<SetStateAction<string>>;
  setupStep: any;
  details: any;
  setDetails: any;
  handleNewHire: any;
  employmentStatusOption?: any;
  setEmploymentStatusOption?: any;
}

const AddEmployee = () => {
  const [details, setDetails] = useState<any>({});
  const [setupStep, setSetupStep] = useState<any>("EntryModal");

  const handleNewHire = (state: boolean) => {
    setDetails((prevDetails: any) => ({
      ...prevDetails,
      newHire: state,
    }));
  };

  const [employmentStatusOption, setEmploymentStatusOption] = useState([
    {
      label: "Full Time",
      value: "FULL TIME",
    },
    {
      label: "Part - Time",
      value: "PART - TIME",
    },
    {
      label: "Contractor",
      value: "CONTRACTOR",
    },
    {
      label: "Furloughed",
      value: "FURLOUGHED",
    },
  ]);

  return (
    <AuthenticatedLayout>
      <div className="flex flex-col gap-8">
        <div className="flex items-center justify-between">
          <p className="text-[18px] font-[500] text-bespokeBlack">
            Add Employees
          </p>
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2 px-2 py-1 rounded-[4px] border-[0.5px] border-[#B9B9B9] cursor-pointer">
              <p className="text-[12px] font-[400] text-bespokeBlack">
                <span>01 July </span> - <span>31 July 24 </span>
              </p>
              <Image src={ArrowDown} alt="arrow-down" />
            </div>
            <div className="flex items-center gap-2 px-2 py-1 rounded-[4px] border-[0.5px] border-[#B9B9B9] cursor-pointer">
              <p className="text-[12px] font-[400] text-bespokeBlack">Filter</p>
              <Image src={ArrowDown} alt="arrow-down" />
            </div>
            <div className="flex items-center gap-2 px-2 py-1 rounded-[4px] bg-bespokeDeepPurple cursor-pointer">
              <p className="text-[12px] font-[400] text-bespokeWhite">
                Export CSV
              </p>
            </div>
          </div>
        </div>
        {setupStep === "EntryModal" && (
          <EntryModal
            setupStep={setupStep}
            details={details}
            setDetails={setDetails}
            setSetupStep={setSetupStep}
            handleNewHire={handleNewHire}
          />
        )}
        {setupStep === "ImportCSV" && (
          <ImportCSV
            setupStep={setupStep}
            details={details}
            setDetails={setDetails}
            setSetupStep={setSetupStep}
            handleNewHire={handleNewHire}
          />
        )}
        {setupStep === "ManualAdditionStepOne" && (
          <ManualAdditionStepOne
            setupStep={setupStep}
            details={details}
            setDetails={setDetails}
            setSetupStep={setSetupStep}
            handleNewHire={handleNewHire}
          />
        )}
        {setupStep === "ManualAdditionStepTwo" && (
          <ManualAdditionStepTwo
            setupStep={setupStep}
            details={details}
            setDetails={setDetails}
            employmentStatusOption={employmentStatusOption}
            setEmploymentStatusOption={setEmploymentStatusOption}
            setSetupStep={setSetupStep}
            handleNewHire={handleNewHire}
          />
        )}
        {setupStep === "ManualAdditionStepThree" && (
          <ManualAdditionStepThree
            setupStep={setupStep}
            details={details}
            setDetails={setDetails}
            setSetupStep={setSetupStep}
            handleNewHire={handleNewHire}
          />
        )}
        {setupStep === "ManualAdditionStepFour" && (
          <ManualAdditionStepFour
            setupStep={setupStep}
            details={details}
            setDetails={setDetails}
            setSetupStep={setSetupStep}
            handleNewHire={handleNewHire}
          />
        )}
      </div>
    </AuthenticatedLayout>
  );
};

export default AddEmployee;
