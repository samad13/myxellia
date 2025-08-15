import Bell from "./svgs/bell";
import Calculator from "./svgs/calculator";
import Calender from "./svgs/calender";
import Logo from "./svgs/logo";
import MessageIcon from "./svgs/message-icon";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-[#191919] text-white px-4 md:px-6 py-4  z-50">
      <div className="flex items-center justify-between">
        <Logo />
        <div className="flex items-center gap-2 md:gap-4">
          <Bell />
          <Calculator />
          <Calender />
 <MessageIcon />
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-900 font-semibold">
            D
          </div>
        </div>
      </div>
    </header>
  );
}
