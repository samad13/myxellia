import Homeicon from "./svgs/home-icon";
import Suitecaseicon from "./svgs/suitecase-icon";
import Usericon from "./svgs/user-icon";
import Requesticon from "./svgs/request-icon";
import Applicationicon from "./svgs/application-icon";

const MobileViewNavigation = () => {
  return (
   <div className="min-[978px]:hidden mt-4 pb-4 border-t pt-4">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 text-gray-700 py-2">
              <Homeicon />
              <span className="font-medium  text-black">Dashboard</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500 py-2">
              <Suitecaseicon />
              <span className="text-[#3D3D3D]">Listings</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500 py-2">
              <Usericon />
              <span className="text-[#3D3D3D]">Users</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500 py-2">
              <Requesticon />
              <span className="text-[#3D3D3D]">Request</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500 py-2">
              <Applicationicon />
              <span className="text-[#3D3D3D]">Applications</span>
            </div>
          </div>
        </div>
  )
}

export default MobileViewNavigation

