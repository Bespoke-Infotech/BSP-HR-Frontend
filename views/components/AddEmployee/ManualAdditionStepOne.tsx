import React, { useState } from "react";
import CustomInputField from "../CustomHTMLElements/CustomInputField";
import CustomSelect from "../CustomHTMLElements/CustomSelect";
import { useForm } from "react-hook-form";
import { PrimaryButton } from "../Button/Button";
import { SetupStepPropsType } from "@/pages/employees/add";

const ManualAdditionStepOne = ({
  details,
  setupStep,
  setDetails,
  setSetupStep,
  handleNewHire,
}: SetupStepPropsType) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    control,
  } = useForm();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };

  const handleChange = (target: any, name: any) => {
    setDetails({ ...details, [name]: target?.value });
  };

  const employmentStatusOption = [
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
  ];

  return (
    <div className="flex flex-col gap-[24px]  ">
      <div className="w-full border-[0.2px] border-b-[#B9B9B9] border-x-transparent border-t-transparent flex gap-6 py-1 ">
        <div className="flex items-center gap-1 cursor-pointer">
          <div className="h-3 w-3 flex justify-center items-center rounded-[50%] bg-[#FDE0BD] ">
            <div className="h-[6px] w-[6px] flex justify-center items-center rounded-[50%] bg-bespokeOrange " />
          </div>
          <p className="text-[#686868] text-[12px] font-[300] ">
            Existing employee
          </p>
        </div>
        <div
          className="flex items-center gap-1 cursor-pointer"
          onClick={() => handleNewHire(details?.newHire ? false : true)}
        >
          <div className="h-3 w-3 flex justify-center items-center rounded-[50%] bg-[#FDE0BD] ">
            {details?.newHire && (
              <div className="h-[6px] w-[6px] flex justify-center items-center rounded-[50%] bg-bespokeOrange " />
            )}
          </div>
          <p className="text-[#686868] text-[12px] font-[300] ">New Hire</p>
        </div>
      </div>

      <div className="flex items-center gap-[38px]">
        <div
          className="flex items-center gap-1 cursor-pointer "
          onClick={() => setSetupStep("ManualAdditionStepOne")}
        >
          <div className="h-8 w-8 flex justify-center items-center rounded-[50%] bg-[#FDE0BD] ">
            <div className="h-5 w-5 flex justify-center items-center rounded-[50%] bg-bespokeOrange ">
              <span className="text-[14px] text-bespokeWhite font-[400] ">
                1
              </span>
            </div>
          </div>
          <p className="text-[#686868] text-[12px] font-[300] ">Personal</p>
        </div>
        <div
          className="flex items-center gap-1 cursor-pointer opacity-60 "
          onClick={
            details?.find &&
            details?.surname &&
            details?.email &&
            details?.hireDate &&
            details?.employmentStatus &&
            details?.manager &&
            (() => setSetupStep("ManualAdditionStepTwo"))
          }
        >
          <div className="h-8 w-8 flex justify-center items-center rounded-[50%] bg-[#FDE0BD] ">
            <div className="h-5 w-5 flex justify-center items-center rounded-[50%] bg-bespokeOrange ">
              <span className="text-[14px] text-bespokeWhite font-[400] ">
                2
              </span>
            </div>
          </div>
          <p className="text-[#686868] text-[12px] font-[300] ">Job</p>
        </div>
        <div
          className="flex items-center gap-1 cursor-pointer opacity-60 "
          onClick={
            details?.jobTitle &&
            details?.location &&
            details?.division &&
            details?.department &&
            (() => setSetupStep("ManualAdditionStepThree"))
          }
        >
          <div className="h-8 w-8 flex justify-center items-center rounded-[50%] bg-[#FDE0BD] ">
            <div className="h-5 w-5 flex justify-center items-center rounded-[50%] bg-bespokeOrange ">
              <span className="text-[14px] text-bespokeWhite font-[400] ">
                3
              </span>
            </div>
          </div>
          <p className="text-[#686868] text-[12px] font-[300] ">Compensation</p>
        </div>
        {details?.newHire && (
          <div
            className="flex items-center gap-1 cursor-pointer opacity-60 "
            onClick={
              details?.payRate &&
              details?.payRatePeriod &&
              details?.schedule &&
              details?.overtimeStatus &&
              (() => setSetupStep("ManualAdditionStepFour"))
            }
          >
            <div className="h-8 w-8 flex justify-center items-center rounded-[50%] bg-[#FDE0BD] ">
              <div className="h-5 w-5 flex justify-center items-center rounded-[50%] bg-bespokeOrange ">
                <span className="text-[14px] text-bespokeWhite font-[400] ">
                  4
                </span>
              </div>
            </div>
            <p className="text-[#686868] text-[12px] font-[300] ">
              Contact on the first day
            </p>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-4">
        <p className="text-bespokeBlack text-[16px] font-[500] ">Personal</p>
        <form className="flex flex-col gap-8">
          <div className="grid grid-cols-3 gap-8 gap-y-4 w-[820px]">
            <CustomInputField
              type="text"
              label=" "
              name="find"
              onChange={(e: any) => handleInputChange(e)}
              required
              extraLabel="Find *"
              style="bg-transparent"
              defaultValue={details?.find ? details?.find : ""}
            />
            <CustomInputField
              type="text"
              label=" "
              name="surname"
              onChange={(e: any) => handleInputChange(e)}
              required
              extraLabel="Surname *"
              style="bg-transparent"
              defaultValue={details?.surname ? details?.surname : ""}
            />
            <CustomInputField
              type="text"
              label=" "
              name="email"
              onChange={(e: any) => handleInputChange(e)}
              required
              extraLabel="Email *"
              style="bg-transparent"
              defaultValue={details?.email ? details?.email : ""}
            />
            <CustomInputField
              type="date"
              label=" "
              name="hireDate"
              onChange={(e: any) => handleInputChange(e)}
              required
              extraLabel="Hire Date *"
              style="bg-transparent"
              defaultValue={details?.hireDate ? details?.hireDate : ""}
            />
            <CustomSelect
              placeholder=" "
              extraLabel="Employment status *"
              options={employmentStatusOption}
              control={control}
              name="employmentStatus"
              defaultValue={details?.employmentStatus}
              handleChange={(e, a) => handleChange(e, a)}
            />
            <CustomSelect
              placeholder=" "
              extraLabel="Manager *"
              options={employmentStatusOption}
              control={control}
              name="manager"
              defaultValue={details?.manager}
              handleChange={(e, a) => handleChange(e, a)}
              // className="flex-[1]"
            />
          </div>
        </form>
        <PrimaryButton
          title="Save and continue"
          onClick={() => setSetupStep("ManualAdditionStepTwo")}
          className="text-[14px] w-fit pt-1 pb-1 pr-3 pl-3 font-[400] whitespace-nowrap"
          disabled={
            !(
              details?.find &&
              details?.surname &&
              details?.email &&
              details?.hireDate &&
              details?.employmentStatus &&
              details?.manager
            )
          }
        />
      </div>
    </div>
  );
};

export default ManualAdditionStepOne;
