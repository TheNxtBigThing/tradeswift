import React, { useState, useEffect } from "react";
import Chart from "chart.js/auto";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

const Stats = () => {
  const [trades, setTrades] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/trade/")
      .then((response) => response.json())
      .then((data) => {
        setTrades(data);
      })
      .catch((error) => {
        console.error("Error fetching trade data:", error);
      });
  }, []);

  const downloadPDF = () => {
    const doc = new jsPDF();
    const content = document.getElementById("pdf-content");
    html2canvas(content).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdfWidth = doc.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      doc.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      doc.save("download.pdf");
    });
  };

  useEffect(() => {
    if (trades.length > 0) {
      createCharts();
    }
  }, [trades]);

  const createCharts = () => {
    const activeCount = trades.filter(
      (trade) => trade.status === "Active"
    ).length;
    const inactiveCount = trades.length - activeCount;
    const barChartCtx = document.getElementById("barChart").getContext("2d");
    new Chart(barChartCtx, {
      type: "bar",
      data: {
        labels: ["Active", "Inactive"],
        datasets: [
          {
            label: "Company Status",
            data: [activeCount, inactiveCount],
            backgroundColor: ["#36a2eb", "#ff6384"],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });

    const companyTypes = trades.reduce((acc, trade) => {
      acc[trade.type] = (acc[trade.type] || 0) + 1;
      return acc;
    }, {});
    const pieChartCtx = document.getElementById("pieChart").getContext("2d");
    new Chart(pieChartCtx, {
      type: "pie",
      data: {
        labels: Object.keys(companyTypes),
        datasets: [
          {
            label: "Company Types",
            data: Object.values(companyTypes),
            backgroundColor: [
              "#ff6384",
              "#36a2eb",
              "#ffce56",
              "#4bc0c0",
              "#9966ff",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
      },
    });
  };

  return (
    <div id="pdf-content">
      <center>
        <div
          className="ml-[25vh]"
          style={{ position: "relative", height: "50vh", width: "50vw" }}
        >
          <canvas
            id="barChart"
            width="5"
            height="5"
            style={{ width: "50vw", height: "50vw" }}
          ></canvas>
        </div>
        <div
          className="ml-[25vh]"
          style={{ position: "relative", height: "50vw", width: "50vw" }}
        >
          <canvas id="pieChart" width="200" height="200"></canvas>
        </div>
        <button onClick={downloadPDF} className="p-4 m-4 rounded-lg bg-sky-600 text-white">Download PDF!</button>
      </center>
    </div>
  );
};

export default Stats;