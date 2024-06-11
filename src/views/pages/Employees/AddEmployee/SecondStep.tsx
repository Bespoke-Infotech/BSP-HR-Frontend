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

const SecondStep = (props: IStepsInterface) => {
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

  const employee = [
    { value: 1, label: "Select Department" },
    { value: 2, label: "Web Development" },
    { value: 3, label: "IT Management" },
    { value: 4, label: "Marketing" },
  ];
  const designation = [
    { value: 1, label: "Web Developer" },
    { value: 2, label: "Web Designer" },
    { value: 3, label: "Ios Developer" },
    { value: 4, label: "Marketing" },
  ];
  const companies = [
    { value: 1, label: "Global Technologies" },
    { value: 2, label: "Delta Infotech" },
  ];
  const locations = [
    { value: 1, label: "Akure" },
    { value: 2, label: "Enugu" },
  ];

  const handleProceed = () => {
    setSetupStep(setupStep + 1);
  };
  return (
    <div className="container">
      <h4 className="modal-title mb-4">Job Details</h4>
      {/* <form> */}
      <div className="row" >
        <div className="col-sm-6 col-md-4 mb-3">
          <div className="input-block mb-3">
            <label
              className="col-form-label"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span>
                Job title <span className="text-danger">*</span>
              </span>
              <span>+ Add</span>
            </label>
            <Select
              options={employee}
              placeholder="Select"
              styles={customStyles}
              name="jobTitle"
              onChange={(newValue: any) => {
                handleChange(newValue, "jobTitle");
              }}
              value={employee?.find((c) => c.value === details?.jobTitle)}
            />
          </div>
        </div>
        <div className="col-sm-6 col-md-4 mb-3">
          <div className="input-block mb-3">
            <label
              className="col-form-label"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span>
                Location <span className="text-danger">*</span>
              </span>
              <span>+ Add</span>
            </label>
            <Select
              options={locations}
              placeholder="Select"
              styles={customStyles}
              name="location"
              onChange={(newValue: any) => {
                handleChange(newValue, "location");
              }}
              value={locations?.find((c) => c.value === details?.location)}
            />
          </div>
        </div>
        <div className="col-sm-6 col-md-4 mb-3">
          <div className="input-block mb-3">
            <label
              className="col-form-label"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span>
                Division <span className="text-danger">*</span>
              </span>
              <span>+ Add</span>
            </label>
            <Select
              options={companies}
              placeholder="Select"
              styles={customStyles}
              name="division"
              onChange={(newValue: any) => {
                handleChange(newValue, "division");
              }}
              value={companies?.find((c) => c.value === details?.division)}
            />
          </div>
        </div>
        <div className="col-sm-6 col-md-4 mb-3">
          <div className="input-block mb-3">
            <label className="col-form-label">
              Department <span className="text-danger">*</span>
            </label>
            <Select
              options={designation}
              placeholder="Select"
              styles={customStyles}
              name="department"
              onChange={(newValue: any) => {
                handleChange(newValue, "department");
              }}
              value={designation?.find((c) => c.value === details?.department)}
            />
          </div>
        </div>
        <div className="col-sm-6 col-md-4 mb-3">
          <div className="input-block mb-3">
            <label className="col-form-label">
              Compensation <span className="text-danger">*</span>
            </label>
            <input
              name="compensation"
              onChange={(e: any) => handleInputChange(e)}
              className="form-control"
              type="text"
              required
              defaultValue={details?.compensation}
            />
          </div>
        </div>
      </div>

      <div
        className="submit-section"
       
      >
        <button
          className="btn btn-secondary submit-btn col-sm-6 col-md-4 mb-3"
          onClick={() => setSetupStep(setupStep - 1)}
        >
          Back
        </button>
        <button
          className="btn btn-primary submit-btn col-sm-6 col-md-4 mb-3"
          onClick={handleProceed}
          disabled={
            !details?.jobTitle ||
            !details?.location ||
            !details?.division ||
            !details?.department ||
            !details?.compensation
          }
        >
          Proceed
        </button>
      </div>
      {/* </form> */}
    </div>
  );
};

export default SecondStep;
