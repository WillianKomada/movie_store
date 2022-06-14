import { createContext, ReactNode, useContext, useState } from "react";
import { MovieContext } from "./MovieContext";

interface PurchaseContextData {
  handleOpenModal: () => void;
  handleCloseModal: () => void;
  isModalOpen: boolean;

  handleOpenCart: () => void;
  isCartOpen: boolean;

  handleOpenFavorite: () => void;
  isFavoriteOpen: boolean;
}

interface PurchaseProviderProps {
  children: ReactNode;
}

export const PurchaseContext = createContext({} as PurchaseContextData);

export function PurchaseProvider({ children }: PurchaseProviderProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isFavoriteOpen, setIsFavoriteOpen] = useState(false);

  const { handleClearMovieCartStorage } = useContext(MovieContext);

  function handleOpenModal() {
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);

    handleClearMovieCartStorage();
  }

  function handleOpenCart() {
    if (isFavoriteOpen) {
      setIsFavoriteOpen(false);

      setIsCartOpen(true);
    }

    setIsCartOpen(!isCartOpen);
  }

  function handleOpenFavorite() {
    if (isCartOpen) {
      setIsCartOpen(false);

      setIsFavoriteOpen(true);
    }

    setIsFavoriteOpen(!isFavoriteOpen);
  }

  return (
    <PurchaseContext.Provider
      value={{
        handleOpenModal,
        handleCloseModal,
        isModalOpen,
        handleOpenCart,

        isCartOpen,
        handleOpenFavorite,

        isFavoriteOpen,
      }}
    >
      {children}
    </PurchaseContext.Provider>
  );
}
