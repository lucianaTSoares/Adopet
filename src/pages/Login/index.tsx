import Button from "../../components/Button";
import Input from "../../components/Input";
import { Text } from "../../components/Text";
import logoBlue from "../../assets/logo/adopet-color.svg";
import { useContext, useEffect } from "react";
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
    <div className="mx-6 h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center mt-7">
        <img src={logoBlue} className="w-40" />
        <Text color="blue">
          Ainda não tem cadastro?
          Então, antes de buscar seu melhor amigo, precisamos de alguns dados:
        </Text>
        <Input
          label="Email"
          id="email"
          placeholder="Escolha seu melhor email"
          type="email"
        />
        <Input label="Nome" id="nome" placeholder="Digite seu nome completo" />
        <Input label="Senha" id="password" placeholder="Crie uma senha" />
        <Input
          label="Confirme sua senha"
          id="passwordConfirmation"
          placeholder="Repita a senha criada acima"
        />
        <Button margin={"1.5rem 0 0 0"}>Cadastrar</Button>
      </div>
    </div>
  );
}
