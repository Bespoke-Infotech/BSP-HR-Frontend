import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { useRouter } from "next/router";
import AuthenticatedLayout from "../../../../views/components/Layout/AuthenticatedLayout";
import CustomInputField from "../../../../views/components/CustomHTMLElements/CustomInputField";
import CustomSelect from "../../../../views/components/CustomHTMLElements/CustomSelect";
import {
  OutlineButton,
  PrimaryButton,
} from "../../../../views/components/Button/Button";

const CreatePayroll = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    control,
  } = useForm();

  const [details, setDetails] = useState<any>();
  const [otherPopup, setOtherPopup] = useState(false);
  const [popupDetails, setPopupDetails] = useState<any>();

  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };

  const handleChange = (target: any, name: any) => {
    setDetails({ ...details, [name]: target?.value });
  };

  const [employmentType, setEmploymentType] = useState([
    {
      label: "Full Time",
      value: "FULL TIME",
    },
    {
      label: "Part - Time",
      value: "PART - TIME",
    },
    {
      label: "Contract",
      value: "CONTRACT",
    },
    {
      label: "Remote",
      value: "REMOTE",
    },
  ]);

  const currency = [
    {
      label: "USD",
      value: "USD",
    },
    {
      label: "GBP",
      value: "GBP",
    },
    {
      label: "Euro",
      value: "EURO",
    },
  ];

  const handleOtherPopup = (name: string, field: any) => {
    setOtherPopup(true), setPopupDetails({ name, field });
  };

  return (
    <>
      <AuthenticatedLayout>
        <form className="flex flex-col gap-[24px]  ">
          <div className="flex flex-col gap-2">
            <p className="text-bespokeBlack text-[16px] font-[500] ">
              Create Payroll
            </p>
            {/* <div className="flex flex-col gap-8"> */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-[54px] gap-y-4 e-full lg:w-[820px]">
              <CustomSelect
                placeholder=" "
                extraLabel={
                  <div className="flex justify-between items-center">
                    <p className="text-[#1E1E1E] text-[13px] lg:leading-[16px] tracking-[0.03px] font-[400]">
                      Employee name *
                    </p>
                    <p
                      className="text-[#1E1E1E] text-[13px] lg:leading-[16px] tracking-[0.03px] font-[400] cursor-pointer"
                      onClick={() =>
                        handleOtherPopup("Add Category", setEmploymentType)
                      }
                    >
                      Add
                    </p>
                  </div>
                }
                options={employmentType}
                control={control}
                name="employeeName"
                defaultValue={details?.employeeName}
                handleChange={(e, a) => handleChange(e, a)}
              />
              <CustomSelect
                placeholder=" "
                extraLabel="Employment type *"
                options={employmentType}
                control={control}
                name="employmentType"
                defaultValue={details?.employmentType}
                handleChange={(e, a) => handleChange(e, a)}
              />
              <CustomSelect
                placeholder=" "
                extraLabel="Currency *"
                options={currency}
                control={control}
                name="currency"
                defaultValue={details?.currency}
                handleChange={(e, a) => handleChange(e, a)}
              />
              <CustomInputField
                type="text"
                label=" "
                name="amount"
                onChange={(e: any) => handleInputChange(e)}
                required
                extraLabel="Amount"
                style="bg-transparent"
                defaultValue={details?.amount ? details?.amount : ""}
              />
              <CustomInputField
                type="date"
                label=" "
                name="payday"
                onChange={(e: any) => handleInputChange(e)}
                required
                extraLabel="Payday"
                style="bg-transparent"
                defaultValue={details?.payday ? details?.payday : ""}
              />
            </div>
          </div>

          <div className="flex items-center gap-2 mt-2">
            <PrimaryButton
              title="Create"
              //   onClick={handleClick}
              className="text-[14px] w-fit pt-1 pb-1 font-[400] whitespace-nowrap"
              //   disabled={!details.email || !details.password}
            />
            <OutlineButton
              title="Discard"
              onClick={() => router.back()}
              className="text-[14px] w-fit pt-1 pb-1 font-[400]"
              //   disabled={!details.email || !details.password}
            />
          </div>
        </form>
      </AuthenticatedLayout>
      {/* {otherPopup && (
        <JobOtherPopup
          closeModal={setOtherPopup}
          data={popupDetails}
          showModal={otherPopup}
        />
      )} */}
    </>
  );
};

export default CreatePayroll;
