import format1 from "../../assets/background/format1.svg";
import format2 from "../../assets/background/format2.svg";
import ilustration from "../../assets/background/illustration.svg";
import pats from "../../assets/background/pat.svg";

interface BackgroundProps {
  children: React.ReactNode;
  backgroundConfig: {
    color?: string;
    hidePetsDecoration?: boolean;
    hidePatDecoration?: boolean;
  };
}

export default function Background({
  children,
  backgroundConfig,
}: BackgroundProps) {
  console.log(backgroundConfig);
  return (
    <div
      className={`absolute ${
        backgroundConfig.color === "secondary" ? "bg-background-secondary" : "bg-white"
      }`}
    >
      <div className="relative z-10 w-screen ">{children}</div>
      <div className="absolute top-0 left-0">
        <img src={format1} alt="" />
      </div>
      <div className="flex justify-center items-center">
        <img className="absolute right-0 top-1/4 w-17" src={format2} alt="" />
      </div>
      <div
        className="justify-center mr-6"
        style={{
          display: backgroundConfig.hidePetsDecoration ? "none" : "flex",
        }}
      >
        <img className="absolute bottom-10" src={ilustration} alt="" />
      </div>
      <div
        className="absolute -top-4 right-0"
        style={{
          display: backgroundConfig.hidePatDecoration ? "none" : "unset",
        }}
      >
        <img src={pats} alt="" />
      </div>
    </div>
  );
}
