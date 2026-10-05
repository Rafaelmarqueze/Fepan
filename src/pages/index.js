"use client";
import { useState } from 'react'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import Commitment from '../components/Commitment/Commitment'
import DigitalMenu from '../components/DigitalMenu/DigitalMenu'
import FAQ from '../components/FAQ/FAQ'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'
import HB from '../components/HB/HB'
import FloatingWhatsApp from '../components/FloatingWhatsApp/FloatingWhatsApp'
import HomeProducts from '@/components/HomeProducts/HomeProducts';
import Head from 'next/head'

export default function Home() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  const handleWhatsAppClick = () => {
    setIsContactModalOpen(true)
  }

  const handleCloseContactModal = () => {
    setIsContactModalOpen(false)
  }

  return (
    <>
      <Head>
        <title>FE PAN | Panificação que transforma cada mordida</title>
        <meta
          name="description"
          content="Pães com qualidade, personalidade e consistência para marcas e operações profissionais de alimentação."
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <HB />
        <HomeProducts />
        <Commitment />
        <DigitalMenu />
        <FAQ />
        <Contact openModal={isContactModalOpen} onCloseModal={handleCloseContactModal} />
      </main>
      <Footer />
      <FloatingWhatsApp onClick={handleWhatsAppClick} />
    </>
  )
}