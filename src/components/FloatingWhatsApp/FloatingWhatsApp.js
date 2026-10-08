"use client";

import { useState, useEffect } from "react";
import { FloatingButton } from './styles';
import Image from "next/image";

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
      <Image src="/images/Whatsapp.png" alt="" width={32} height={32} />
    </FloatingButton>
  );
}