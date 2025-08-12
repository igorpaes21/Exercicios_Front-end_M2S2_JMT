import React from 'react';
import './App.css';
import Navbar from './components/Navbar';

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
        <div className="container">
          {/* Sobre Nós Section */}
          <section id="sobre-nos" className="sobre-nos">
            <h2>Sobre Nós</h2>
            <div className="content-section">
              <img 
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=500&h=300&fit=crop" 
                alt="Painéis Solares no Telhado" 
                className="main-image"
              />
              <div className="text-content">
                <p>
                  Somos a Energia Solar 365, oferecemos um sistema sustentável, inteligente e que proporciona imensos benefícios, oferece uma solução inovadora para sua casa ou empresa.
                </p>
                
                <h3>Dados de Mercado Segundo UEA 2023:</h3>
                <ul>
                  <li>Economia na conta de luz de <strong>95%</strong></li>
                  <li>Payback médio: <strong>2 a 4 anos</strong></li>
                  <li>Vida útil dos painéis: <strong>mais de 25 anos</strong></li>
                  <li>Valorização do imóvel em até <strong>8%</strong> - segundo estudo do Lawrence Berkeley National Laboratory</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Por que investir Section */}
          <section id="por-que-investir" className="por-que-investir">
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
          </section>

          {/* Produtos Section */}
          <section id="produtos" className="produtos">
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
          </section>

          {/* Contato Section */}
          <section id="orcamento" className="contato">
            <h2>Solicite seu Orçamento</h2>
            <form className="contact-form">
              <input type="text" placeholder="Seu nome" required />
              <input type="email" placeholder="Seu e-mail" required />
              <textarea placeholder="Descreva suas principais dúvidas, localização..." required></textarea>
              <button type="submit">Enviar</button>
            </form>
          </section>
        </div>
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
