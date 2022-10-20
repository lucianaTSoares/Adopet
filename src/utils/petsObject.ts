import image1 from "../assets/petsImage/Imagem Dunga.svg";
import image2 from "../assets/petsImage/Imagenm Lua.svg";
import image3 from "../assets/petsImage/Imagem - Amora.svg";
import image4 from "../assets/petsImage/Imagem - Yoda.svg";

type ArrayPets = {
  name: string;
  age: string;
  size: string;
  characters: string;
  local: string;
  image: string;
};

const pets: ArrayPets[] = [
  {
    name: "Dunga",
    age: "2 anos",
    size: "Porte pequeno",
    characters: "Calmo e educado",
    local: "Rio de Janeiro (RJ)",
    image: image1,
  },
  {
    name: "Felícia",
    age: "3 meses",
    size: "Porte pequeno",
    characters: "Ativa e carinhosa",
    local: "Nova Iguaçu (RJ)",
    image: image2,
  },
  {
    name: "Sirius",
    age: "6 meses",
    size: "Porte grande",
    characters: "Ativo e educado",
    local: "São Paulo (SP)",
    image: image3,
  },
  {
    name: "Yoda",
    age: "1 ano",
    size: "Porte médio",
    characters: "Ativo e carinhoso",
    local: "Belo Horizonte (SC)",
    image: image4,
  },
  {
    name: "Yoda",
    age: "1 ano",
    size: "Porte médio",
    characters: "Ativo e carinhoso",
    local: "Belo Horizonte (SC)",
    image: image4,
  },
];

export default pets;
