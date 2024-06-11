import React from "react";

const Absent = () => {
  const absentDetails = [
    {
      name: "Hassan tunmise",
      role: "DESIGNER",
    },
    {
      name: "Hassan tunmise",
      role: "DESIGNER",
    },
    {
      name: "Hassan tunmise",
      role: "DESIGNER",
    },
    {
      name: "Hassan tunmise",
      role: "DESIGNER",
    },
    {
      name: "Hassan tunmise",
      role: "DESIGNER",
    },
    {
      name: "Hassan tunmise",
      role: "DESIGNER",
    },
    {
      name: "Hassan tunmise",
      role: "DESIGNER",
    },
    {
      name: "Hassan tunmise",
      role: "DESIGNER",
    },
    {
      name: "Hassan tunmise",
      role: "DESIGNER",
    },
  ];
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <h4 style={{ color: "#F89B2D" }}>Absent ({absentDetails?.length})</h4>
          <div className="row">
            {absentDetails.map((data, index) => (
              <div className="col-md-3 d-flex" key={index}>
                <div
                  className="stats-info w-100"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <div
                        style={{
                          width: "32px",
                          height: "32px",
                          background: "black",
                          borderRadius: "50%",
                        }}
                      ></div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "start",
                        }}
                      >
                        <h6 style={{ fontSize: "12px", color: "#F89B2D" }}>
                          {data.name}
                        </h6>
                        <p style={{ fontSize: "14px", marginTop: "-4px" }}>
                          {data.role}
                        </p>
                      </div>
                    </div>
                    <button
                      className="btn btn-secondary"
                      style={{ width: "fit", padding: "4px", fontSize: "8px" }}
                    >
                      Absent
                    </button>
                  </div>
                  <hr />
                  <p
                    style={{
                      fontSize: "12px",
                      marginTop: "-18px",
                      textAlign: "left",
                    }}
                  >
                    Absent
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Absent;
