import React, { useEffect, useRef, useState } from "react";
import CustomInputField from "../../CustomHTMLElements/CustomInputField";
import CustomSelect from "../../CustomHTMLElements/CustomSelect";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Papa from "papaparse";
import * as XLSX from "xlsx";
import Image from "next/image";
import { PrimaryButton } from "../../Button/Button";
import ImageIcon from "../../../assets/images/image-icon.svg";

const Company = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    control,
  } = useForm();

  const [details, setDetails] = useState<any>();
  const [data, setData] = useState<any>();
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef<any>(null);

  const handleDragEnter = (e: any) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: any) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDragOver = (e: any) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDrop = (e: any) => {
    e.preventDefault();
    setIsDragOver(false);

    const file = e.dataTransfer.files[0];

    setDetails({ ...details, documentName: file.name });

    // Handle the dropped files (e.g., upload or process them)
    console.log(file);

    // handleDroppedFiles(file);
  };

  const handleBrowseClick = () => {
    // Trigger the file input click event
    fileInputRef?.current?.click();
  };

  const handleFileInputChange = (e: any) => {
    // Handle the selected files when using the file input
    const file = e.target.files[0];

    // setDetails({ ...details, documentName: file.name });

    console.log(file);
    // handleDroppedFiles(file);
  };

  const handleDroppedFiles = (file: any) => {
    let fileTypes = [
      "application/vnd.ms-excel",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "text/csv",
    ];

    let selectedFile = file;

    if (selectedFile) {
      if (selectedFile && fileTypes.includes(selectedFile.type)) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          const result = e.target.result;

          if (selectedFile.name.endsWith(".csv")) {
            parseCSV(result);
          } else if (selectedFile.name.endsWith(".xlsx")) {
            parseExcel(result);
          }
        };

        reader.readAsBinaryString(selectedFile);
      } else {
        toast.error("File format not supported");
        setDetails({ ...details, documentName: "" });
        setData(null);
      }
    }
  };

  const parseCSV = (csvString: any) => {
    Papa.parse(csvString, {
      complete: (result: any) => {
        setData(result.data);
      },
      header: true, // Treat the first row as headers
    });
  };

  const parseExcel = (excelString: any) => {
    const workbook = XLSX.read(excelString, { type: "binary" });
    const sheetName = workbook.SheetNames[0];
    const excelData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

    setData(excelData);
  };

  useEffect(() => {
    if (data !== undefined && data !== null && data?.length > 0) {
      setDetails({ ...details, employeeData: data });

      //  Handle File uploading to the API
    }
  }, [data]);

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
    <>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 ">
          <p className="text-[16px] font-[400] text-bespokeBlack ">Company</p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 gap-y-4 w-full lg:w-[820px]">
            <CustomInputField
              type="text"
              label=" "
              name="companyName"
              onChange={(e: any) => handleInputChange(e)}
              required
              extraLabel="Company name *"
              style="bg-transparent"
              defaultValue={details?.companyName ? details?.companyName : ""}
            />
            <CustomInputField
              type="text"
              label=" "
              name="domainName"
              onChange={(e: any) => handleInputChange(e)}
              required
              extraLabel="Domain name *"
              style="bg-transparent"
              defaultValue={details?.domainName ? details?.domainName : ""}
            />

            <CustomSelect
              placeholder=" "
              extraLabel="Time Zone *"
              options={employmentStatusOption}
              control={control}
              name="timeZone"
              defaultValue={details?.timeZone}
              handleChange={(e, a) => handleChange(e, a)}
            />

            <CustomSelect
              placeholder=" "
              extraLabel="Language *"
              options={employmentStatusOption}
              control={control}
              name="language"
              defaultValue={details?.language}
              handleChange={(e, a) => handleChange(e, a)}
            />
            <CustomSelect
              placeholder=" "
              extraLabel="Currency *"
              options={employmentStatusOption}
              control={control}
              name="currency"
              defaultValue={details?.currency}
              handleChange={(e, a) => handleChange(e, a)}
              // className="flex-[1]"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-[14px] font-[400] text-bespokeBlack ">
            Upload company logo
          </p>
          <div className="flex flex-col w-full lg:w-[50%] gap-4">
            <div
              className={`w-full py-[80px] bg-[#FFFAF5] border-dashed cursor-pointer ${
                isDragOver ? "border-[3px]" : "border"
              } border-bespokeOrange rounded-[16px] flex flex-col gap-[16px] justify-center items-center`}
              onDragEnter={handleDragEnter}
              onDragLeave={handleDragLeave}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              onClick={handleBrowseClick}
            >
              <Image src={ImageIcon} alt="image-icon" />
              <div className="flex flex-col gap-2 items-center">
                <p className="text-[14px] font-[500] text-[#686868] text-center ">
                  {isDragOver
                    ? "Drop your document here"
                    : "Drag and drop your document or click the upload button "}
                </p>
              </div>
              {!isDragOver && (
                <div className="flex items-center gap-4 mt-2">
                  <PrimaryButton
                    title="Upload"
                    //   onClick={handleBrowseClick}
                    className="text-[14px] w-full pt-1 pb-1 font-[400] whitespace-nowrap"
                    //   disabled={!details.email || !details.password}
                  />
                </div>
              )}

              {/* Invisible file input */}
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleFileInputChange}
              />
            </div>
          </div>
        </div>
        <PrimaryButton
          title="Save and continue"
          //   onClick={handleBrowseClick}
          className="text-[14px] w-full lg:w-fit pt-1 pb-1 font-[400] whitespace-nowrap mt-5"
          //   disabled={!details.email || !details.password}
        />
      </div>
    </>
  );
};

export default Company;
