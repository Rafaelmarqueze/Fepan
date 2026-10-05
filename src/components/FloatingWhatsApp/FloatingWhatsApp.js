"use client";

import { useState, useEffect } from "react";
import { FloatingButton } from './styles';

export default function FloatingWhatsApp({ onClick }) {
  const [jump, setJump] = useState(true);

  // Exemplo: parar de pular após 5 segundos para não irritar o usuário
  useEffect(() => {
    const timer = setTimeout(() => setJump(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <FloatingButton 
      onClick={onClick} 
      $jump={jump}
      aria-label="Fale com a equipe FE PAN"
      title="Fale com a equipe FE PAN"
    >
      <svg aria-hidden="true" viewBox="0 0 24 24" width="28" height="28" fill="none">
        <path d="M4 19.5 5.2 16a8 8 0 1 1 3 3l-4.2.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <circle cx="9" cy="12" r="1" fill="currentColor" />
        <circle cx="12" cy="12" r="1" fill="currentColor" />
        <circle cx="15" cy="12" r="1" fill="currentColor" />
      </svg>
    </FloatingButton>
  );
}