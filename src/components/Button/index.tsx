import { Text } from "../Text";

interface ButtonProps {
  children: React.ReactNode;
}

export default function Login({ children }: ButtonProps) {
  return (
    <button className="bg-button-default rounded-md hover:bg-button-hover transition text-white w-44 drop-shadow-md mb-4 py-2">
      <Text weight="medium">{children}</Text>
    </button>
  );
}
