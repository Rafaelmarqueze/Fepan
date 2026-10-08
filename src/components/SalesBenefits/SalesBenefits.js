import {
  MdLocalShipping,
  MdPayments,
  MdShowChart,
  MdVerified,
} from 'react-icons/md'
import {
  BenefitsGrid,
  BenefitCard,
  BenefitsSection,
  BenefitsIntro,
  ContactLink,
} from './styles'

const benefits = [
  {
    icon: MdShowChart,
    title: 'Preço que protege sua margem',
    description:
      'Aproveite condições competitivas para compras em volume. Conforme sua operação cresce, seus custos podem trabalhar cada vez mais a seu favor.',
  },
  {
    icon: MdVerified,
    title: 'Qualidade que seu cliente percebe',
    description:
      'Conte com produtos selecionados e de procedência para manter o padrão do seu cardápio e entregar uma boa experiência em cada pedido.',
  },
  {
    icon: MdPayments,
    title: 'Pagamento alinhado ao seu caixa',
    description:
      'Tenha acesso a formas de pagamento facilitadas e, se sua empresa for elegível, condições especiais e prazo. Mais flexibilidade para abastecer a operação sem comprometer o capital de giro.',
  },
  {
    icon: MdLocalShipping,
    title: 'Entrega eficiente para sua operação',
    description:
      'Planeje volumes e frequência de pedidos com nosso time e organize seu abastecimento conforme a necessidade da sua operação e a disponibilidade da sua região.',
  },
]

export default function SalesBenefits() {
  return (
    <BenefitsSection id="vantagens">
      <div className="container">
        <BenefitsIntro>
          <span className="eyebrow">VANTAGENS PARA O SEU NEGÓCIO</span>
          <h2>
            Mais resultado para <span>a sua operação.</span>
          </h2>
          <p>
            A parceria certa vai além do produto: ajuda você a cuidar da margem,
            manter a qualidade e abastecer seu negócio com mais tranquilidade.
          </p>
        </BenefitsIntro>

        <BenefitsGrid>
          {benefits.map(({ icon: Icon, title, description }) => (
            <BenefitCard key={title}>
              <span className="icon" aria-hidden="true">
                <Icon />
              </span>
              <h3>{title}</h3>
              <p>{description}</p>
            </BenefitCard>
          ))}
        </BenefitsGrid>

        <ContactLink href="#contato">
          Converse com nosso time <span aria-hidden="true">→</span>
        </ContactLink>
      </div>
    </BenefitsSection>
  )
}
