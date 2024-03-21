import Link from "next/link";
import Lottie from "react-lottie-player";
import Spinner from "../../assets/json/spinner-white.json"
import Image from "next/image";
const style = { height: "30px", width: "30px" };
interface ButtonProps {
  title: any;
  onClick?: () => any;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  loader?: any;
  id?: any;
  afterIcon?: any;
  beforeIcon?: any;
}

interface LinkProps {
  title: any;
  url: string;
  className?: string;
}

export const PrimaryButton = ({
  title,
  onClick,
  className,
  type,
  disabled,
  loader,
  afterIcon,
  beforeIcon,
  id,
  ...rest
}: ButtonProps) => {
  return (
    <button
      type={type}
      id={id}
      className={`${
        (loader || beforeIcon || afterIcon) &&
        "flex justify-center items-center"
      } text-white border border-solid border-bespokeOrange bg-bespokeOrange hover:bg-[#E28E26] hover:border-[#E28E26] disabled:bg-[#FDE0BD] disabled:border-[#FDE0BD] py-[12px] px-6 text-[14px] font-[400] rounded-[4px] focus:outline-none ${className}`}
      onClick={onClick}
      disabled={disabled ? true : false}
      {...rest}
    >
      {beforeIcon && (
        <span className="mr-4">
          <Image src={beforeIcon} alt="" />
        </span>
      )}
      {title}
      {afterIcon && (
        <span className="ml-4">
          <Image src={afterIcon} alt="" />
        </span>
      )}
      {loader && (
        <span className="">
          <Lottie animationData={Spinner} style={style} play />
        </span>
      )}
    </button>
  );
};

export const OutlineButton = ({
  title,
  onClick,
  className,
  type,
  disabled,
  afterIcon,
  beforeIcon,
  loader,
  ...rest
}: ButtonProps) => {
  const style = { height: "24px", width: "24px" };
  return (
    <button
      type={type}
      className={`${
        (beforeIcon || afterIcon) && "flex justify-center items-center"
      } text-bespokeOrange bg-transparent border-bespokeOrange hover:text-[#E28E26] hover:border-[#E28E26] disabled:text-[#FDE0BD] disabled:border-[#FDE0BD] border-[1px] py-4 px-6 text-[14px] font-[500] rounded-[4px] focus:outline-none ${className}`}
      onClick={onClick}
      disabled={disabled ? true : false}
      {...rest}
    >
      {beforeIcon && (
        <span className="mr-4">
          <Image src={beforeIcon} alt="" />
        </span>
      )}
      {title}
      {afterIcon && (
        <span className="ml-4">
          <Image src={afterIcon} alt="" />
        </span>
      )}
      {loader && (
        <span className="">
          <Lottie animationData={Spinner} style={style} play />
        </span>
      )}
    </button>
  );
};

export const OtherButton = ({
  title,
  onClick,
  className,
  type,
  disabled,
  loader,
  afterIcon,
  beforeIcon,
  ...rest
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`${(loader || beforeIcon || afterIcon) && "flex  items-center"}
       border-[1px] rounded-[4px] focus:outline-none ${className}`}
      onClick={onClick}
      disabled={disabled ? true : false}
      {...rest}
    >
      {beforeIcon && (
        <span className="mr-2">
          <Image src={beforeIcon} alt="" />
        </span>
      )}
      {title}
      {afterIcon && (
        <span className="ml-2">
          <Image src={afterIcon} alt="" />
        </span>
      )}
      {loader && (
        <span className="">
          <Lottie animationData={Spinner} style={style} play />
        </span>
      )}
    </button>
  );
};

export const PrimaryLink = ({ title, url, className, ...rest }: LinkProps) => {
  return (
    <Link href={url}>
      <div
        className={`text-white bg-bespokeOrange hover:bg-[#004822] hover:border-[#004822] disabled:bg-[#C8CCD0] disabled:border-[#C8CCD0] border-bespokeOrange border-[1px] py-4 px-6 text-[1.05rem] font-[300] rounded-[5px] focus:outline-none ${className}`}
        {...rest}
      >
        {title}
      </div>
    </Link>
  );
};

export const OutlineLink = ({ title, url, className, ...rest }: LinkProps) => {
  return (
    <Link href={url}>
      <div
        className={`text-bespokeOrange text-center bg-white border-bespokeOrange hover:border-[#004822] hover:text-[#004822] disabled:border-[#C8CCD0] border-[1px] py-4 px-6 text-[1.05rem] font-[400] focus:outline-none ${className}`}
        {...rest}
      >
        {title}
      </div>
    </Link>
  );
};

export const OtherLink = ({ title, url, className, ...rest }: LinkProps) => {
  return (
    <Link href={url}>
      <div
        className={`border-[1px] text-[1.05rem] font-[300] rounded-[5px] focus:outline-none ${className}`}
        {...rest}
      >
        {title}
      </div>
    </Link>
  );
};
