import React, { useEffect, useState } from "react";
import CustomInputField from "../CustomHTMLElements/CustomInputField";
import CustomSelect from "../CustomHTMLElements/CustomSelect";
import { useForm } from "react-hook-form";
import { OutlineButton, PrimaryButton } from "../Button/Button";
import { SetupStepPropsType } from "../../../src/pages/employees/add";
import CustomTextArea from "../CustomHTMLElements/CustomTextArea";

const ManualAdditionStepFour = ({
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

  // CHECK IF NEW-HIRE IS TRUE
  useEffect(() => {
    details?.newHire === false && setSetupStep("ManualAdditionStepThree");
  }, [details]);

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

      <div className="flex items-center gap-[38px] overflow-scroll">
        <div
          className="flex items-center gap-1 cursor-pointer opacity-60"
          onClick={() => setSetupStep("ManualAdditionStepOne")}
        >
          <div className="h-8 w-8 flex justify-center items-center rounded-[50%] bg-[#FDE0BD] ">
            <div className="h-5 w-5 flex justify-center items-center rounded-[50%] bg-bespokeOrange ">
              <span className="text-[14px] text-bespokeWhite font-[400] ">
                1
              </span>
            </div>
          </div>
          <p className="text-[#686868] text-[12px] font-[300] whitespace-nowrap ">Personal</p>
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
          <p className="text-[#686868] text-[12px] font-[300] whitespace-nowrap ">Job</p>
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
          <p className="text-[#686868] text-[12px] font-[300] whitespace-nowrap ">Compensation</p>
        </div>
        {details?.newHire && (
          <div
            className="flex items-center gap-1 cursor-pointer "
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
            <p className="text-[#686868] text-[12px] font-[300]  whitespace-nowrap ">
              Contact on the first day
            </p>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-4">
        <p className="text-bespokeBlack text-[16px] font-[500] whitespace-nowrap ">
          Contact on the first day
        </p>
        <form className="flex flex-col gap-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 gap-y-4 w-full lg:w-[820px]">
            <CustomInputField
              type="text"
              label=" "
              name="employee"
              onChange={(e: any) => handleInputChange(e)}
              required
              extraLabel="Employee *"
              style="bg-transparent"
              defaultValue={details?.employee ? details?.employee : ""}
            />

            <CustomInputField
              type="text"
              label=" "
              name="address"
              onChange={(e: any) => handleInputChange(e)}
              required
              extraLabel="Address *"
              style="bg-transparent"
              defaultValue={details?.address ? details?.address : ""}
            />

            <CustomInputField
              type="date"
              label=" "
              name="date"
              onChange={(e: any) => handleInputChange(e)}
              required
              extraLabel="Date *"
              style="bg-transparent"
              defaultValue={details?.date ? details?.date : ""}
            />
            <div className="lg:col-span-2">
              <CustomTextArea
                defaultValue={details.instruction}
                onChange={(e: any) => handleInputChange(e)}
                name="instruction"
                extraLabel="Instruction"
                style="resize-none placeholder:text-[#6F7174] border-[#C8CCD0] text-bespokeBlack text-[14px] bg-transparent w-full"
                placeholder=""
              />
            </div>
          </div>
        </form>
        <div className="flex items-center gap-2">
          <OutlineButton
            title="Back"
            onClick={() => setSetupStep("ManualAdditionStepThree")}
            className="text-[14px] w-fit pr-3 pl-3 pt-1 pb-1 font-[400]"
            //   disabled={!details.email || !details.password}
          />
          <PrimaryButton
            title={details?.newHire ? "Save and continue" : "Submit"}
            onClick={
              details?.newHire
                ? () => setSetupStep("ManualAdditionStepFour")
                : () => console.log("submit")
            }
            className="text-[14px] w-fit pr-3 pl-3 pt-1 pb-1 font-[400] whitespace-nowrap"
            disabled={
              !(
                details?.payRate &&
                details?.payRatePeriod &&
                details?.schedule &&
                details?.overtimeStatus
              )
            }
          />
        </div>
      </div>
    </div>
  );
};

export default ManualAdditionStepFour;
