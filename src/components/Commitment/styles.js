import styled from "styled-components"

export const CommitmentSection = styled.section`
  padding: 100px 0;
  background: ${({ theme }) => theme.colors.light};
`

export const CommitmentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  align-items: stretch;
  gap: 60px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const CommitmentContent = styled.div`
  h2 {
    font-size: 2.6rem;
    font-weight: 800;
    line-height: 1.2;
    max-width: 520px;

    span {
      color: ${({ theme }) => theme.colors.terracotta};
    }
  }

  p {
    margin-top: 18px;
    font-size: 1.05rem;
    color: #555;
    line-height: 1.6;
    max-width: 520px;
  }
`

export const CommitmentCards = styled.div`
  margin-top: 35px;
  display: flex;
  flex-direction: column;
  gap: 14px;
`

export const CommitmentCard = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 14px;

  padding: 18px 20px;
  border-radius: 12px;
  background: #ffffff;
  border: 1px solid rgba(107, 62, 38, 0.12);

  .value-image {
    width: 64px;
    height: 64px;
    border-radius: 8px;
    object-fit: cover;
    flex-shrink: 0;
  }

  h3 {
    font-size: 0.95rem;
    font-weight: 800;
    margin-bottom: 4px;
    text-transform: uppercase;
  }

  p {
    margin: 0;
    font-size: 0.9rem;
    color: #666;
    line-height: 1.4;
  }
`

export const CommitmentImage = styled.div`
  position: relative;
  width: 100%;
  min-height: 100%;

  img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
  }

  @media (max-width: 768px) {
    min-height: 0;
    aspect-ratio: 4 / 3;
  }
`
