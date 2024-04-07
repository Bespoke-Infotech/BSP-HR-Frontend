import Image from "next/image";
import React from "react";
import { PrimaryButton } from "../Button/Button";

const EmptyView = ({
  emptyIcon,
  buttonAction,
  buttonText,
  title,
  description,
}: {
  emptyIcon?: any;
  buttonAction?: any;
  buttonText?: string;
  title?: string;
  description?: string;
}) => {
  return (
    <div className="w-full py-[80px] border-[0.5px] border-[#B9B9B9] rounded-[16px] flex flex-col gap-[16px] justify-center items-center">
      {emptyIcon && <Image src={emptyIcon} alt="add-employee" />}
      <div className="flex flex-col gap-2 items-center">
        <p className="text-[16px] font-[500] text-bespokeBlack lg:whitespace-nowrap ">
          {title}
        </p>
        <p className="text-[14px] font-[500] text-[#686868] lg:whitespace-nowrap ">
          {description}
        </p>
      </div>
      {buttonText && (
        <PrimaryButton
          title={buttonText}
          onClick={buttonAction}
          className="text-[14px] w-fit pt-1 pb-1 font-[400] whitespace-nowrap"
          //   disabled={!details.email || !details.password}
        />
      )}
    </div>
  );
};

export default EmptyView;
