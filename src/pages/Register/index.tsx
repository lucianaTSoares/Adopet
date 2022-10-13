import Button from "../../components/Button";
import Input from "../../components/Input";
import { Text } from "../../components/Text";
import logoBlue from "../../assets/logo/adopet-color.svg";
import { useContext, useEffect } from "react";
import { PagesContext } from "../../context/PagesContext";

export default function Register() {
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
      <div className="flex flex-col justify-center items-center relative top-9">
        <header>
          <img src={logoBlue} className="w-40 mb-6 inline" alt="adopet logo"/>
          <Text color="blue">
            <div className="mb-1 font-semibold">Ainda não tem cadastro?</div>{" "}
            Então, antes de buscar seu melhor amigo, precisamos de alguns dados:
          </Text>
        </header>
        <form action="" className="w-[100%]">
          <Input
            label="Email"
            id="email"
            placeholder="Escolha seu melhor email"
            type="email"
          />
          <Input
            label="Nome"
            id="nome"
            placeholder="Digite seu nome completo"
          />
          <Input
            label="Senha"
            type="password"
            id="password"
            placeholder="Crie uma senha"
          />
          <Input
            label="Confirme sua senha"
            type="password"
            id="passwordConfirmation"
            placeholder="Repita a senha criada acima"
          />
          <Button margin={"1.5rem 0 0 0"}>Cadastrar</Button>
        </form>
      </div>
    </div>
  );
}
