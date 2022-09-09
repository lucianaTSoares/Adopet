import { HomeIcon, MailIcon, LogoWhite } from "../../utils/exportSVG";

export default function Navbar() {
  return (
    <nav className="absolute h-32 w-screen flex  items-center">
      <div className="flex gap-12 px-12">
        <span className="hidden sm:block">
          <LogoWhite width={128} height={30} />
        </span>
        <HomeIcon color={"text-icon-white"} />
        <MailIcon color={"text-icon-white"} />
      </div>
    </nav>
  );
}
