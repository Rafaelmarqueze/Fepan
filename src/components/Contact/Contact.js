"use client";
import { useRouter } from 'next/navigation'
import { useState } from 'react'

import {
  ContactSection,
  ContactGrid,
  ContactInfo,
  Form,
  FormGroup,
  ModalOverlay,
  ModalContent,
  InfoLink,
  ModalForm
} from './styles'

export default function Contact({ openModal = false, onCloseModal = () => { } }) {
  const router = useRouter()
  const [fullName, setFullName] = useState('')
  const [burgerPlaceName, setBurgerPlaceName] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [email, setEmail] = useState('')
  const [cnpj, setCnpj] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [modal, setModal] = useState({ open: false, title: '', text: '' })

  const formatWhatsApp = (value) => {
    if (!value) return "";

    // Mantém apenas números
    const nums = value.replace(/\D/g, "");

    // Formatação: (XX) XXXXX-XXXX
    if (nums.length <= 2) return nums;
    if (nums.length <= 7) return `(${nums.slice(0, 2)}) ${nums.slice(2)}`;

    return `(${nums.slice(0, 2)}) ${nums.slice(2, 7)}-${nums.slice(7, 11)}`;
  };

  const handleCloseAllModals = () => {
    if (modal.title === 'Sucesso' || modal.title === 'Contato registrado') {
      router.push('/agradecimento')
    }
    setModal({ open: false, title: '', text: '' });
    onCloseModal();
  };

  const submit = async () => {
    if (isSubmitting) return
    setIsSubmitting(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          fullName,
          burgerPlaceName,
          whatsapp: whatsapp.replace(/\D/g, ''),
          email,
          message,
          cnpj
        })
      })

      const result = await res.json()
      if (!res.ok && !result.leadId) {
        throw new Error('Failed')
      }

      setCnpj('')
      setFullName('')
      setBurgerPlaceName('')
      setWhatsapp('')
      setEmail('')
      setMessage('')
      setModal({
        open: true,
        title: res.ok ? 'Sucesso' : 'Contato registrado',
        text: res.ok
          ? 'Contato enviado com sucesso! Em breve um consultor entrará em contato.'
          : 'Seu contato foi registrado, mas a notificação por e-mail falhou. Não é necessário enviar novamente.'
      })
    } catch (err) {
      setModal({
        open: true,
        title: 'Erro',
        text: 'Não foi possível enviar agora. Tente novamente.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleSubmitFromModal = async (e) => {
    e.preventDefault()
    await submit()
  }

  return (
    <>
      {/* Modal com mensagens de sucesso/erro */}
      {modal.open && (
        <ModalOverlay
          role="dialog"
          aria-modal="true"
          onClick={handleCloseAllModals}
        >
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <h3>{modal.title}</h3>
            <p>{modal.text}</p>
            <div className="actions">
              <button
                type="button"
                className='success-button'
                onClick={handleCloseAllModals}
              >
                Fechar
              </button>
            </div>
          </ModalContent>
        </ModalOverlay>
      )}

      {/* Modal com formulário (botão flutuante) */}
      {openModal && !modal.open && (
        <ModalOverlay
          role="dialog"
          aria-modal="true"
          onClick={handleCloseAllModals}
        >
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <h3>SOLICITAR CONTATO</h3>
            <ModalForm
              onSubmit={handleSubmitFromModal}
            >
              <FormGroup>
                <label>NOME COMPLETO</label>
                <input
                  placeholder="Seu nome"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </FormGroup>

              <FormGroup>
                <label>NOME DA EMPRESA</label>
                <input
                  placeholder="Sua empresa"
                  value={burgerPlaceName}
                  onChange={(e) => setBurgerPlaceName(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <label>WHATSAPP</label>
                <input
                  placeholder="(00) 00000-0000"
                  value={whatsapp}
                  // Aqui está o segredo: formata o valor antes de salvar no setWhatsapp
                  onChange={(e) => setWhatsapp(formatWhatsApp(e.target.value))}
                  required
                  maxLength={15}
                />
              </FormGroup>

              <FormGroup>
                <label>E-MAIL</label>
                <input
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                />
              </FormGroup>

              <FormGroup>
                <label>MENSAGEM</label>
                <textarea
                  placeholder="Como podemos ajudar?"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </FormGroup>

              <button type="submit" disabled={isSubmitting}>
                SOLICITAR CONTATO COMERCIAL
              </button>
            </ModalForm>
          </ModalContent>
        </ModalOverlay>
      )}

      <ContactSection id="contato">
        <div className="container">
          <ContactGrid>

            {/* COLUNA ESQUERDA */}
            <ContactInfo>
              <h2>
                SEU PRODUTO MERECE UM <span>PÃO À ALTURA.</span>
              </h2>

              <p>
                Conte para a gente o que você está procurando. Nosso time pode ajudar
                a encontrar a solução ideal para a sua operação.
              </p>

              <InfoLink href="#formulario">
                <strong>FALE COM A FE PAN</strong>
                <span>Converse com nosso time comercial</span>
              </InfoLink>

              <InfoLink href="#formulario">
                <strong>ATENDIMENTO B2B</strong>
                <span>Conte um pouco sobre a sua operação</span>
              </InfoLink>
            </ContactInfo>

            {/* COLUNA DIREITA */}
            <Form
              id="formulario"
              onSubmit={(e) => {
                e.preventDefault()
                submit()
              }}
            >
              <FormGroup>
                <label>NOME COMPLETO</label>
                <input
                  placeholder="Seu nome"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </FormGroup>

              <FormGroup>
                <label>NOME DA EMPRESA</label>
                <input
                  placeholder="Sua empresa"
                  value={burgerPlaceName}
                  onChange={(e) => setBurgerPlaceName(e.target.value)}
                />
              </FormGroup>

              <div className="row">
                <FormGroup>
                  <label>WHATSAPP</label>
                  <input
                    placeholder="(00) 00000-0000"
                    value={whatsapp}
                    // Aqui está o segredo: formata o valor antes de salvar no setWhatsapp
                    onChange={(e) => setWhatsapp(formatWhatsApp(e.target.value))}
                    required
                    maxLength={15}
                  />
                </FormGroup>

                <FormGroup>
                  <label>E-MAIL</label>
                  <input
                    placeholder="seu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                  />
                </FormGroup>
              </div>

              <FormGroup>
                <label>MENSAGEM</label>
                <textarea
                  placeholder="Como podemos ajudar?"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </FormGroup>

              <button type="submit" disabled={isSubmitting}>
                SOLICITAR CONTATO COMERCIAL
              </button>
            </Form>

          </ContactGrid>
        </div>
      </ContactSection>
    </>
  )
}
