import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { PrimaryButton } from "../Button/Button";
import CSVIcon from "../../assets/images/csv-icon.svg";
import { SetupStepPropsType } from "../../../src/pages/employees/add";
import { toast } from "react-toastify";
import Papa from "papaparse";
import * as XLSX from "xlsx";

const ImportCSV = ({
  details,
  setupStep,
  setDetails,
  setSetupStep,
}: SetupStepPropsType) => {
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

    setDetails({ ...details, emploeeFileName: file.name });

    // Handle the dropped files (e.g., upload or process them)
    handleDroppedFiles(file);
  };

  const handleBrowseClick = () => {
    // Trigger the file input click event
    fileInputRef?.current?.click();
  };

  const handleFileInputChange = (e: any) => {
    // Handle the selected files when using the file input
    const file = e.target.files[0];

    setDetails({ ...details, emploeeFileName: file.name });

    handleDroppedFiles(file);
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
        setDetails({ ...details, emploeeFileName: "" });
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

  return (
    <div className="flex flex-col w-full gap-4">
      <p className="text-[14px] font-[500] text-bespokeDeepPurple whitespace-nowrap cursor-pointer ">
        Click here to download free template
      </p>
      <div
        className={`w-full py-[80px] bg-[#FFFAF5] border-dashed ${
          isDragOver ? "border-[3px]" : "border"
        } border-bespokeOrange rounded-[16px] flex flex-col gap-[16px] justify-center items-center`}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={handleBrowseClick}
      >
        <Image src={CSVIcon} alt="add-employee" />
        <div className="flex flex-col gap-2 items-center">
          <p className="text-[14px] font-[500] text-[#686868] whitespace-nowrap ">
            {isDragOver
              ? "Drop your files here"
              : "Drag and drop your excel file or click the upload button "}
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
  );
};

export default ImportCSV;
