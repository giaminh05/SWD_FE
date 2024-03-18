import { useState } from "react";
import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
import { lineData } from "../data/line.data";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

export function LineChart() {
  const [userData, setUserData] = useState({
    labels: lineData.map((data) => data.month),
    datasets: [
      {
        label: "Lượt Truy Cập",
        data: lineData.map((data) => data.access),
        backgroundColor: ["rgba(75,192,192,1)"],
      },
    ],
  });
  const options = {
    plugins: {
      tooltip: {
        enabled: true,
      },
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
    <Card className="w-full ml-6">
      <CardHeader className="flex-wrap">
        <p className="w-full font-semibold text-md">
          Biểu đồ số lượng truy cập trang web từ tháng 1 - tháng 12
        </p>
      </CardHeader>
      <Divider />
      <CardBody>
        <Line data={userData} options={options} />
      </CardBody>
    </Card>
  );
}

export default LineChart;
