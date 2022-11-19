import { createContext, ReactNode, useContext } from "react";

interface CardapioContextProps {
  categories: string[];
  getItems: () => Promise<void>;
  newCategorie: () => Promise<void>;
  newItem: () => Promise<void>;
}

const CardapioContext = createContext<CardapioContextProps>(
  {} as CardapioContextProps
);

export function CardapioProvider({ children }: { children: ReactNode }) {
  const categories = ["teste"];

  async function getItems() {}
  async function newCategorie() {}
  async function newItem() {}

  return (
    <CardapioContext.Provider
      value={{ categories, getItems, newCategorie, newItem }}
    >
      {children}
    </CardapioContext.Provider>
  );
}

export function useCardapio() {
  const cardapio = useContext(CardapioContext);
  return cardapio;
}
