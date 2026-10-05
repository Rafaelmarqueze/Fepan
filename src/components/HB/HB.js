"use client";
import {
  CommitmentSection,
  CommitmentGrid,
  CommitmentItem,
  Divider
} from './styles';

export default function Commitment() {
  return (
    <CommitmentSection id="sobre">
      <div className="container">
        <h2>
          UMA BOA RECEITA COMEÇA MUITO ANTES DA <span>PRIMEIRA MORDIDA.</span>
        </h2>

        <p>
          Pão não é apenas acompanhamento. É textura, aroma, contraste e memória.
          Por isso, na FE PAN, tratamos a panificação como aquilo que ela realmente é:
          uma combinação entre técnica, cuidado e experiência.
        </p>

        <p>
          <b>Porque quando a base é excepcional, todo o resto ganha outra dimensão.</b>
        </p>

        <Divider />
      </div>
    </CommitmentSection>
  );
}
