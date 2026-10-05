import styled from 'styled-components';

export const ProductsSection = styled.section`
  padding: ${({ theme }) => theme.spacing.xl} 0;
  background: ${({ theme }) => theme.colors.dark};

  display: flex;
  justify-content: center;

  .container {
    width: 100%;
    max-width: 900px; /* 🔥 CENTRALIZA O BLOCO */
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  h2 {
    font-size: 3rem;
    font-weight: 800;
    margin-bottom: 1rem;
    color: white;
    line-height: 1.2;

    span {
      color: ${({ theme }) => theme.colors.primary};
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      font-size: 2rem;
    }
  }

  p {
    color: rgba(255, 255, 255, 0.8);
    max-width: 760px;
    margin: 0 auto;
    line-height: 1.6;
  }
`;

export const ProductsGrid = styled.div`
  width: 100%;
  max-width: 1100px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 3rem;
  margin: 4rem auto 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const ProductCard = styled.div`
  background: #191817;
  border: 1px solid rgba(243, 213, 154, 0.16);
  border-radius: 4px;
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-6px);
  }

  .image {
    position: relative;
    height: 320px;
    overflow: hidden;
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
    padding: 2rem;
    text-align: left;
  }

  h3 {
    font-size: 1.25rem;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.wheat};
    letter-spacing: 0.5px;
  }

  p {
    color: rgba(255, 255, 255, 0.75);
    line-height: 1.6;
    font-size: 0.95rem;
    max-width: 420px;
    margin: 0;
  }
`;