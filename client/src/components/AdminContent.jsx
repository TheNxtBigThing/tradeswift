import React, { useState, useEffect } from "react";
import moment from "moment";
import Stats from "../pages/Stats";

const AdminContent = () => {
  const [trades, setTrades] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/api/trade/")
      .then((response) => response.json())
      .then((data) => {
        setTrades(data);
      })
      .catch((e) => {
        console.log("error", e);
      });
  });

  return (
    <>
      <center>
        <h1
          className="p-5 text-[1.2rem] mb-3 font-bold pt-3 text-center"
          id="new"
        >
          <a>New Applications</a>
        </h1>
        <div className="flex flex-col justify-center align-center text-center">
          <center>
            {trades.map((trade) => (
              <div
                key={trade._id}
                className="flex justify-center w-[60vw] bg-sky-500 mb-20 rounded-lg p-5"
              >
                <table className="table-auto border-1">
                  <tr>
                    <td className="p-2">
                      <h1 className="text-[1.2rem]">ID:</h1>
                    </td>
                    <td className="p-2">
                      <h1 className="text-[1.2rem] font-bold">{trade._id}</h1>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2">
                      <h1 className="text-[1.2rem]">Company Name: </h1>
                    </td>
                    <td className="p-2">
                      <h1 className="text-[1.2rem]">
                        <span className="font-bold">{trade.companyname}</span>
                      </h1>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2">
                      <h1 className="text-[1.2rem]">Company Type: </h1>
                    </td>
                    <td className="p-2">
                      <h1 className="text-[1.2rem]">
                        <span className="font-bold">{trade.type}</span>
                      </h1>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2">
                      <h1 className="text-[1.2rem]">Owner Details: </h1>
                    </td>
                    <td className="p-2">
                      <h1 className="text-[1rem]">
                        <tr>
                          <td className="p-2 pl-0">Name:</td>
                          <td>
                            <span className="font-bold block">
                              {trade.owner[0].name}
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="p-2 pl-0">Contact:</td>
                          <td>
                            <span className="font-bold block">
                              {trade.owner[0].contact}
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="p-2 pl-0">Email:</td>
                          <td>
                            <span className="font-bold block">
                              {trade.owner[0].email}
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="p-2 pl-0">Aadhar:</td>
                          <td>
                            <span className="font-bold block">
                              {trade.owner[0].adhar}
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="p-2 pl-0">Pancard:</td>
                          <td>
                            <span className="font-bold block">
                              {trade.owner[0].pancard}
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="p-2 pl-0">Address:</td>
                          <td>
                            <span className="font-bold block">
                              {trade.owner[0].address}
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="p-2 pl-0">Created At:</td>
                          <td>
                            <span className="font-bold block">
                              {moment(trade.owner[0].createdAt)
                                .utc()
                                .format("DD-MM-YYYY")}
                            </span>
                          </td>
                        </tr>
                      </h1>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2">
                      <h1 className="text-[1.2rem]">Documents: </h1>
                    </td>
                    <tr>
                      <td className="p-2">
                        <h1 className="text-[1rem]">Aadhar:</h1>
                      </td>
                      <td>
                        <img
                          className="w-[10vw]"
                          src={trade.documents[0].documenturl}
                        />
                      </td>
                    </tr>
                  </tr>
                </table>
              </div>
            ))}

            <h1 className="text-[1.5rem] text-center" id="stats">
              Stats
            </h1>
            <Stats />
          </center>
        </div>
      </center>
    </>
  );
};

export default AdminContent;
