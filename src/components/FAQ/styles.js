import styled from 'styled-components'

export const FAQSection = styled.section`
  padding: ${({ theme }) => theme.spacing.xl} 0;
  background: ${({ theme }) => theme.colors.white};

  h2 {
    font-size: 3rem;
    font-weight: 800;
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    text-align: center;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      font-size: 2rem;
    }
  }
    span {
      color: ${({ theme }) => theme.colors.terracotta};
  }
`

export const FAQList = styled.div`
  max-width: 800px;
  margin: 0 auto;
`

export const FAQItem = styled.div`
  margin-bottom: 1rem;
  border: 1px solid rgba(107, 62, 38, 0.16);
  border-radius: 4px;
  overflow: hidden;
`

export const Question = styled.button`
  width: 100%;
  padding: 1.5rem;
  background: ${({ theme, $isOpen }) =>
    $isOpen ? theme.colors.dark : theme.colors.light};
  color: ${({ theme, $isOpen }) =>
    $isOpen ? theme.colors.wheat : theme.colors.dark};
  font-weight: 600;
  font-size: 1.125rem;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme, $isOpen }) =>
      $isOpen ? theme.colors.dark : theme.colors.wheat};
    color: ${({ theme, $isOpen }) =>
      $isOpen ? theme.colors.wheat : theme.colors.dark};
  }

  span {
    font-size: 1.5rem;
    font-weight: 400;
  }
`

export const Answer = styled.div`
  max-height: ${({ $isOpen }) => $isOpen ? '500px' : '0'};
  overflow: hidden;
  transition: max-height 0.3s ease;
  background: ${({ theme }) => theme.colors.light};

  p {
    padding: 1.5rem;
    color: ${({ theme }) => theme.colors.gray};
    line-height: 1.6;
  }
`