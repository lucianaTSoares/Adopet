import { Text } from "../../components/Text";
import Button from "../../components/Button";
import { LogoWhite } from "../../utils/exportSVG";
import { PagesContext } from "../../context/PagesContext";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from '../../assets/logo/adopet-white.svg'

export default function Introduction() {
  const usePages = () => useContext(PagesContext);
  const { setBackgroundConfig } = usePages();

  useEffect(
    () =>
      setBackgroundConfig({
        color: "secondary",
        hidePetsDecoration: false,
        hidePatDecoration: true,
      }),
    []
  );

  return (
    <div className="flex flex-col items-center justify-center h-screen px-14">
      <div className="text-center flex flex-col items-center h-[60%]">
        <header className="mb-7">
          <img src={Logo} alt="adopet logo" className="w-56 inline"/>
          <Text tag="h1" weight="bold" size="title" className="mt-7 mb-4">
            Boas-vindas!
          </Text>
          <Text weight="thin">
            Que tal mudar sua vida adotando seu novo melhor amigo? Vem com a
            gente!
          </Text>
        </header>
        <Link to="/login">
          <Button>Já tenho conta</Button>
        </Link>
        <Link to="/register">
          <Button>Quero me cadastrar</Button>
        </Link>
      </div>
    </div>
  );
}
