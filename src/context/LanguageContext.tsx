"use client";

import React, { createContext, useState, useContext, useEffect, ReactNode } from "react";
import { pt } from "../db/pt"; // Atualizado para .ts implicitamente
import { en } from "../db/en"; // Atualizado para .ts implicitamente
import { Translation } from "../db/types"; // Importar a interface

// Definir tipos para o contexto
interface LanguageContextType {
  language: string;
  texts: Translation;
  toggleLanguage: () => void;
}

// Criar contexto com tipo ou valor padrão inicial definido
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Definir tipo para as props do Provider
interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<string>("pt"); // Adicionar tipo explícito
  const [texts, setTexts] = useState<Translation>(pt); // Adicionar tipo explícito

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage && (savedLanguage === "pt" || savedLanguage === "en")) { // Verificar se é 'pt' ou 'en'
      setLanguage(savedLanguage);
      setTexts(savedLanguage === "pt" ? pt : en);
    }
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === "pt" ? "en" : "pt";
    setLanguage(newLanguage);
    setTexts(newLanguage === "pt" ? pt : en);
    localStorage.setItem("language", newLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, texts, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook customizado com verificação de contexto
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};