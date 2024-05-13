import React, { useState } from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddModal = () => {
  const [selectedDate1, setSelectedDate1] = useState<any>(null);
  const [selectedDate2, setSelectedDate2] = useState<any>(null);
  //   const [selectedDate3, setSelectedDate3] = useState<any>(null);
  //   const [selectedDate4, setSelectedDate4] = useState<any>(null);

  const handleDateChange1 = (date) => {
    setSelectedDate1(date);
  };
  const handleDateChange2 = (date) => {
    setSelectedDate2(date);
  };
  //   const handleDateChange3 = (date) => {
  //     setSelectedDate3(date);
  //   };
  //   const handleDateChange4 = (date) => {
  //     setSelectedDate4(date);
  //   };
  return (
    <div>
      <div className="modal custom-modal fade" id="add_budgets" role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Budget</h5>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="input-block">
                  <label>Budget Title</label>
                  <input
                    className="form-control"
                    type="text"
                    name="budget_title"
                    placeholder="Budgets Title"
                  />
                </div>
                <label>Choose Budget Respect Type</label>
                <div className="input-block">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input BudgetType"
                      type="radio"
                      name="budget_type"
                      id="project2"
                      defaultValue="project"
                    />
                    <label className="form-check-label" htmlFor="project2">
                      Project
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input BudgetType"
                      type="radio"
                      name="budget_type"
                      id="category1"
                      defaultValue="category"
                    />
                    <label className="form-check-label" htmlFor="category1">
                      Category
                    </label>
                  </div>
                </div>
                <div className="input-block">
                  <label>Start Date</label>
                  <div className="cal-icon">
                    <DatePicker
                      selected={selectedDate1}
                      onChange={handleDateChange1}
                      className="form-control floating datetimepicker"
                      //type="date"
                      dateFormat="dd-MM-yyyy"
                    />
                  </div>
                </div>
                <div className="input-block">
                  <label>End Date</label>
                  <div className="cal-icon">
                    <DatePicker
                      selected={selectedDate2}
                      onChange={handleDateChange2}
                      className="form-control floating datetimepicker"
                      //type="date"
                      dateFormat="dd-MM-yyyy"
                    />
                  </div>
                </div>
                <div className="input-block">
                  <label>Expected Revenues</label>
                </div>
                <div className="AllRevenuesClass">
                  <div className="row AlLRevenues">
                    <div className="col-sm-6">
                      <div className="input-block">
                        <label>
                          Revenue Title <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control RevenuETitle"
                          defaultValue=""
                          placeholder="Revenue Title"
                          name="revenue_title[]"
                          autoComplete="off"
                        />
                      </div>
                    </div>
                    <div className="col-sm-5">
                      <div className="input-block">
                        <label>
                          Revenue Amount <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          name="revenue_amount[]"
                          placeholder="Amount"
                          defaultValue=""
                          className="form-control RevenuEAmount"
                          autoComplete="off"
                        />
                      </div>
                    </div>
                    <div className="col-sm-1">
                      <div className="add-more">
                        <Link
                          to="#"
                          className="add_more_revenue"
                          title="Add Revenue"
                          style={{ cursor: "pointer" }}
                        >
                          <i className="fa fa-plus-circle" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="input-block">
                  <label>
                    Overall Revenues <span className="text-danger">(A)</span>
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    name="overall_revenues"
                    id="overall_revenues1"
                    placeholder="Overall Revenues"
                    readOnly
                    style={{ cursor: "not-allowed" }}
                  />
                </div>
                <div className="input-block">
                  <label>Expected Expenses</label>
                </div>
                <div className="AllExpensesClass">
                  <div className="row AlLExpenses">
                    <div className="col-sm-6">
                      <div className="input-block">
                        <label>
                          Expenses Title <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control EXpensesTItle"
                          defaultValue=""
                          placeholder="Expenses Title"
                          name="expenses_title[]"
                          autoComplete="off"
                        />
                      </div>
                    </div>
                    <div className="col-sm-5">
                      <div className="input-block">
                        <label>
                          Expenses Amount <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          name="expenses_amount[]"
                          placeholder="Amount"
                          defaultValue=""
                          className="form-control EXpensesAmount"
                          autoComplete="off"
                        />
                      </div>
                    </div>
                    <div className="col-sm-1">
                      <div className="add-more">
                        <Link
                          to="#"
                          className="add_more_expenses"
                          title="Add Expenses"
                          style={{ cursor: "pointer" }}
                        >
                          <i className="fa fa-plus-circle" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="input-block">
                  <label>
                    Overall Expense <span className="text-danger">(B)</span>
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    name="overall_expenses"
                    id="overall_expenses1"
                    placeholder="Overall Expenses"
                    readOnly
                    style={{ cursor: "not-allowed" }}
                  />
                </div>
                <div className="input-block">
                  <label>
                    Expected Profit{" "}
                    <span className="text-danger">( C = A - B )</span>{" "}
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    name="expected_profit"
                    id="expected_profit1"
                    placeholder="Expected Profit"
                    readOnly
                    style={{ cursor: "not-allowed" }}
                  />
                </div>
                <div className="input-block">
                  <label>
                    Tax <span className="text-danger">(D)</span>
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    name="tax_amount"
                    id="tax_amount1"
                    placeholder="Tax Amount"
                  />
                </div>
                <div className="input-block">
                  <label>
                    Budget Amount{" "}
                    <span className="text-danger">( E = C - D )</span>{" "}
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    name="budget_amount"
                    id="budget_amount1"
                    placeholder="Budget Amount"
                    readOnly
                    style={{ cursor: "not-allowed" }}
                  />
                </div>
                <div className=" submit-section">
                  <button
                    className="btn btn-primary submit-btn"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    type="reset"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddModal;
