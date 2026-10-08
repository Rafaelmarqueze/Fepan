"use client";
import { HeroSection, HeroContent, Title, Subtitle, CTAButton } from './styles'

export default function Hero() {
  return (
    <HeroSection id="inicio">
      <div className="container">
        <HeroContent>
          <Subtitle>PANIFICAÇÃO · QUALIDADE · EXPERIÊNCIA</Subtitle>
          <Title>
            O PÃO QUE TRANSFORMA <span>CADA MORDIDA.</span>
          </Title>
          <p>
            Na FE PAN, acreditamos que um grande produto começa por uma grande base.
            Desenvolvemos pães com qualidade, personalidade e consistência para marcas
            que entendem que cada detalhe importa.
          </p>
          <CTAButton href="#produtos">CONHEÇA NOSSOS PRODUTOS <span aria-hidden="true">→</span></CTAButton>
        </HeroContent>
      </div>
    </HeroSection>
  )
}