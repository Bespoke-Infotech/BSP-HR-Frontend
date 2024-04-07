import React, { useState } from "react";
import { useForm } from "react-hook-form";
import AuthenticatedLayout from "../../../../../views/components/Layout/AuthenticatedLayout";
import CustomInputField from "../../../../../views/components/CustomHTMLElements/CustomInputField";
import {
  OutlineButton,
  PrimaryButton,
} from "../../../../../views/components/Button/Button";
import CustomSelect from "../../../../../views/components/CustomHTMLElements/CustomSelect";
import Image from "next/image";
import JobOtherPopup from "../../../../../views/components/AddEmployee/JobOtherPopup";
import BackButton from "../../../../../views/assets/images/back-icon.svg";
import { useRouter } from "next/router";

const AddAsset = () => {
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

  const handleOtherPopup = (name: string, field: any) => {
    setOtherPopup(true), setPopupDetails({ name, field });
  };

  return (
    <>
      <AuthenticatedLayout>
        <Image
          src={BackButton}
          alt="back-icon"
          className="mb-3 cursor-pointer"
          onClick={() => router.back()}
        />
        <form className="flex flex-col gap-[24px]  ">
          {/* <div className="w-full border-[0.2px] border-b-[#B9B9B9] border-x-transparent border-t-transparent flex gap-6 py-1 ">
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
        </div> */}

          <div className="flex flex-col gap-2">
            <p className="text-bespokeBlack text-[16px] font-[500] ">
              Basic information
            </p>
            {/* <div className="flex flex-col gap-8"> */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-[54px] gap-y-4 w-full lg:w-[820px]">
              <CustomInputField
                type="text"
                label=" "
                name="name"
                onChange={(e: any) => handleInputChange(e)}
                required
                extraLabel="Name *"
                style="bg-transparent"
                defaultValue={details?.name ? details?.name : ""}
              />
              <CustomSelect
                placeholder=" "
                extraLabel={
                  <div className="flex justify-between items-center">
                    <p className="text-[#1E1E1E] text-[13px] lg:leading-[16px] tracking-[0.03px] font-[400]">
                      Category *
                    </p>
                    <p
                      className="text-[#1E1E1E] text-[13px] lg:leading-[16px] tracking-[0.03px] font-[400] cursor-pointer"
                      onClick={() =>
                        handleOtherPopup(
                          "Add Category",
                          setEmploymentStatusOption
                        )
                      }
                    >
                      + Add
                    </p>
                  </div>
                }
                options={employmentStatusOption}
                control={control}
                name="employmentStatus"
                defaultValue={details?.employmentStatus}
                handleChange={(e, a) => handleChange(e, a)}
              />
              <CustomInputField
                type="text"
                label=" "
                name="serialNumber"
                onChange={(e: any) => handleInputChange(e)}
                required
                extraLabel="Serial number *"
                style="bg-transparent"
                defaultValue={
                  details?.serialNumber ? details?.serialNumber : ""
                }
              />
              <CustomInputField
                type="text"
                label=" "
                name="label"
                onChange={(e: any) => handleInputChange(e)}
                required
                extraLabel="Label"
                style="bg-transparent"
                defaultValue={details?.label ? details?.label : ""}
              />
              <CustomSelect
                placeholder=" "
                extraLabel="Cost frequency"
                options={employmentStatusOption}
                control={control}
                name="costFrequency"
                defaultValue={details?.costFrequency}
                handleChange={(e, a) => handleChange(e, a)}
              />
              <CustomInputField
                type="text"
                label=" "
                name="cost"
                onChange={(e: any) => handleInputChange(e)}
                required
                extraLabel="Cost"
                style="bg-transparent"
                defaultValue={details?.cost ? details?.cost : ""}
              />
              <CustomInputField
                type="date"
                label=" "
                name="purchasedDate"
                onChange={(e: any) => handleInputChange(e)}
                required
                extraLabel="Purchased date"
                style="bg-transparent"
                defaultValue={
                  details?.purchasedDate ? details?.purchasedDate : ""
                }
              />
              <CustomInputField
                type="date"
                label=" "
                name="endOfWarrantyDate"
                onChange={(e: any) => handleInputChange(e)}
                required
                extraLabel="End of warranty date"
                style="bg-transparent"
                defaultValue={
                  details?.endOfWarrantyDate ? details?.endOfWarrantyDate : ""
                }
              />
              <CustomInputField
                type="text"
                label=" "
                name="description"
                onChange={(e: any) => handleInputChange(e)}
                required
                extraLabel="Description"
                style="bg-transparent"
                defaultValue={details?.description ? details?.description : ""}
              />
            </div>
            {/* </div> */}
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-bespokeBlack text-[16px] font-[500] ">
              Assignee Details
            </p>
            {/* <div className="flex flex-col gap-8"> */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-[54px] gap-y-4 w-full lg:w-[820px]">
              <CustomSelect
                placeholder=" "
                extraLabel="Used by"
                options={employmentStatusOption}
                control={control}
                name="employmentStatus"
                defaultValue={details?.employmentStatus}
                handleChange={(e, a) => handleChange(e, a)}
              />
              <CustomInputField
                type="date"
                label=" "
                name="dateAssigned"
                onChange={(e: any) => handleInputChange(e)}
                required
                extraLabel="Date assigned"
                style="bg-transparent"
                defaultValue={
                  details?.dateAssigned ? details?.dateAssigned : ""
                }
              />
              <CustomSelect
                placeholder=" "
                extraLabel="Location"
                options={employmentStatusOption}
                control={control}
                name="location"
                defaultValue={details?.location}
                handleChange={(e, a) => handleChange(e, a)}
              />
              <CustomSelect
                placeholder=" "
                extraLabel="Division"
                options={employmentStatusOption}
                control={control}
                name="division"
                defaultValue={details?.division}
                handleChange={(e, a) => handleChange(e, a)}
              />
              <CustomSelect
                placeholder=" "
                extraLabel="Department"
                options={employmentStatusOption}
                control={control}
                name="department"
                defaultValue={details?.department}
                handleChange={(e, a) => handleChange(e, a)}
              />
            </div>
            {/* </div> */}
          </div>
          <div className="flex items-center gap-2 mt-2">
            <PrimaryButton
              title="Save"
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
      {otherPopup && (
        <JobOtherPopup
          closeModal={setOtherPopup}
          data={popupDetails}
          showModal={otherPopup}
        />
      )}
    </>
  );
};

export default AddAsset;
