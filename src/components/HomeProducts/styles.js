import styled from 'styled-components';

export const ProductsSection = styled.section`
  padding: clamp(3.5rem, 7vw, ${({ theme }) => theme.spacing.xl}) 0;
  background: ${({ theme }) => theme.colors.dark};

  display: flex;
  justify-content: center;

  .container {
    width: min(calc(100% - clamp(3rem, 8vw, 5rem)), 1180px);
    max-width: 1180px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  h2 {
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 800;
    margin-bottom: 0.75rem;
    color: white;
    line-height: 1.1;

    span {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  p {
    color: rgba(255, 255, 255, 0.8);
    max-width: 760px;
    margin: 0 auto;
    line-height: 1.6;
    text-wrap: pretty;
  }

`;

export const ProductsGrid = styled.div`
  width: 100%;
  max-width: 1180px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin: clamp(2rem, 5vw, 3rem) auto 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 1rem;
  }
`;

export const ProductCard = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  align-items: stretch;
  gap: clamp(1rem, 3vw, 2rem);
  background: #191817;
  border: 1px solid rgba(243, 213, 154, 0.16);
  border-radius: 16px;
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-3px);
  }

  .image {
    position: relative;
    min-width: 0;
    aspect-ratio: 4 / 3;
    margin: 12px 0 12px 12px;
    overflow: hidden;
    border-radius: 12px;
    background: ${({ theme }) => theme.colors.dark};

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center 56%;
      transition: transform 0.5s ease;
    }
  }

  &:hover .image img {
    transform: scale(1.04);
  }

  .content {
    align-self: center;
    min-width: 0;
    padding: 1.5rem clamp(1rem, 3vw, 2rem) 1.5rem 0;
    text-align: left;
  }

  h3 {
    font-size: clamp(1.3rem, 2.5vw, 1.6rem);
    margin: 0 0 0.5rem;
    color: ${({ theme }) => theme.colors.wheat};
    letter-spacing: 0.5px;
  }

  h4 {
    margin: 0 0 0.5rem;
    color: white;
    font-size: 1.05rem;
  }

  p {
    color: rgba(255, 255, 255, 0.75);
    line-height: 1.6;
    font-size: 0.95rem;
    max-width: none;
    margin: 0;
  }

  .details {
    margin-top: 0.75rem;

    strong {
      color: ${({ theme }) => theme.colors.wheat};
      text-transform: uppercase;
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: block;

    .image {
      width: auto;
      aspect-ratio: 16 / 10;
      margin: 10px 10px 0;
    }

    .content {
      padding: 1rem 1.1rem 1.25rem;
    }
  }
`;