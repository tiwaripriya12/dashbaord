import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "9:00AM", pv: 2400, amt: 0 },
  { name: "10:00AM", pv: 1398, amt: 100 },
  { name: "11:00AM", pv: 9800, amt: 50 },
  { name: "12:00PM", pv: 9800, amt: 200 },
  { name: "01:00PM", pv: 5000, amt: 0 },
  { name: "02:00PM", pv: 5000, amt: 0 },
  { name: "03:00PM", pv: 6800, amt: 0 },
];

const BarChartComponent = () => {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Hourly Net Sales</h2>

        <div className="flex items-center space-x-4">
          {/* Add your filter component here */}
          {/* Example: */}
          <select className="border rounded px-2 py-1 mr-7">
            <option value="day">Day</option>
            <option value="week">Week</option>
            <option value="month">Month</option>
          </select>
        </div>
      </div>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar width={20} dataKey="pv" fill="#438AFF" />
            <Bar dataKey="" fill="" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarChartComponent;
