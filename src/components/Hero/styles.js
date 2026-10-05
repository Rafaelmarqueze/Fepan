import styled from 'styled-components'

export const HeroSection = styled.section`
  min-height: min(820px, 100vh);
  display: flex;
  align-items: center;
  background-color: #000000;
  background-image:
    linear-gradient(90deg, #000000 0%, rgba(0, 0, 0, 0.94) 42%, rgba(0, 0, 0, 0.45) 100%),
    url('/images/hero.jpg');
  background-position: center, right center;
  background-size: cover, auto 100%;
  background-repeat: no-repeat;
  color: ${({ theme }) => theme.colors.white};
  padding: 130px 0 90px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    min-height: 760px;
    background-image:
      linear-gradient(90deg, rgba(0, 0, 0, 0.92), rgba(0, 0, 0, 0.82)),
      url('/images/hero.jpg');
    background-position: center, 65% center;
    background-size: cover, auto 100%;
  }
`
export const HeroContent = styled.div`
  max-width: 680px;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;

  p {
    font-size: 1.1rem;
    margin: 1.5rem 0 2rem;
    opacity: 0.9;
    line-height: 1.6;
    max-width: 570px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    align-items: center;
    text-align: center;

    p {
      font-size: 1.02rem;
    }
  }
`;

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(3.4rem, 5.4vw, 5.6rem);
  font-weight: 700;
  line-height: 0.98;
  letter-spacing: -0.045em;

  span {
    display: block;
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: clamp(2.8rem, 12vw, 4rem);
  }
`
export const Subtitle = styled.span`
  display: inline-block;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  color: ${({ theme }) => theme.colors.wheat};
  margin-bottom: 1.5rem;

`
export const CTAButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  gap: 1rem;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.dark};

  font-weight: 700;
  padding: 1rem 1.5rem;
  border-radius: 999px;

  box-shadow: 0 10px 30px rgba(0,0,0,0.25);
  transition: transform 0.3s ease, background-color 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    background: ${({ theme }) => theme.colors.wheat};
  }

  span {
    font-size: 1.2rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
  }
`