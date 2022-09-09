import { Text } from "../../components/Text";
import Button from "../../components/Button";
import { LogoWhite } from "../../utils/exportSVG";
import ilustration from "../../assets/background/illustration.svg";

export default function Login() {
  return (
    <>
      <div className="bg-secondary flex flex-col items-center justify-center h-screen px-14">
        <div className="text-center flex flex-col items-center h-4/5">
          <span className="pb-4">
            <LogoWhite />
          </span>
          <Text weight="bold" size="title" className="pb-5">
            Boas-vindas!
          </Text>
          <Text weight="thin" className="pb-6">
            Que tal mudar sua vida adotando seu novo melhor amigo? Vem com a
            gente!
          </Text>
          <Button>Já tenho conta</Button>
          <Button>Quero me cadastrar</Button>
        </div>
        <div className="absolute -bottom-8">
          <img src={ilustration} alt="" />
        </div>
      </div>
    </>
  );
}
