import { Buttons } from "./Buttons";
import { Links } from "./Links";
import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="flex p-4 border-b border-gray-300 text-center items-center bg-white ">
      <div className="flex-1">
        <Logo />
      </div>
      <nav className="flex-1">
        <Links />
      </nav>
      <div className="flex-1">
        <Buttons />
      </div>
    </header>
  );
}
