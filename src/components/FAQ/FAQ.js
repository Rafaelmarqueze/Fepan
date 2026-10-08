"use client";
import { useState } from 'react'
import { FAQSection, FAQList, FAQItem, Question, Answer } from './styles'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "A FE PAN atende pessoa física?",
      answer: "Nossa comunicação é voltada principalmente para empresas e operações profissionais de alimentação."
    },
    {
      question: "Quais regiões são atendidas?",
      answer: "A cobertura é confirmada conforme a disponibilidade logística para cada região. Fale com nosso time para consultar sua localidade."
    },
    {
      question: "Existe pedido mínimo?",
      answer: "As condições comerciais variam conforme o produto, a região e o perfil da operação. Entre em contato para consultar."
    },
    {
      question: "É possível desenvolver um pão personalizado?",
      answer: "Sim. Projetos personalizados podem ser avaliados de acordo com as necessidades da sua operação."
    },
    {
      question: "Como faço para receber uma proposta?",
      answer: "Preencha o formulário ou fale com nossa equipe. Vamos entender sua necessidade e apresentar as possibilidades."
    }
  ]

  return (
    <FAQSection id="faq">
      <div className="container">
        <h2>TIRE SUAS <span>DÚVIDAS</span></h2>
        
        <FAQList>
          {faqs.map((faq, index) => (
            <FAQItem key={index}>
              <Question 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                $isOpen={openIndex === index}
              >
                {faq.question}
                <span aria-hidden="true">{openIndex === index ? '−' : '+'}</span>
              </Question>
              <Answer $isOpen={openIndex === index}>
                <p>{faq.answer}</p>
              </Answer>
            </FAQItem>
          ))}
        </FAQList>
      </div>
    </FAQSection>
  )
}