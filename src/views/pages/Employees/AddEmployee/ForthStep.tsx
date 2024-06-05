import React from "react";
import Select from "react-select";

interface IStepsInterface {
  addEmployee: boolean;
  setAddEmployee?: any;
  setupStep: number;
  setSetupStep: any;
  details: any;
  setDetails: any;
}

const ForthStep = (props: IStepsInterface) => {
  const {
    addEmployee,
    details,
    setDetails,
    setSetupStep,
    setupStep,
    setAddEmployee,
  } = props;

  console.log(details, "det");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };

  const handleChange = (target: any, name: any) => {
    setDetails({ ...details, [name]: target?.value });
  };

  const customStyles = {
    input: (base: any, state: any) => ({
      ...base,
      height: "40px",
      fontSize: "14px",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "#ff9b44" : "#fff",
      color: state.isFocused ? "#fff" : "#000",
      "&:hover": {
        backgroundColor: "#ff9b44",
      },
    }),
  };

  const companies = [
    { value: 1, label: "Global Technologies" },
    { value: 2, label: "Delta Infotech" },
  ];

  const handleProceed = () => {
    setSetupStep(setupStep + 1);
  };
  return (
    <div>
      <h4 className="modal-title mb-4">Education</h4>
      {/* <form> */}
      <div className="row" style={{ width: "100%" }}>
        <div className="col-sm-4">
          <div className="input-block mb-3">
            <label className="col-form-label">
              Institution <span className="text-danger">*</span>
            </label>
            <Select
              options={companies}
              placeholder="Select"
              styles={customStyles}
              name="institution"
              onChange={(newValue: any) => {
                handleChange(newValue, "institution");
              }}
              value={companies?.find((c) => c.value === details?.institution)}
            />
          </div>
        </div>
        <div className="col-sm-4">
          <div className="input-block mb-3">
            <label className="col-form-label">
              Department <span className="text-danger">*</span>
            </label>
            <Select
              options={companies}
              placeholder="Select"
              styles={customStyles}
              name="educationDepartment"
              onChange={(newValue: any) => {
                handleChange(newValue, "educationDepartment");
              }}
              value={companies?.find(
                (c) => c.value === details?.educationDepartment
              )}
            />
          </div>
        </div>
        <div className="col-sm-4">
          <div className="input-block mb-3">
            <label className="col-form-label">
              Education level <span className="text-danger">*</span>
            </label>
            <Select
              options={companies}
              placeholder="Select"
              styles={customStyles}
              name="educationLevel"
              onChange={(newValue: any) => {
                handleChange(newValue, "educationLevel");
              }}
              value={companies?.find(
                (c) => c.value === details?.educationLevel
              )}
            />
          </div>
        </div>
        <div className="col-sm-4">
          <div className="input-block mb-3">
            <label className="col-form-label">
              Graduation date <span className="text-danger">*</span>
            </label>
            <Select
              options={companies}
              placeholder="Select"
              styles={customStyles}
              name="graduationDate"
              onChange={(newValue: any) => {
                handleChange(newValue, "graduationDate");
              }}
              value={companies?.find(
                (c) => c.value === details?.graduationDate
              )}
            />
          </div>
        </div>
      </div>

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
        <button
          className="btn btn-primary submit-btn"
          onClick={handleProceed}
          disabled={
            !details?.institution ||
            !details?.educationDepartment ||
            !details?.educationLevel ||
            !details?.graduationDate
          }
        >
          Proceed
        </button>
      </div>
      {/* </form> */}
    </div>
  );
};

export default ForthStep;
