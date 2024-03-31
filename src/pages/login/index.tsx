import React, { useState } from "react";
import CustomInputField from "../../../views/components/CustomHTMLElements/CustomInputField";
import { PrimaryButton } from "../../../views/components/Button/Button";
import Image from "next/image";
import GoogleIcon from "../../../views/assets/images/google-icon.svg";
import AppleIcon from "../../../views/assets/images/apple-icon.svg";
import FacebookIcon from "../../../views/assets/images/facebook-icon.svg";
import MicrosoftIcon from "../../../views/assets/images/microsoft-icon.svg";
import { useRouter } from "next/router";
import { ROUTES } from "../../../views/helpers/routes";

const Login = () => {
  const [details, setDetails] = useState<any>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };

  const router = useRouter();

  return (
    <div className="w-full h-screen flex justify-center bg-[#FFFAF5] pt-[78px]">
      <div className="py-6 px-[54px] bg-bespokeWhite rounded-[24px] h-fit shadow-1sm flex flex-col gap-[32px]">
        <h1 className="text-[32px] font-[600] text-[#000000]">
          Signin to Bespoke
        </h1>
        <div className="flex flex-col w-[322px] gap-[24px] ">
          <CustomInputField
            type="text"
            label=" "
            name="email"
            onChange={(e: any) => handleInputChange(e)}
            required
            extraLabel="Email address"
            style="w-[322px]"
          />
          <CustomInputField
            type="password"
            label=" "
            name="password"
            onChange={(e: any) => handleInputChange(e)}
            required
            extraLabel="Password"
            style="w-[322px]"
          />
          <PrimaryButton
            title="Login"
            onClick={() => router.push(ROUTES.OVERVIEW)}
            className="text-[16px] w-full mt-2"
            disabled={!details.email || !details.password}
          />
        </div>
        <a
          href="#"
          className="text-bespokeBlack text-[16px] font-[500] text-center w-full "
        >
          Forgot Password?
        </a>
        <div className="flex flex-col gap-[14px] max-w-[322px] w-full ">
          <a
            href="#"
            className="px-4 py-3 rounded-[6px] border border-[#D0D5DD] flex gap-3 items-center "
          >
            <Image src={GoogleIcon} alt="goog;e" />
            <p className="text-[14px] text-bespokeBlack  ">
              Sign in with Google
            </p>
          </a>
          <a
            href="#"
            className="px-4 py-3 rounded-[6px] border border-[#D0D5DD] flex gap-3 items-center "
          >
            <Image src={FacebookIcon} alt="goog;e" />
            <p className="text-[14px] text-bespokeBlack  ">
              Sign in with facebook
            </p>
          </a>
          <a
            href="#"
            className="px-4 py-3 rounded-[6px] border border-[#D0D5DD] flex gap-3 items-center "
          >
            <Image src={AppleIcon} alt="goog;e" />
            <p className="text-[14px] text-bespokeBlack  ">
              Sign in with Apple
            </p>
          </a>
          <a
            href="#"
            className="px-4 py-3 rounded-[6px] border border-[#D0D5DD] flex gap-3 items-center "
          >
            <Image src={MicrosoftIcon} alt="goog;e" />
            <p className="text-[14px] text-bespokeBlack  ">
              Sign in with Microsoft
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
