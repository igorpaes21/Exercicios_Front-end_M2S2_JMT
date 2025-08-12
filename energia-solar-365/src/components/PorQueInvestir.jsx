import React from 'react';
import './PorQueInvestir.css';

const PorQueInvestir = () => {
  const beneficios = [
    {
      id: 1,
      titulo: "Redução de Conta",
      descricao: "Economize até 95% da sua conta de energia elétrica com sistema solar fotovoltaico.",
      icone: "💰",
      detalhes: "Redução imediata na conta de luz já no primeiro mês de instalação"
    },
    {
      id: 2,
      titulo: "Sustentabilidade",
      descricao: "Energia limpa e renovável que ajuda a preservar o meio ambiente para futuras gerações.",
      icone: "🌱",
      detalhes: "Cada kWh solar evita a emissão de 0,5kg de CO₂ na atmosfera"
    },
    {
      id: 3,
      titulo: "Valorização do Imóvel",
      descricao: "Imóveis com sistema solar aumentam seu valor de mercado em até 8%.",
      icone: "🏡",
      detalhes: "Investimento que se paga e ainda valoriza seu patrimônio"
    },
    {
      id: 4,
      titulo: "Retorno Garantido",
      descricao: "Payback entre 2 a 4 anos com economia garantida por mais de 25 anos.",
      icone: "📈",
      detalhes: "Painéis com garantia de 25 anos e vida útil superior a 30 anos"
    },
    {
      id: 5,
      titulo: "Independência Energética",
      descricao: "Gere sua própria energia e proteja-se contra aumentos na tarifa elétrica.",
      icone: "⚡",
      detalhes: "Liberdade das constantes altas nas tarifas de energia"
    },
    {
      id: 6,
      titulo: "Baixa Manutenção",
      descricao: "Sistema fotovoltaico requer manutenção mínima, apenas limpeza periódica.",
      icone: "🔧",
      detalhes: "Manutenção simples e barata, apenas limpeza semestral"
    }
  ];

  return (
    <section id="por-que-investir" className="por-que-investir">
      <div className="container">
        <div className="section-header">
          <h2>Por que investir em Energia Solar?</h2>
          <p className="section-subtitle">
            Descubra as vantagens de fazer parte da revolução energética sustentável
          </p>
        </div>

        <div className="beneficios-grid">
          {beneficios.map((beneficio) => (
            <div key={beneficio.id} className="beneficio-card">
              <div className="card-icon">
                <span className="icon">{beneficio.icone}</span>
              </div>
              <div className="card-content">
                <h3>{beneficio.titulo}</h3>
                <p className="card-description">{beneficio.descricao}</p>
                <p className="card-details">{beneficio.detalhes}</p>
              </div>
              <div className="card-hover-effect"></div>
            </div>
          ))}
        </div>

        <div className="cta-section">
          <div className="cta-content">
            <h3>Pronto para economizar?</h3>
            <p>Faça uma simulação gratuita e descubra quanto você pode economizar com energia solar</p>
            <button className="cta-button">
              Solicitar Orçamento Gratuito
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PorQueInvestir;