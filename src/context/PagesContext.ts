import { createContext, Dispatch, SetStateAction } from "react";

type PageContextType = {
  backgroundConfig: {
    color?: string;
    hideDecoration?: boolean;
  };
  setBackgroundConfig: Dispatch<
    SetStateAction<{ color: string; hideDecoration: boolean }>
  >;
};

export const PagesContext = createContext<PageContextType>({
  backgroundConfig: {
    color: "",
    hideDecoration: false,
  },
  setBackgroundConfig: () => {},
});
