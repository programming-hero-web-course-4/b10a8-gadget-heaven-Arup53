import { Tooltip } from "flowbite-react";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import {
  Area,
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Scatter,
  XAxis,
  YAxis,
} from "recharts";

function StatisticsDisplay() {
  const data = useLoaderData();

  return (
    <div className="flex justify-center">
      <ComposedChart
        width={1000}
        height={400}
        data={data}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <XAxis dataKey="product_title" />
        <YAxis />
        <Legend />
        <CartesianGrid stroke="#f5f5f5" />
        <Area type="monotone" dataKey="price" fill="#8884d8" stroke="#8884d8" />
        <Bar dataKey="price" barSize={20} fill="#413ea0" />
        <Scatter dataKey="rating" fill="red" />
      </ComposedChart>
    </div>
  );
}

export default StatisticsDisplay;
