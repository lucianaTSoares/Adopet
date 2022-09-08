import { Text } from "../../components/Text";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import logo from "../../assets/logo/adopet-white.svg";

export default function Login() {
  return (
    <div className="bg-secondary flex flex-col justify-center items-center h-screen xsm:px-14">
      <img className="pb-6" src={logo} alt="logo adopet" />
      <Text weight="bold" size="title" className="pb-5">
        Boas-vindas!
      </Text>
      <Text weight="thin" className="pb-6">
        Que tal mudar sua vida adotando seu novo melhor amigo? Vem com a gente!
      </Text>
      <Button>Já tenho conta</Button>
      <Button>Quero me cadastrar</Button>
    </div>
  );
}
