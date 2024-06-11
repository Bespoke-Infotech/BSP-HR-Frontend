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

const FirstStep = (props: IStepsInterface) => {
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

  const handleProceed = () => {
    setSetupStep(setupStep + 1);
  };

  const customStyles = {
    input: (base: any, state: any) => ({
      ...base,
      height: "40px",
      fontSize: "14px",
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: state.isFocused ? "#ff9b44" : "#fff",
      color: state.isFocused ? "#fff" : "#000",
      "&:hover": {
        backgroundColor: "#ff9b44",
      },
    }),
  };

  const genderEnum = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
  ];

  return (
    <div className="container">
      <h4 className="modal-title mb-4">Personal Details</h4>
      <div className="row">
        <div className="col-sm-6 col-md-4 mb-3">
          <div className="input-block">
            <label className="col-form-label">
              Name <span className="text-danger">*</span>
            </label>
            <input
              name="name"
              onChange={(e: any) => handleInputChange(e)}
              className="form-control"
              type="text"
              required
              defaultValue={details?.name}
            />
          </div>
        </div>
        <div className="col-sm-6 col-md-4 mb-3">
          <div className="input-block">
            <label className="col-form-label">
              Surname <span className="text-danger">*</span>
            </label>
            <input
              name="surname"
              onChange={(e: any) => handleInputChange(e)}
              className="form-control"
              type="text"
              required
              defaultValue={details?.surname}
            />
          </div>
        </div>
        <div className="col-sm-6 col-md-4 mb-3">
          <div className="input-block">
            <label className="col-form-label">
              Email <span className="text-danger">*</span>
            </label>
            <input
              name="email"
              onChange={(e: any) => handleInputChange(e)}
              className="form-control"
              type="text"
              required
              defaultValue={details?.email}
            />
          </div>
        </div>
        <div className="col-sm-6 col-md-4 mb-3">
          <div className="input-block">
            <label className="col-form-label">
              Gender <span className="text-danger">*</span>
            </label>
            <Select
              options={genderEnum}
              placeholder="Select"
              styles={customStyles}
              name="gender"
              onChange={(newValue: any) => {
                handleChange(newValue, "gender");
              }}
              value={genderEnum?.find((c) => c.value === details?.gender)}
            />
          </div>
        </div>
        <div className="col-sm-6 col-md-4 mb-3">
          <div className="input-block">
            <label className="col-form-label">
              Date of Birth <span className="text-danger">*</span>
            </label>
            <input
              name="dateOfBirth"
              onChange={(e: any) => handleInputChange(e)}
              className="form-control"
              type="date"
              required
              defaultValue={details?.dateOfBirth}
            />
          </div>
        </div>
      </div>

      <div className="submit-section gap-3">
        <button
          className="btn btn-secondary submit-btn col-sm-6 col-md-4 mb-3"
          onClick={() => setAddEmployee(false)}
        >
          Back
        </button>
        <button
          className="btn btn-primary submit-btn col-sm-6 col-md-4 mb-3"
          onClick={handleProceed}
          disabled={
            !details?.name ||
            !details?.surname ||
            !details?.dateOfBirth ||
            !details?.gender ||
            !details?.email
          }
        >
          Proceed
        </button>
      </div>
    </div>
  );
};

export default FirstStep;
