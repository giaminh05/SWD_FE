import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { barData } from "../data/bar.data";
import { useState } from "react";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export const options = {
  chart: {
    title: "Biểu đồ lượt xem của các thể loại phim",
    subtitle: "Từ tháng 1 - tháng 12",
  },
  colors: ["rgb(53, 138, 148)", "rgb(37, 11, 165)", "#188310", "#000000"],
};

export function BarChart() {
  const [userData, setUserData] = useState({
    labels: barData.map((data) => data.month),
    datasets: [
      {
        label: "Hành động",
        data: barData.map((data) => data.viewhd),
        backgroundColor: ["rgba(75,192,192,1)"],
      },
      {
        label: "Tình cảm",
        data: barData.map((data) => data.viewtc),
        backgroundColor: ["#FFB6C1"],
      },
      {
        label: "Kinh dị",
        data: barData.map((data) => data.viewkd),
        backgroundColor: ["#DA70D6"],
      },
      {
        label: "Hài hước",
        data: barData.map((data) => data.viewhh),
        backgroundColor: ["#f3ba2f"],
      },
      {
        label: "Khác",
        data: barData.map((data) => data.viewkhac),
        backgroundColor: ["#DDDDDD"],
      },
    ],
  });
  const options = {
    plugins: {
      tooltip: {
        enabled: true,
      },

      legend: {
        position: "bottom",
        labels: {
          usePointStyle: true,
          borderRadius: 1,
        },
      },
    },
  };
  return (
    <Card className="max-w-full h-[700px]">
      <CardHeader className="flex-wrap">
        <p className="w-full text-lg font-semibold">
          Biểu đồ lượt xem của các thể loại phim
        </p>
        <p className="text-md text-slate-500">Từ tháng 1 - tháng 12</p>
      </CardHeader>
      <Divider />
      <CardBody>
        <Bar width="750px" height="350px" data={userData} options={options} />
      </CardBody>
    </Card>
  );
}

function Navbar() {
  return (
    <nav className="navbar">
      <img src="netflix-logo.png" alt="Netflix Logo" />
      <ul className="nav-links">
        <li>Home</li>
        <li>Movies</li>
        <li>TV Shows</li>
        <li>My List</li>
      </ul>
    </nav>
  );
}

export default Navbar;
