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

const ThirdStep = (props: IStepsInterface) => {
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
    <div className="container">
      <h4 className="modal-title mb-4">Onboard New Hire</h4>
      {/* <form> */}
      <div className="row">
        <div className="col-sm-6 col-md-4 mb-3">
          <div className="input-block mb-3">
            <label className="col-form-label">
              Contact on the first day
            </label>
            <Select
              options={companies}
              placeholder="Select"
              styles={customStyles}
              name="contactFirstDay"
              onChange={(newValue: any) => {
                handleChange(newValue, "contactFirstDay");
              }}
              value={companies?.find((c) => c.value === details?.contactFirstDay)}
            />
          </div>
        </div>
        <div className="col-sm-6 col-md-4 mb-3">
          <div className="input-block mb-3">
            <label className="col-form-label">
              Address
            </label>
            <Select
              options={companies}
              placeholder="Select"
              styles={customStyles}
              name="address"
              onChange={(newValue: any) => {
                handleChange(newValue, "address");
              }}
              value={companies?.find((c) => c.value === details?.address)}
            />
          </div>
        </div>
        <div className="col-sm-6 col-md-4 mb-3">
          <div className="input-block mb-3">
            <label className="col-form-label">
              Date
            </label>
            <input
              name="date"
              onChange={(e: any) => handleInputChange(e)}
              className="form-control"
              type="date"
              required
              defaultValue={details?.date}
            />
          </div>
        </div>
        <div className="col-sm-12">
          <div className="input-block mb-3">
            <label className="col-form-label">
              Instruction
            </label>
            <textarea
            className="form-control"
              name="instructioon"
              id="instruction"
              onChange={(e: any) => handleInputChange(e)}
              defaultValue={details?.instruction}
            ></textarea>
          </div>
        </div>
      </div>

      <div
        className="submit-section gap-3"
        
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
        >
          Proceed
        </button>
      </div>
      {/* </form> */}
    </div>
  );
};

export default ThirdStep;
