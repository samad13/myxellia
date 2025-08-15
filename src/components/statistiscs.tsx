
import { CardContent, } from "@/components/ui/card";
import GreenArrow from "./svgs/greenArrow";
import TealArrow from "./svgs/tealArrow";
import RedArrow from "./svgs/redArrow";



const Statistiscs = () => {
  return (
    <CardContent>
          <div className="lg:w-95 flex flex-col">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
              <div className="p-4 border-2 border-[#E4E4E4] rounded-lg bg-white">
                <div className="text-lg sm:text-1xl font-bold text-blue-600 break-words">
                  ₦120,000,000.00
                </div>
                <div className="text-[10px] text-[#3D3D3D] font-medium flex items-center gap-2 mt-1">
                  Total Inflow
                  <span className="flex items-center gap-1">
                    <GreenArrow />

                    <span className="text-green-600 font-medium">2.5%</span>
                  </span>
                </div>
              </div>
              <div className="p-4 border-2 border-[#E4E4E4] rounded-lg bg-white">
                <div className="text-lg sm:text-1xl font-bold text-green-600 break-words">
                  ₦50,000,000.00
                </div>
                <div className="text-[10px] text-[#3D3D3D] font-medium flex items-center gap-2 mt-1">
                  MRR
                  <span className="flex items-center gap-1">
                    <GreenArrow />

                    <span className="text-green-600 font-medium">2.5%</span>
                  </span>
                </div>
              </div>
              <div className="p-4 border-2 border-[#E4E4E4] rounded-lg bg-white">
                <div className="text-lg sm:text-1xl font-bold text-teal-600 break-words">
                  ₦200,000,000.00
                </div>
                <div className="text-[10px] text-[#3D3D3D] font-medium flex items-center gap-2 mt-1">
                  Commission Revenue
                  <span className="flex items-center gap-1">
                    {" "}
                    <TealArrow />
                    <span className="text-green-600 font-medium">0.5%</span>
                  </span>
                </div>
              </div>
              <div className="p-4 border-2 border-[#E4E4E4] rounded-lg bg-white">
                <div className="text-lg sm:text-1xl font-bold text-red-600 break-words">
                  ₦100,000,000.00
                </div>
                <div className="text-[10px] text-[#3D3D3D]  font-medium flex items-center gap-2 mt-1">
                  GMV
                  <span className="flex items-center gap-1">
                    <RedArrow />

                    <span className="text-red-600 font-medium">0.5%</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
  )
}

export default Statistiscs