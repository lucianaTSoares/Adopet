import { Text } from "../../components/Text";
import Pets from "../../utils/petsObject";

export default function Home() {
  return (
    <div className="w-screen h-screen relative top-16">
      <Text color="blue" weight="bold" className="mb-8">
        Olá! Veja os amigos disponíveis para adoção.
      </Text>
      <div className="overflow-auto h-[80vh]">
        {Pets.map((pet) => (
          <div className="bg-background-gray mb-4 py-4 px-6">
            <div className="flex items-center justify-between">
              <img src={pet.image} />
              <div>
                <Text color="blue" weight="bold" align="left">
                  {pet.name}
                </Text>
                <div className="mt-2 mb-7">
                  <Text color="gray" size="small" align="left">
                    {pet.age}
                  </Text>
                  <Text color="gray" size="small" align="left">
                    {pet.size}
                  </Text>
                  <Text color="gray" size="small" align="left">
                    {pet.characters}
                  </Text>
                </div>
                <Text color="gray" size="xsmall" align="left">
                  {pet.local}
                </Text>
                <Text color="gray" size="xxsmall" align="left">
                  Falar com o responsável
                </Text>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
