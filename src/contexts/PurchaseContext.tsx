import { createContext, ReactNode, useState } from "react";

interface PurchaseContextData {
  openModal: () => void;
  closeModal: () => void;
  isModalOpen: boolean;

  openCart: () => void;
  isCartOpen: boolean;

  openFavorite: () => void;
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

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  function openCart() {
    if (isFavoriteOpen) {
      setIsFavoriteOpen(false);

      setIsCartOpen(true);
    }

    setIsCartOpen(!isCartOpen);
  }

  function openFavorite() {
    if (isCartOpen) {
      setIsCartOpen(false);

      setIsFavoriteOpen(true);
    }

    setIsFavoriteOpen(!isFavoriteOpen);
  }

  return (
    <PurchaseContext.Provider
      value={{
        openModal,
        closeModal,
        isModalOpen,
        openCart,

        isCartOpen,
        openFavorite,

        isFavoriteOpen,
      }}
    >
      {children}
    </PurchaseContext.Provider>
  );
}
