import { useState } from "react";
import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { pieData } from "../data/pie.data";

ChartJS.register(ArcElement, Tooltip, Legend);

export function PieChart() {
  const [userData, setUserData] = useState({
    labels: pieData.map((data) => data.category),
    datasets: [
      {
        label: "Tổng Lượt Xem",
        data: pieData.map((data) => data.view),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#FFB6C1",
          "#DA70D6",
          "#f3ba2f",
          "#DDDDDD",
        ],
      },
      {
        label: "Tổng Số Phim",
        data: pieData.map((data) => data.amount),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#FFB6C1",
          "#DA70D6",
          "#f3ba2f",
          "#DDDDDD",
        ],
      },
    ],
  });
  const options = {
    plugins: {
      tooltip: {
        enabled: true,
      },
      // datalabels: {
      //     formatter: (value: JSX.Element, context: JSX.Element) =>{
      //         return '';
      //     }
      // },
      legend: {
        // display: false,
        position: "bottom",
        // align: 'start' as const,
        labels: {
          usePointStyle: true,
          borderRadius: 1,
        },
      },
    },
  };

  return (
    <Card className="max-w-[450px] ">
      <CardHeader className="flex-wrap">
        <p className="w-full font-semibold text-md">
          Biểu đồ tỉ suất lượt xem và tổng số phim của các thể loại phim
        </p>
        <p className="text-md text-slate-500"></p>
      </CardHeader>
      <Divider />
      <CardBody>
        <Pie data={userData} options={options} />
      </CardBody>
    </Card>
  );
}

export default PieChart;
