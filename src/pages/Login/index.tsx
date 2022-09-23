import Button from "../../components/Button";
import Input from "../../components/Input";
import { Text } from "../../components/Text";

export default function Login() {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen">
      Logo
      <Text color="blue" className="max-w-[86%]">
        Ainda não tem cadastro? <br />
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
      <Button margin={32}>Cadastrar</Button>
    </div>
  );
}
