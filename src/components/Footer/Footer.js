"use client";
import Image from "next/image"
import { FooterContainer, FooterContent, Copyright } from "./styles"

export default function Footer() {
  return (
    <FooterContainer>
      <div className="container">

        <FooterContent>
          <div className="logo-section">
            <Image
              src="/images/fepan-logo.png"
              alt="FE PAN"
              width={140}
              height={60}
            />
          </div>

          <nav className="socials" aria-label="Contato comercial">
            <a href="#contato">FALE COM A FE PAN <span aria-hidden="true">↗</span></a>
          </nav>

          <div className="contacts">
            <div>Panificação que faz parte da experiência.</div>
          </div>
        </FooterContent>

        <Copyright>
          © 2026 FE PAN. Todos os direitos reservados.
        </Copyright>

      </div>
    </FooterContainer>
  )
}
