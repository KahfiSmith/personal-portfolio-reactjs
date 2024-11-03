import Navbar from "@/components/molecules/Navbar";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const Icon = navOpen ? X : Menu;

  return (
    <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40">
      <div className="max-w-screen-2xl w-full mx-auto px-4 flex items-center justify-end md:justify-center md:px-6">
        <button className="relative md:hidden" onClick={() => setNavOpen(!navOpen)}>
          <Icon className="bg-customSoft w-8 h-8 p-1 rounded-md hover:bg-customVerySoft active:scale-90" />
        </button>
        <Navbar navOpen={navOpen} />
      </div>
    </header>
  );
}
