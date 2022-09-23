import { Text } from "../../components/Text";
import Button from "../../components/Button";
import { LogoWhite } from "../../utils/exportSVG";
import { PagesContext } from "../../context/PagesContext";
import { useContext, useEffect } from "react";

export default function Introduction() {
  const usePages = () => useContext(PagesContext);
  const { setBackgroundConfig } = usePages();

  useEffect(
    () => setBackgroundConfig({ color: "secondary", hideDecoration: false }),
    []
  );

  return (
    <div className="flex flex-col items-center justify-center h-screen px-14">
      <div className="text-center flex flex-col items-center h-[60%]">
        <span className="pb-4">
          <LogoWhite />
        </span>
        <Text weight="bold" size="title" className="pb-5">
          Boas-vindas!
        </Text>
        <Text weight="thin" className="pb-6 max-w-[86%]">
          Que tal mudar sua vida adotando seu novo melhor amigo? Vem com a
          gente!
        </Text>
        <Button>Já tenho conta</Button>
        <Button>Quero me cadastrar</Button>
      </div>
    </div>
  );
}
