import React, { useEffect, useState } from "react";
import TableAvatar from "./TableAvatar";
import Breadcrumbs from "../../../components/Breadcrumbs";
import { useLocation, useNavigate } from "react-router-dom";
import WhosIn from "./clockinsComponent/WhosIn";
import Absent from "./clockinsComponent/Absent";

const AttendenceAdmin = () => {
  const [pageParam, setPageParam] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  useEffect(() => {
    const pageParam:any = queryParams.get("pageParam");
    setPageParam(pageParam);
  }, [location]);

  const updateQueryParams = (param: any) => {
    const params = new URLSearchParams();
    params.set("pageParam", param);
    navigate(`?${params.toString()}`);
  };

  return (
    <>
      <div className="page-wrapper">
        <div className="content container-fluid">
          {/* Page Header */}
          <Breadcrumbs
            maintitle="Attendance"
            title="Dashboard"
            subtitle="Attendance"
          />
          {/* /Page Header */}
          <div
            style={{
              display: "flex",
              gap: "24px",
              alignItems: "center",
              borderBottom: "1px solid black",
              marginBottom: "32px",
            }}
          >
            <div
              style={{
                cursor: "pointer",
                padding: "12px 24px",
                textAlign: "center",
                borderBottom: `${
                  pageParam === "whos-in" || pageParam === null
                    ? "3px solid #F89B2D"
                    : "none"
                }`,
                color: `${
                  pageParam === "whos-in" || pageParam === null
                    ? "#F89B2D"
                    : "black"
                }`,
              }}
              onClick={() => updateQueryParams("whos-in")}
            >
              Who's in
            </div>
            <div
              style={{
                cursor: "pointer",
                padding: "12px 24px",
                textAlign: "center",
                borderBottom: `${
                  pageParam === "history" ? "3px solid #F89B2D" : "none"
                }`,
                color: `${pageParam === "history" ? "#F89B2D" : "black"}`,
              }}
              onClick={() => updateQueryParams("history")}
            >
              History
            </div>
            <div
              style={{
                cursor: "pointer",
                padding: "12px 24px",
                textAlign: "center",
                borderBottom: `${
                  pageParam === "location" ? "3px solid #F89B2D" : "none"
                }`,
                color: `${pageParam === "location" ? "#F89B2D" : "black"}`,
              }}
              onClick={() => updateQueryParams("location")}
            >
              Location
            </div>
            <div
              style={{
                cursor: "pointer",
                padding: "12px 24px",
                textAlign: "center",
                borderBottom: `${
                  pageParam === "absent" ? "3px solid #F89B2D" : "none"
                }`,
                color: `${pageParam === "absent" ? "#F89B2D" : "black"}`,
              }}
              onClick={() => updateQueryParams("absent")}
            >
              Absent
            </div>
          </div>

          {(pageParam === "whos-in" || pageParam === null) && <WhosIn />}
          {pageParam === "history" && (
            <div className="row">
              <div className="col-lg-12">
                <div className="table-responsive">
                  <TableAvatar />
                </div>
              </div>
            </div>
          )}
          {pageParam === "absent" && <Absent />}
        </div>
      </div>
    </>
  );
};

export default AttendenceAdmin;
