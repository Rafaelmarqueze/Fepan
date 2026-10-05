"use client";
import { ProductsSection, ProductsGrid, ProductCard } from './styles';
import Image from 'next/image';

export default function HomeProducts() {
  return (
    <ProductsSection id="produtos">
      <div className="container">
        <h2>
          PÃES FEITOS PARA <span>ELEVAR</span> CADA EXPERIÊNCIA
        </h2>

        <p>
          Do clássico ao especial, cada produto nasce com um propósito: entregar
          uma experiência melhor em cada aplicação.
        </p>

        <ProductsGrid>
          <ProductCard>
            <div className="image">
              <Image
                src="/images/paes-burger.jpg"
                alt="Pães para hambúrguer com miolo macio"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="content">
              <h3>PÃES PARA BURGER</h3>
              <p>
                Estrutura, maciez e sabor para transformar o hambúrguer em uma
                experiência completa.
              </p>
            </div>
          </ProductCard>

          <ProductCard>
            <div className="image">
              <Image
                src="/images/brioche.jpg"
                alt="Pães brioche dourados, macios e cobertos com gergelim"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="content">
              <h3>PÃES ESPECIAIS & FOOD SERVICE</h3>
              <p>
                Receitas para operações que procuram personalidade, textura e
                consistência. Desenvolvimento personalizado conforme a necessidade
                da sua marca.
              </p>
            </div>
          </ProductCard>
        </ProductsGrid>
      </div>
    </ProductsSection>
  );
}