import { Search, Menu, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import Homeicon from "./svgs/home-icon";
import Suitecaseicon from "./svgs/suitecase-icon";
import Usericon from "./svgs/user-icon";
import Requesticon from "./svgs/request-icon";
import Applicationicon from "./svgs/application-icon";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className=" fixed top-[64px] left-0 right-0 bg-white border-b px-4 md:px-6 py-3 z-40">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={toggleMenu}
            className="min-[978px]:hidden p-2 hover:bg-gray-100 rounded-lg"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>

          <div className="hidden  min-[978px]:flex items-center gap-8">
            <div className="flex items-center justify-center gap-2 bg-[#F5F5F5] w-[170px] h-[38px] rounded-md opacity-100 whitespace-nowrap">
              <Homeicon />
              <span className="font-medium  text-black">Dashboard</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500 whitespace-nowrap">
              <Suitecaseicon />
              <span className="text-[#3D3D3D]">Listings</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500 whitespace-nowrap">
              <Usericon />
              <span className="text-[#3D3D3D]">Users</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500 whitespace-nowrap">
              <Requesticon />
              <span className="text-[#3D3D3D]">Request</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500 whitespace-nowrap">
              <Applicationicon />
              <span className="text-[#3D3D3D]">Applications</span>
            </div>
          </div>
        </div>
        <div className="relative">
          <Search className="w-6 h-6 absolute left-3 top-1/2 transform -translate-y-1/2 text-[#3D3D3D]" />
          <Input
            style={{
              fontFamily: "Euclid Circular B, sans-serif",
            }}
            placeholder="Search listings, users here..."
            className="pl-10 w-full md:w-64 bg-[#E4E4E4] "
          />
        </div>
      </div>
      {isMenuOpen && (
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
      )}
    </nav>
  );
}
