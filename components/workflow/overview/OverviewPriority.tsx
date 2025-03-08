"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { priority: "Highest", value: 10 },
  { priority: "High", value: 8 },
  { priority: "Medium", value: 2 },
  { priority: "Low", value: 3 },
  { priority: "Lowest", value: 7 },
];

const chartConfig = {
  value: {
    label: "Priority",
    color: "hsl(var(--chart-1))", 
  },
} satisfies ChartConfig;
import React from 'react'
import OverviewHeader from './OverviewHeader'


const OverviewPriority = () => {
  if (!chartConfig || !chartConfig.value || !chartConfig.value.label) {
    return <div>Error: Invalid chart configuration.</div>
  }

  return (
    <section className="bg-white w-full flex flex-col justify-center items-center gap-1 p-5 rounded-md drop-shadow-sm border-[1px] border-gray-200 min-h-[260px]">
      <OverviewHeader
        item={{ 
          title: 'Priority breakdown', 
          description: 'Get a holistic view of how work is being prioritized.', 
          descriptionTextRef: 'How to manage priorities for projects', 
          descriptionRef: '/'
        }} 
      />
      
      <div className="w-full">
        <ChartContainer config={chartConfig}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <XAxis
                dataKey="priority"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
              />
              <Bar dataKey="value" fill="#E8E8E8" radius={[4, 4, 0, 0]} />
              <ChartTooltip content={<ChartTooltipContent />} cursor={false} />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </div>
    </section>
  );
};

export default OverviewPriority;