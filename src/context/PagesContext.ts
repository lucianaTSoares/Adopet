import { createContext, Dispatch, SetStateAction } from "react";

type PageContextType = {
  backgroundConfig: {
    color?: string;
    hidePetsDecoration?: boolean;
    hidePatDecoration?: boolean;
  };
  setBackgroundConfig: Dispatch<
    SetStateAction<{
      color?: string;
      hidePetsDecoration: boolean;
      hidePatDecoration: boolean;
    }>
  >;
};

export const PagesContext = createContext<PageContextType>({
  backgroundConfig: {},
  setBackgroundConfig: () => {},
});
