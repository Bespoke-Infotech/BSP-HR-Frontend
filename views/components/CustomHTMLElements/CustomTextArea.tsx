import React from "react";
import { enforceMaxLength } from "../../helpers/enforceMaxLength";
import { ChangeHandler } from "react-hook-form";

interface ICustomTextAreaProps {
  name?: string;
  placeholder?: string;
  label?: string;
  errors?: any;
  maxLength?: undefined | number;
  defaultValue?: string | number;
  value?: string | number;
  minLength?: undefined | number;
  readOnly?: boolean;
  required?: boolean;
  onChange?: any;
  showRequiredIcon?: boolean;
  hasActionButton?: boolean;
  actionButtonText?: string;
  onClickActionButton?: () => void;
  extraLabel?: string;
  bottomLabel?: string;
  rows?: number;
  style?: string;
}

const CustomTextArea: React.FC<ICustomTextAreaProps> = React.forwardRef(
  (
    {
      name,
      placeholder,
      label,
      errors,
      maxLength,
      defaultValue,
      minLength,
      onChange,
      showRequiredIcon,
      extraLabel,
      bottomLabel,
      rows,
      style,
      readOnly,
      required,
      ...otherProps
    },
    ref: any
  ) => {
    return (
      <div className="mb-4 lg:mb-[23px]">
        {label && (
          <div className="flex items-center mb-2">
            <label className="block text-bespokeGray text-[13px] font-[400]">
              {label}
            </label>
            {showRequiredIcon && <sup className="ml-1 text-[#EB5757]">*</sup>}
          </div>
        )}
        {extraLabel?.length ? (
          <h1 className="text-bespokeGray text-[13px] lg:leading-[16px] tracking-[0.03px] font-[300] mb-2">
            {extraLabel}
          </h1>
        ) : null}
        <textarea
          className={`bg-transparent appearance-none border px-3 placeholder:text-[#DADADA] h-[64px] placeholder:text-[14px] placeholder:lg:leading-[24px] placeholder:font-[100] ${
            readOnly ? "text-Gray bg-[#F5F5F5]" : "text-bespokeGray"
          } ${
            errors ? "border-[#EB5757]" : "border-LightGray"
          }   rounded-[4px] w-full h-[96px] py-2  leading-6 text-[14px] font-[400] focus:outline-none focus:bg-white  ${
            errors ? "border-[#EB5757]" : "focus:border-Blue"
          } ${style}`}
          name={name}
          placeholder={placeholder}
          onKeyPress={enforceMaxLength}
          maxLength={maxLength}
          minLength={minLength}
          defaultValue={defaultValue}
          onChange={onChange}
          readOnly={readOnly}
          required={required}
          rows={rows || 3}
          ref={ref}
          {...otherProps}
        />
        {bottomLabel && bottomLabel.length && !errors && (
          <p className="text-[#6A7581] text-[12px] lg:leading-[16px] font-[100]">
            {bottomLabel}
          </p>
        )}
        {/* {errors && <ErrorHandler errors={errors} />} */}
      </div>
    );
  }
);
export default CustomTextArea;
