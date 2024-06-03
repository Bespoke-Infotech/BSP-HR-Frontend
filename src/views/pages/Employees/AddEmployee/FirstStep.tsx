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
      height:"40px",
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

  const genderEnum = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
  ];
  return (
    <div>
      <h4 className="modal-title mb-4">Personal Details</h4>
      {/* <form> */}
      <div className="row" style={{ width: "100%" }}>
        <div className="col-sm-4">
          <div className="input-block mb-3">
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
        <div className="col-sm-4">
          <div className="input-block mb-3">
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
        <div className="col-sm-4">
          <div className="input-block mb-3">
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
        <div className="col-sm-4">
          <div className="input-block mb-3">
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
            {/* <select
              className="select form-control"
              name="gender"
              onChange={(e: any) => handleInputChange(e)}
              value={details?.gender}
            >
              <option value="">Select </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select> */}
          </div>
        </div>
        <div className="col-sm-4">
          <div className="input-block mb-3">
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

      <div
        className="submit-section"
        style={{
          display: "flex",
          gap: "24px",
        }}
      >
        <button
          className="btn btn-secondary submit-btn"
          onClick={() => setAddEmployee(false)}
        >
          Back
        </button>
        <button
          className="btn btn-primary submit-btn"
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
      {/* </form> */}
    </div>
  );
};

export default FirstStep;
