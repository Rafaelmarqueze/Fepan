"use client";
import {
  DigitalMenuSection,
  ContentWrapper,
  LogosRow,
  Divider,
  CTAButton,
} from "./styles"
import Image from "next/image"

export default function DigitalMenu() {
  return (
    <DigitalMenuSection id="cardapio">
      <div className="container">
        <ContentWrapper>
          
          <LogosRow>
            <Image className="logo" src="/images/fepan-logo.png" width={150} height={70} alt="FE PAN" />
            <span>×</span>
            <strong className="brand-placeholder">SUA MARCA</strong>
          </LogosRow>

          <p className="subtitle">DESENVOLVIMENTO PERSONALIZADO</p>

          <h1>
            SUA MARCA.
            <span>SUA RECEITA.</span>
          </h1>

          <Divider />

          <p className="muted">Uma ideia pode se transformar no seu próximo produto.</p>

          <strong className="emphasis">
            FORMATO, TEXTURA E SABOR PENSADOS PARA A SUA OPERAÇÃO.
          </strong>

          <CTAButton href="#contato">
            FALE COM NOSSO TIME
          </CTAButton>

        </ContentWrapper>
      </div>
    </DigitalMenuSection>
  )
}
