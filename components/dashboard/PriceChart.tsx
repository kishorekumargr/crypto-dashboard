"use client";

import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Card } from "../ui/card";

const data = [
  { time: "07:00", price: 2388 },
  { time: "09:00", price: 2397 },
  { time: "11:00", price: 2392 },
  { time: "13:00", price: 2401 },
  { time: "15:00", price: 2408 },
  { time: "17:00", price: 2397 },
];

export default function PriceChart() {
  return (
    <Card className="h-105">
      <h3 className="font-semibold mb-4">ETH / USD</h3>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="time" />
          <Tooltip />
          <Line type="monotone" dataKey="price" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
}
