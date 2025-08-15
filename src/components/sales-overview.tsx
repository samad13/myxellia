
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ToggleLeft from "../components/svgs/toggleLeft";
import ToggleRight from "./svgs/toggleRight";
import Chart from "./barChart";
import Statistiscs from "./statistiscs";

export function SalesOverview() {
  return (
    <Card className="mb-4">
      <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pb-0">
        <div>
          <CardTitle className="text-base font-semibold text-[#191919">
            Sales Overview
          </CardTitle>
          <p className="text-xs text-gray-500">
            Showing overview Jan 2022 - Sep 2022
          </p>
        </div>
        <Button
          variant="outline"
          size="sm"
          className="w-full sm:w-auto bg-transparent rounded-full gap-[2px] p-[8px] border border-solid text-[#191919] px-4 h-10 text-xs"
        >
          View Transactions
        </Button>
      </CardHeader>

      <CardContent>
        <div className="flex flex-wrap gap-1 sm:gap-2 mb-0  justify-end">
          <Button
            variant="ghost"
            size="sm"
            className="text-[#3D3D3D] flex-1 sm:flex-none h-7 text-xs px-4"
          >
            1 Week
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="text-[#3D3D3D] flex-1 sm:flex-none h-7 text-xs px-4"
          >
            1 Month
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="text-[#3D3D3D] flex-1 sm:flex-none font-bold bg-[#E4E4E4] h-7 text-xs px-4"
          >
            1 Year
          </Button>
        </div>
      </CardContent>
      <div>
        <hr />
      </div>

      <div className="flex flex-col lg:flex-row gap-0">
        <CardContent className=" flex-1 flex flex-col pb-2">
          <div className=" relative flex flex-col  -ml-4">
            <div className="flex items-center justify-between absolute inset-0 top-1/2 -translate-y-1/2 z-10 px-0">
              <Button
                variant="ghost"
                size="sm"
                className="absolute left-0 h-6 w-6 p-0 bg-[#E4E4E4] rounded-xl hover:bg-white shadow-sm"
              >
                <ToggleLeft />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="absolute -right-6 h-6 w-6 p-0 bg-[#E4E4E4] rounded-xl hover:bg-white shadow-sm"
              >
                <ToggleRight />
              </Button>
            </div>
          <Chart />
          </div>
        </CardContent>
        <Statistiscs />
      </div>
    </Card>
  );
}
