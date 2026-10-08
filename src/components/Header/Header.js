"use client";
import { useState } from 'react'
import { HeaderContainer, Nav, Logo, NavLinks, MobileMenuButton } from './styles'
import Image from 'next/image'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <HeaderContainer>
      <div className="container">
        <Nav>
          <Logo href="#inicio" aria-label="FE PAN — início">
            <Image
              src="/images/fepan-logo.png"
              alt="FE PAN"
              width={150}
              height={70}
              priority
            />
          </Logo>
          
          <MobileMenuButton
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </MobileMenuButton>

          <NavLinks $isOpen={isOpen}>
            <li><a href="#sobre">A FE PAN</a></li>
            <li><a href="#produtos">PRODUTOS</a></li>
            <li><a href="#qualidade">QUALIDADE</a></li>
            <li><a href="#cardapio">PERSONALIZE</a></li>
            <li><a href="#contato">CONTATO</a></li>
          </NavLinks>
        </Nav>
      </div>
    </HeaderContainer>
  )
}