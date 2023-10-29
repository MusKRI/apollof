// ***** Library Imports *****
import { Menu } from "lucide-react";

// ***** Local Imports *****
import { Button } from "../ui/button/button";
import UserDropdown from "./components/user-dropdown";

// hooks
import { useSidebar } from "../sidebar/hooks/useSidebar";

const Navbar = () => {
  const { setIsOpen } = useSidebar();

  return (
    <header className="px-4 h-16 border-b shadow-sm fixed w-full bg-white backdrop-blur-sm z-[40]">
      <div className="flex items-center justify-between h-full">
        <div className="flex items-center gap-3">
          <Button size="icon" variant="ghost" onClick={setIsOpen}>
            <Menu className="w-5 h-5" />
          </Button>

          <h1 className="text-xl font-bold">Apollo Admin</h1>
        </div>

        <div className="flex items-center gap-3">
          <UserDropdown />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
