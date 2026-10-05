"use client";

import {
  CommitmentSection,
  CommitmentWrapper,
  CommitmentContent,
  CommitmentCards,
  CommitmentCard,
  CommitmentImage,
} from "./styles"
import Image from "next/image"

export default function Commitment() {
  return (
    <CommitmentSection id="qualidade">
      <div className="container">
        <CommitmentWrapper>

          <CommitmentContent>
            <h2>
              TRADIÇÃO NA TÉCNICA. <span>PRECISÃO NO RESULTADO.</span>
            </h2>

            <p>
              A FE PAN une o cuidado artesanal à precisão necessária para produzir
              com consistência. Cada receita é pensada para entregar sabor, textura,
              aparência e desempenho — do primeiro ao último lote.
            </p>

            <CommitmentCards>
              
              <CommitmentCard>
                <Image
                  className="value-image"
                  src="/images/sabor.jpg"
                  width={80}
                  height={80}
                  alt="Pão artesanal dourado, destaque para sabor e aroma"
                />
                <div>
                  <h3>SABOR E AROMA</h3>
                  <p>Receitas desenvolvidas para criar equilíbrio em cada mordida.</p>
                </div>
              </CommitmentCard>

              <CommitmentCard>
                <Image
                  className="value-image"
                  src="/images/padronizacao.jpg"
                  width={80}
                  height={80}
                  alt="Miolo de pão assado mostrando sua estrutura uniforme"
                />
                <div>
                  <h3>TEXTURA</h3>
                  <p>
                    Maciez por dentro. Personalidade e acabamento por fora.
                  </p>
                </div>
              </CommitmentCard>

              <CommitmentCard>
                <Image
                  className="value-image"
                  src="/images/paes-especiais.jpg"
                  width={80}
                  height={80}
                  alt="Miolo de pão especial com textura artesanal"
                />
                <div>
                  <h3>PADRONIZAÇÃO</h3>
                  <p>
                    Um produto pensado para entregar qualidade lote após lote.
                  </p>
                </div>
              </CommitmentCard>

            </CommitmentCards>
          </CommitmentContent>

          <CommitmentImage>
            <Image
              src="/images/producao-artesanal.jpg"
              fill
              sizes="(max-width: 768px) 100vw, 45vw"
              alt="Produção artesanal de pães com farinha, massa e pão recém-assado"
            />
          </CommitmentImage>

        </CommitmentWrapper>
      </div>
    </CommitmentSection>
  )
}
