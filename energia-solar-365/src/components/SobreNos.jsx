import React from 'react';
import './SobreNos.css';

const SobreNos = () => {
  return (
    <section id="sobre-nos" className="sobre-nos">
      <div className="container">
        <h2>Sobre Nós</h2>
        <div className="sobre-nos-content">
          <div className="sobre-nos-image">
            <img 
              src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop&auto=format" 
              alt="Painéis Solares instalados em telhado residencial" 
              className="main-image"
            />
          </div>
          <div className="sobre-nos-text">
            <div className="company-info">
              <p className="intro-text">
                Somos a <strong>Energia Solar 365</strong>, uma empresa especializada em soluções sustentáveis de energia renovável. Oferecemos sistemas inteligentes que proporcionam imensos benefícios econômicos e ambientais para sua casa ou empresa.
              </p>
            </div>

            <div className="mission-section">
              <h3>Nossa Missão</h3>
              <p>
                Democratizar o acesso à energia solar limpa e renovável, proporcionando economia significativa e contribuindo para um futuro mais sustentável.
              </p>
            </div>

            <div className="vision-section">
              <h3>Nossa Visão</h3>
              <p>
                Ser referência nacional em energia solar, transformando a matriz energética brasileira através da inovação e sustentabilidade.
              </p>
            </div>

            <div className="values-section">
              <h3>Nossos Valores</h3>
              <ul>
                <li><strong>Sustentabilidade:</strong> Compromisso com o meio ambiente</li>
                <li><strong>Inovação:</strong> Tecnologia de ponta em energia solar</li>
                <li><strong>Transparência:</strong> Relacionamento claro e honesto</li>
                <li><strong>Qualidade:</strong> Produtos e serviços de excelência</li>
              </ul>
            </div>

            <div className="market-data">
              <h3>Dados de Mercado Segundo IEA 2024:</h3>
              <div className="data-grid">
                <div className="data-item">
                  <span className="data-number">95%</span>
                  <span className="data-label">Economia na conta de luz</span>
                </div>
                <div className="data-item">
                  <span className="data-number">2-4 anos</span>
                  <span className="data-label">Payback médio</span>
                </div>
                <div className="data-item">
                  <span className="data-number">+25 anos</span>
                  <span className="data-label">Vida útil dos painéis</span>
                </div>
                <div className="data-item">
                  <span className="data-number">8%</span>
                  <span className="data-label">Valorização do imóvel</span>
                </div>
              </div>
              <p className="data-source">
                * Segundo estudo do Lawrence Berkeley National Laboratory
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreNos;