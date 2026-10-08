"use client";
import { ProductsSection, ProductsGrid, ProductCard } from './styles';
import Image from 'next/image';

export default function HomeProducts() {
  return (
    <ProductsSection id="produtos">
      <div className="container">
        <h2>
          Pães que <span>trabalhamos</span>
        </h2>

        <p>
          Produtos feitos para elevar o seu produto. Do clássico ao sofisticado,
          cada produto FE PAN nasce com um propósito: entregar uma experiência
          melhor em cada aplicação.
        </p>

        <ProductsGrid>
          <ProductCard>
            <div className="image">
              <Image
                src="/images/brioche.jpeg"
                alt="Pão brioche dourado, macio e coberto com gergelim"
                fill
                sizes="(max-width: 768px) 100vw, 1180px"
              />
            </div>
            <div className="content">
              <h3>Brioche</h3>
              <h4>Macio. Dourado. Inconfundível.</h4>
              <p>
                Uma receita de perfil amanteigado, textura macia e acabamento
                delicado. Desenvolvido para aplicações que pedem mais sabor,
                mais aroma e uma apresentação premium.
              </p>
              <p className="details">
                <strong>Perfil:</strong> Amanteigado · Macio · Aromático
                <br />
                <strong>Aplicação:</strong> Hambúrgueres · Sanduíches · Food Service
              </p>
            </div>
          </ProductCard>

          <ProductCard>
            <div className="image">
              <Image
                src="/images/paes-burger.jpeg"
                alt="Pães tradicionais para hambúrguer"
                fill
                sizes="(max-width: 768px) 100vw, 1180px"
              />
            </div>
            <div className="content">
              <h3>Tradicional</h3>
              <h4>Clássico. Macio. Sempre versátil.</h4>
              <p>
                Com textura macia, estrutura na medida e sabor equilibrado, é
                aquele pão que valoriza os ingredientes e deixa cada combinação
                ainda mais gostosa.
              </p>
              <p className="details">
                <strong>Perfil:</strong> Clássico · Macio · Equilibrado
                <br />
                <strong>Aplicação:</strong> Hambúrgueres · Sanduíches · Food Service
              </p>
            </div>
          </ProductCard>

          <ProductCard>
            <div className="image">
              <Image
                src="/images/paes-especiais.jpeg"
                alt="Pão australiano de casca escura e textura marcante"
                fill
                sizes="(max-width: 768px) 100vw, 1180px"
              />
            </div>
            <div className="content">
              <h3>Australiano</h3>
              <h4>Marcante. Aromático. Cheio de personalidade.</h4>
              <p>
                Sua cor intensa e seu sabor levemente adocicado criam um contraste
                irresistível e transformam receitas especiais em experiências
                memoráveis.
              </p>
              <p className="details">
                <strong>Perfil:</strong> Marcante · Levemente adocicado · Aromático
                <br />
                <strong>Aplicação:</strong> Hambúrgueres · Sanduíches · Receitas autorais
              </p>
            </div>
          </ProductCard>
        </ProductsGrid>
      </div>
    </ProductsSection>
  );
}