import { Text } from "../Text";

interface InputProps {
  type?: "text" | "password" | "email" | "tel" | "number";
  placeholder?: string;
  label?: string;
  multiple?: boolean;
  required?: boolean;
  id?: string;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
  type = "text",
  placeholder,
  label,
  multiple = false,
  required = true,
  id,
  handleChange,
}: InputProps) {
  return (
    <div className="mt-5 w-[100%]">
      <label htmlFor={id}>
        <Text color="gray">{label}</Text>
      </label>
      <input
        className="py-3 w-[100%] text-center px-4 mt-1 rounded-md shadow-input placeholder-[#BCBCBC] outline-none text-sm bg-[#F7F7F7] text-[#737380]"
        type={type}
        placeholder={placeholder}
        id={id}
        required={required}
        multiple={multiple}
        onChange={handleChange}
      />
    </div>
  );
}
