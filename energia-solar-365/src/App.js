import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import SobreNos from './components/SobreNos';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <div className="container">
          <h1 className="main-title">Energia Solar 365</h1>
          <p className="subtitle">Economize com o sol. Invista no seu futuro!</p>
        </div>
      </header>

      {/* Navigation - Componente Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="main-content">
        {/* Sobre Nós Section - Componente */}
        <SobreNos />

        {/* Por que investir Section */}
        <section id="por-que-investir" className="por-que-investir">
          <div className="container">
            <h2>Por que Investir em Energia Solar?</h2>
            <div className="benefits-grid">
              <div className="benefit-card">
                <h3>Redução de Conta</h3>
                <p>Economize até 95% da conta de energia elétrica.</p>
              </div>
              <div className="benefit-card">
                <h3>Sustentabilidade</h3>
                <p>Energia limpa e renovável, ajudando a preservar o meio ambiente.</p>
              </div>
              <div className="benefit-card">
                <h3>Valorização do Imóvel</h3>
                <p>Imóveis com placas solares aumentam o valor até 8% no mercado.</p>
              </div>
              <div className="benefit-card">
                <h3>Retorno Garantido</h3>
                <p>Payback em 2 a 4 anos e economia garantida por mais de 25 anos.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Produtos Section */}
        <section id="produtos" className="produtos">
          <div className="container">
            <h2>Nossos Produtos</h2>
            <div className="products-grid">
              <div className="product-card">
                <img src="https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=200&h=200&fit=crop" alt="Placa Solar" />
                <h3>Placa Solar 550W</h3>
                <p>Alta eficiência para uso residencial e comercial</p>
              </div>
              <div className="product-card">
                <img src="https://images.unsplash.com/photo-1624397640148-949b1732bb0a?w=200&h=200&fit=crop" alt="Kit Solar" />
                <h3>Kit Solar Completo</h3>
                <p>Solução completa, incluindo inversores e estruturas de fixação</p>
              </div>
              <div className="product-card">
                <img src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=200&h=200&fit=crop" alt="Inversor Solar" />
                <h3>Inversor Solar</h3>
                <p>Transforme energia solar para energia elétrica para sua casa</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contato Section */}
        <section id="orcamento" className="contato">
          <div className="container">
            <h2>Solicite seu Orçamento</h2>
            <form className="contact-form">
              <input type="text" placeholder="Seu nome" required />
              <input type="email" placeholder="Seu e-mail" required />
              <textarea placeholder="Descreva suas principais dúvidas, localização..." required></textarea>
              <button type="submit">Enviar</button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Energia Solar 365 - Todos os direitos reservados</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
