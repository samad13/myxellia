
import { Bar, BarChart, XAxis, YAxis } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { chartConfig, chartData } from "@/hooks/useSalesoverview";
const Chart = () => {
  return (
    <> <ChartContainer
              config={chartConfig}
              className="h-48 sm:h-56 px-0  w-full -ml-2 -mt-4 lg:-mb-4"
            >
              <BarChart
                data={chartData}
                margin={{ top: 5, right: 10, left: 10, bottom: 5 }}
                barCategoryGap="20%"
              >
                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: "##919191" }}
                  className="font-medium"
                />
                <YAxis
                  axisLine={true}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: "#64748b" }}
                  tickFormatter={(value) => (value === 0 ? value : `${value}m`)}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="value1" fill="#3b82f6" radius={[2, 2, 0, 0]} />
                <Bar dataKey="value2" fill="#10b981" radius={[2, 2, 0, 0]} />
                <Bar dataKey="value3" fill="#ef4444" radius={[2, 2, 0, 0]} />
              </BarChart>
            </ChartContainer></>
  )
}

export default Chart