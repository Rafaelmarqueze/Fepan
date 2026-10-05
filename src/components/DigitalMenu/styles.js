import styled from "styled-components"

export const DigitalMenuSection = styled.section`
  padding: ${({ theme }) => theme.spacing.xl} 0;
  background:
    radial-gradient(ellipse at 50% 120%, rgba(232, 111, 45, 0.2), transparent 58%),
    ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: center;
  border-top: 1px solid rgba(243, 213, 154, 0.18);
  border-bottom: 1px solid rgba(243, 213, 154, 0.18);
`

export const ContentWrapper = styled.div`
  text-align: center;
  max-width: 720px;
  margin: 0 auto;

  .subtitle {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.wheat};
    letter-spacing: 0.15em;
    margin-bottom: 1rem;
  }

  h1 {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: clamp(2.8rem, 6vw, 4.6rem);
    font-weight: 700;
    line-height: 1;
    margin: ${({ theme }) => theme.spacing.md} 0;

    span {
      display: block;
      color: ${({ theme }) => theme.colors.primary};
      margin-top: 0.25rem;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      font-size: 2.2rem;
    }
  }

  .muted {
    margin-top: 1.5rem;
    opacity: 0.8;
  }

  .emphasis {
    display: block;
    margin-top: 0.5rem;
    font-size: 1rem;
    font-weight: 800;
    letter-spacing: 0.08em;
  }
`

export const LogosRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;

  img {
    height: 64px;
    object-fit: contain;
  }

  span {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.wheat};
  }

  .logo {
    margin-right: 12px;
  }

  .brand-placeholder {
    color: ${({ theme }) => theme.colors.wheat};
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: 1.4rem;
    font-weight: 600;
    margin-left: 12px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: 1rem;

    span {
      display: none;
    }

    .logo {
      height: 54px;
      margin: 0;
    }

    .brand-placeholder {
      margin: 0;
    }
  }
`

export const Divider = styled.div`
  width: 80px;
  height: 3px;
  background: ${({ theme }) => theme.colors.primary};
  margin: 2rem auto;
`

export const CTAButton = styled.a`
  margin-top: 3rem;

  display: inline-flex;
  justify-content: center;
  align-items: center;

  padding: 20px 60px;
  border-radius: 999px;

  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.dark};

  font-size: 1.15rem;
  font-weight: 900;
  letter-spacing: 1px;
  text-transform: uppercase;

  text-decoration: none;
  border: none;
  cursor: pointer;

  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.35);

  transition: all 0.25s ease;

  &:hover {
    transform: scale(1.05);
    background: ${({ theme }) => theme.colors.wheat};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
    padding: 18px 20px;
    font-size: 1rem;
  }
`
