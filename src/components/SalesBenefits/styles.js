import styled from 'styled-components'

export const BenefitsSection = styled.section`
  padding: clamp(3.5rem, 7vw, 6rem) 0;
  background:
    radial-gradient(ellipse at 50% 0%, rgba(232, 111, 45, 0.12), transparent 48%),
    ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.white};

  .container {
    width: min(calc(100% - clamp(3rem, 8vw, 5rem)), 1180px);
  }
`

export const BenefitsIntro = styled.div`
  max-width: 760px;
  margin: 0 auto;
  text-align: center;

  .eyebrow {
    display: inline-block;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.wheat};
    font-size: 0.75rem;
    font-weight: 800;
    letter-spacing: 0.16em;
  }

  h2 {
    color: ${({ theme }) => theme.colors.white};
    font-size: clamp(2rem, 4.5vw, 3.25rem);
    font-weight: 800;
    line-height: 1.1;

    span {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  p {
    max-width: 680px;
    margin: 1rem auto 0;
    color: rgba(255, 255, 255, 0.78);
    line-height: 1.7;
  }
`

export const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;
  margin-top: clamp(2rem, 4vw, 3rem);

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 0.85rem;
  }
`

export const BenefitCard = styled.article`
  min-width: 0;
  padding: clamp(1.25rem, 2.5vw, 1.75rem);
  border: 1px solid rgba(243, 213, 154, 0.16);
  border-radius: 14px;
  background: #191817;
  text-align: left;

  .icon {
    display: inline-flex;
    width: 2.75rem;
    height: 2.75rem;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
    border-radius: 50%;
    background: rgba(232, 111, 45, 0.14);
    color: ${({ theme }) => theme.colors.primary};

    svg {
      width: 1.5rem;
      height: 1.5rem;
    }
  }

  h3 {
    margin: 0 0 0.65rem;
    color: ${({ theme }) => theme.colors.wheat};
    font-size: 1.1rem;
    line-height: 1.3;
  }

  p {
    margin: 0;
    color: rgba(255, 255, 255, 0.76);
    font-size: 0.93rem;
    line-height: 1.65;
  }
`

export const ContactLink = styled.a`
  display: flex;
  width: fit-content;
  max-width: 100%;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  margin: 2rem auto 0;
  padding: 0.95rem 1.5rem;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.dark};
  font-weight: 800;
  text-align: center;
  transition: transform 0.2s ease, background-color 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    background: ${({ theme }) => theme.colors.wheat};
  }

  span {
    font-size: 1.2rem;
  }
`
