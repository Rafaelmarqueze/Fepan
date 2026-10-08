import Image from 'next/image';
import Link from 'next/link';

export default function AgradecimentoPage() {
  return (
    <main className="agradecimento-container">
        
      <div className="logo-wrapper">
        <Image 
          src="/images/fepan-logo.png"
          alt="FE PAN"
          width={200}
          height={60}
          priority
          style={{ objectFit: 'contain' }}
        />
      </div>

      <div className="text-content">
        <h2>Obrigado pelo contato.</h2>
        <p>
          Recebemos sua solicitação. A equipe FE PAN entrará em contato em breve
          para entender melhor a sua operação.
        </p>
      </div>

      <Link
        href="/#inicio"
        className="btn-whatsapp"
      >
        VOLTAR À PÁGINA INICIAL
      </Link>

      <p className="footer-text">
        Panificação que faz parte da experiência.
      </p>

    </main>
  );
}
