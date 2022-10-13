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
    <div className="mx-6 h-screen flex flex-col justify-center text-center">
      <div className="flex flex-col justify-center items-center relative -top-16">
        <header className="mb-6">
          <img src={logoBlue} className="w-40 mb-9 inline" alt="adopet logo" />
          <Text color="blue">
            Já tem conta?{" "}
            <span className="font-semibold">Faça seu login:</span>
          </Text>
        </header>
        <form action="" className="w-[100%]">
          <Input
            label="Email"
            type="email"
            id="email"
            placeholder="Insira seu email"
          />
          <Input
            label="Senha"
            type="password"
            id="password"
            placeholder="Insira sua senha"
          />
          <Button margin={"1.5rem 0 0 0"}>Entrar</Button>
        </form>
      </div>
    </div>
  );
}
