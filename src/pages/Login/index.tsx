import { useContext, useEffect } from "react";
import logoBlue from "../../assets/logo/adopet-color.svg";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { Text } from "../../components/Text";
import { PagesContext } from "../../context/PagesContext";

export default function Login() {
  const usePages = () => useContext(PagesContext);
  const { setBackgroundConfig } = usePages();

  useEffect(
    () =>
      setBackgroundConfig({
        hidePetsDecoration: true,
        hidePatDecoration: false,
      }),
    []
  );

  return (
    <div className="mx-6 h-screen flex justify-center items-center">
      <div className="flex flex-col justify-center items-center absolute top-40">
        <img src={logoBlue} className="w-40 mb-6" alt="" />
        <Text color="blue">
          Já tem conta?{" "}
          <span className="font-semibold">Faça seu login agora!</span>
        </Text>
        <Input label="Email" id="email" placeholder="Insira seu email" />
        <Input label="Senha" id="password" placeholder="Insira sua senha" />
        <Button margin={"1.5rem 0 0 0"}>Entrar</Button>
      </div>
    </div>
  );
}
