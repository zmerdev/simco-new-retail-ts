"use client"

import { useState, useEffect } from 'react'
import { Line, LineChart } from "recharts"
import { Button } from "@/components/ui/button"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

// Define the shape of our data point
interface DataPoint {
  date: string
  value: number
}

export function LineGraphTest() {
  // Initialize state with some sample data
  const [data, setData] = useState<DataPoint[]>([
    { date: "Jan 2023", value: 400 },
    { date: "Feb 2023", value: 300 },
    { date: "Mar 2023", value: 600 },
    { date: "Apr 2023", value: 800 },
    { date: "May 2023", value: 500 },
  ])

  // Function to update the dataset
  const updateData = () => {
    const newData = data.map(item => ({
      ...item,
      value: Math.floor(Math.random() * 1000)
    }))
    setData(newData)
  }

  // Effect to simulate data updates (every 5 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      updateData()
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Dynamic Line Chart</h2>
      <ChartContainer
        className="min-h-[400px]"
        config={{
          value: {
            label: "Value",
            color: "hsl(var(--chart-1))",
          },
        }}
      >
        <LineChart
          accessibilityLayer
          data={data}
          margin={{
            top: 20,
            right: 20,
            left: 20,
            bottom: 20,
          }}
        >
          <ChartTooltip content={<ChartTooltipContent />} />
          <Line
            type="monotone"
            dataKey="value"
            stroke="var(--color-value)"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ChartContainer>
      <Button onClick={updateData} className="mt-4">
        Update Data
      </Button>
    </div>
  )
}