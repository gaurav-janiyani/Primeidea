"use client"
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const PrimeIdeaBenchmarks = () => { 

    const optionssalesoverview = {
        grid: {
          show: true,
          borderColor: "#ccc",
          strokeDashArray: 4, // Make lines dashed
          position: "back",
          padding: {
            left: 0,
            right: 0,
            bottom: 0,
          },
          xaxis: {
            lines: {
              show: false, // Show vertical lines if needed
            },
          },
          yaxis: {
            lines: {
              show: true, // Show horizontal lines
            },
          },
        },
        colors: ["#293C7D", "#479AD2"],
        fill: {
          type: "solid",
          opacity: 1,
        },
        chart: {
          offsetX: -15,
          toolbar: {
            show: false,
          },
          foreColor: "#000", // Change to white for better visibility
          fontFamily: "'DM Sans',sans-serif",
          sparkline: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: false, // Disable data labels
        },
        markers: {
          size: 0, // Adjust marker size for line charts
        },
        legend: {
          show: true, // Show legend for line charts
        },
        xaxis: {
          type: "category",
          categories: [
            "Jan 22",
            "Apr 22",
            "Jul 22",
            "Oct 22",
            "Jan 23",
            "Apr 23",
            "Jul 23",
            "Oct 23",
            "Jan 24",
            "Apr 24",
            "Jul 24",
            "Oct 24",
          ],
          tickAmount: 7,
          labels: {
            style: {
              color: "#000", // Dark color for axes labels
            },
          },
          axisBorder: {
            show: true,
            color: "#000", // Dark color for x-axis border
          },
        },
        yaxis: {
          show: true,
          min: 0,
          max: 60,
          tickAmount: 4,
          labels: {
            style: {
              color: "#000", // Dark color for y-axis labels
            },
          },
          axisBorder: {
            show: true,
            color: "#000", // Dark color for y-axis border
          },
        },
        stroke: {
          show: true,
          width: 2, // Adjust stroke width for line charts
          lineCap: "round",
          colors: ["#293C7D", "#479AD2"], // Set line colors
        },
        tooltip: {
          theme: "dark",
        },
    };

    const seriessalesoverview = [
        {
            name: "PrimeIdea Portfolio",
            data: [10, 15, 20, 25, 30, 28, 26, 40, 45, 42, 50, 60], // Values scaled to be between 0 and 60
        },
        {
            name: "Nifty 50",
            data: [10, 15, 17, 10, 20, 25, 20, 28, 30, 34, 38, 45], // Scaled values for Nifty 50
        },
    ];
    

    return (
        <section>
            <div className="max-w-[1320px] mx-auto px-2 py-16">
                <div className="flex justify-between">
                    <h2 className="text-[32px] text-[#222] mb-2">
                        Prime Idea <br/>
                        outperformed benchmarks
                    </h2>
                    <ul className="flex">
                        <li className="ml-4 flex items-center text-2xl"> 
                            <span className="h-[14px] w-[25px] rounded-[15px] block bg-[#293C7D] mr-2"></span>
                            PrimeIdea Portfolio
                        </li>
                        <li className="ml-4 flex items-center text-2xl"> 
                            <span className="h-[14px] w-[25px] rounded-[15px] block bg-[#479AD2] mr-2"></span>
                            Nifty 50
                        </li>
                    </ul>
                </div>
                <div>
                    <Chart
                        options={optionssalesoverview}
                        series={seriessalesoverview}
                        type="line" // Ensure the type is set to "line"
                        height="295px"
                    />
                </div>
            </div>
        </section>
    )
}

export default PrimeIdeaBenchmarks;
