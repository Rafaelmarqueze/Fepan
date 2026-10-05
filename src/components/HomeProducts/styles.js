import styled from 'styled-components';

export const ProductsSection = styled.section`
  padding: ${({ theme }) => theme.spacing.xl} 0;
  background: ${({ theme }) => theme.colors.dark};

  display: flex;
  justify-content: center;

  .container {
    width: 100%;
    max-width: 1180px;
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
  max-width: 1180px;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.5rem;
  margin: 4rem auto 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

export const ProductCard = styled.div`
  background: #191817;
  border: 1px solid rgba(243, 213, 154, 0.16);
  border-radius: 16px;
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-6px);
  }

  .image {
    position: relative;
    height: clamp(300px, 32vw, 400px);
    margin: 12px 12px 0;
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
    padding: 1.5rem 1.75rem 1.75rem;
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
    max-width: none;
    margin: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    .image {
      height: clamp(260px, 72vw, 360px);
      margin: 10px 10px 0;
    }

    .content {
      padding: 1.25rem 1.25rem 1.5rem;
    }
  }
`;