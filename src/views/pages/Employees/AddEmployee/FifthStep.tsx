import React, { useRef, useState } from "react";
import AddIcon from "../../../../assets/img/add-file-icon.svg";

interface IStepsInterface {
  addEmployee: boolean;
  setAddEmployee?: any;
  setupStep: number;
  setSetupStep: any;
  details: any;
  setDetails: any;
}

const FifthStep = (props: IStepsInterface) => {
  const {
    addEmployee,
    details,
    setDetails,
    setSetupStep,
    setupStep,
    setAddEmployee,
  } = props;

  console.log(details, "det");

  const handleProceed = () => {
    setSetupStep(setupStep + 1);
  };

  const [files, setFiles] = useState<any>([]);
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

    const files = Array.from(e.dataTransfer.files);
    setFiles(files);

    setDetails({ ...details, document: files });

    // Handle the dropped files (e.g., upload or process them)

    // handleDroppedFiles(file);
  };

  const handleBrowseClick = () => {
    // Trigger the file input click event
    fileInputRef?.current?.click();
  };

  const handleFileInputChange = (e: any) => {
    // Handle the selected files when using the file input
    const files = Array.from(e.target.files);

    // setDetails({ ...details, documentName: file.name });

    setFiles(files);

    setDetails({ ...details, document: files });
    // handleDroppedFiles(file);
  };

  console.table(files);

  return (
    <div>
      <h4 className="modal-title mb-4">Documents</h4>
      {/* <form> */}
      {files.length > 0 ? (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "24px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {files?.map((file: any, index: any) => (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "24px",
                alignItems: "center",
              }}
              key={index}
            >
              <img
                src={AddIcon}
                alt="add-file"
                style={{ width: "100px" }}
                className="mt-4"
              />
              <p>{file?.name}</p>
            </div>
          ))}
        </div>
      ) : (
        <>
          <div
            className="row"
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "24px",
            }}
          >
            <div className="flex flex-col w-full gap-4">
              <div
                className={`w-full py-[80px] bg-[#FFFAF5] border-dashed ${
                  isDragOver ? "border-[3px]" : "border"
                } border-bespokeOrange rounded-[16px] flex flex-col gap-[16px] justify-center items-center`}
                onDragEnter={handleDragEnter}
                onDragLeave={handleDragLeave}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                onClick={handleBrowseClick}
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "24px",
                }}
              >
                <img
                  src={AddIcon}
                  alt="add-file"
                  style={{ width: "100px" }}
                  className="mt-4"
                />
                <div
                  className="flex flex-col gap-2 items-center"
                  style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "24px",
                  }}
                >
                  <p className="">
                    {isDragOver
                      ? "Drop your files here"
                      : "Drag and drop your document or click the upload button "}
                  </p>
                </div>
                {!isDragOver && (
                  <div className="mt-2 mb-4">
                    <button
                      className="btn btn-tertiary submit-btn"
                      style={{ border: "1px solid #f89b2d" }}
                    >
                      Upload
                    </button>
                  </div>
                )}

                {/* Invisible file input */}
                <input
                  type="file"
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  onChange={handleFileInputChange}
                  multiple
                />
              </div>
            </div>
          </div>
        </>
      )}

      <div
        className="submit-section"
        style={{
          display: "flex",
          gap: "24px",
        }}
      >
        <button
          className="btn btn-secondary submit-btn"
          onClick={() => setSetupStep(setupStep - 1)}
        >
          Back
        </button>
        <button className="btn btn-primary submit-btn">
          Proceed
        </button>
      </div>
      {/* </form> */}
    </div>
  );
};

export default FifthStep;
