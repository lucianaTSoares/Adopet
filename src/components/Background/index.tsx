import Format1 from "../../assets/background/format1.svg";
import Format2 from "../../assets/background/format2.svg";
import ilustration from "../../assets/background/illustration.svg";

interface BackgroundProps {
  children: React.ReactNode;
}

export default function Background({ children }: BackgroundProps) {
  return (
    <div className="absolute bg-secondary w-screen">
      <div className="relative z-10">{children}</div>
      <div className="absolute top-0 left-0">
        <img src={Format1} alt="" />
      </div>
      <div className="flex justify-center items-center">
        <img className="absolute right-0 top-1/4 w-17" src={Format2} alt="" />
      </div>
      <div className="flex justify-center">
        <img className="absolute bottom-10" src={ilustration} alt="" />
      </div>
    </div>
  );
}
