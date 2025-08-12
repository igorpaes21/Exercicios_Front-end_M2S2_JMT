import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import SobreNos from './components/SobreNos';
import PorQueInvestir from './components/PorQueInvestir';
import Produtos from './components/Produtos';

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

        {/* Por que investir Section - Componente */}
        <PorQueInvestir />

        {/* Produtos Section - Componente */}
        <Produtos />

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
