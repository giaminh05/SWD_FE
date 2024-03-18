import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import PlayCircleOutlineRoundedIcon from "@mui/icons-material/PlayCircleOutlineRounded";
import LocalMoviesOutlinedIcon from "@mui/icons-material/LocalMoviesOutlined";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";

import { Card, CardHeader } from "@nextui-org/react";
import PieChart from "../chart/pieChart";
import LineChart from "../chart/lineChart";
import { BarChart } from "../chart/barCharts";
import "../App.css";

function Dashboard() {
  return (
    <div>
      <div className="flex m-4 justify-evenly">
        <div className="">
          <Card className="w-[230px] bg-teal-200">
            <CardHeader className="justify-between">
              <div className="flex gap-5">
                <div className="text-lg  bg-white rounded-[90px]">
                  <AccountCircleOutlinedIcon
                    sx={{
                      fontSize: 50,
                    }}
                  />
                </div>
                <div className="flex flex-col items-start justify-center gap-1">
                  <h5 className="text-sm tracking-tight text-default-600">
                    Tổng Số Người Dùng
                  </h5>
                  <h4 className="text-lg font-semibold leading-none text-default-600">
                    12.031
                  </h4>
                </div>
              </div>
            </CardHeader>
          </Card>
        </div>
        <div className="">
          <Card className="w-[230px] bg-purple-200">
            <CardHeader className="justify-between">
              <div className="flex gap-5">
                <div className="bg-white rounded-[90px]">
                  <PlayCircleOutlineRoundedIcon
                    sx={{
                      fontSize: 50,
                    }}
                  />
                </div>

                <div className="flex flex-col items-start justify-center gap-1">
                  <h5 className="text-sm tracking-tight text-default-600">
                    Tổng Lượt Truy Cập
                  </h5>
                  <h4 className="text-lg font-semibold leading-none text-default-600">
                    128.036.108
                  </h4>
                </div>
              </div>
            </CardHeader>
          </Card>
        </div>
        <div className="">
          <Card className="w-[230px] bg-red-200">
            <CardHeader className="justify-between">
              <div className="flex gap-5">
                <div className="bg-white rounded-[90px]">
                  <LocalMoviesOutlinedIcon
                    sx={{
                      fontSize: 50,
                    }}
                  />
                </div>

                <div className="flex flex-col items-start justify-center gap-1">
                  <h5 className="text-sm tracking-tight text-default-600">
                    Số Lượng Lan
                  </h5>
                  <h4 className="text-lg font-semibold leading-none text-default-600">
                    553
                  </h4>
                </div>
              </div>
            </CardHeader>
          </Card>
        </div>
        <div className="">
          <Card className="w-[230px] bg-green-200">
            <CardHeader className="justify-between">
              <div className="flex gap-5">
                <div className="bg-white rounded-[90px]">
                  <PaidOutlinedIcon
                    sx={{
                      fontSize: 50,
                    }}
                  />
                </div>

                <div className="flex flex-col items-start justify-center gap-1">
                  <h5 className="text-sm tracking-tight text-default-600">
                    Tổng Doanh Thu
                  </h5>
                  <h4 className="text-lg font-semibold leading-none text-default-600">
                    12.298.103
                  </h4>
                </div>
              </div>
            </CardHeader>
          </Card>
        </div>
      </div>

      <div className="chart">
        <PieChart />
        <LineChart />
      </div>

      <div className="barchart">
        <BarChart />
      </div>
    </div>
  );
}

export default Dashboard;
