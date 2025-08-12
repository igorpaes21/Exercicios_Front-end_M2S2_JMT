import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const redesSociais = [
    {
      nome: 'Facebook',
      url: 'https://facebook.com/energiasolar365',
      icone: '📘'
    },
    {
      nome: 'Instagram',
      url: 'https://instagram.com/energiasolar365',
      icone: '📸'
    },
    {
      nome: 'LinkedIn',
      url: 'https://linkedin.com/company/energiasolar365',
      icone: '💼'
    },
    {
      nome: 'YouTube',
      url: 'https://youtube.com/@energiasolar365',
      icone: '📺'
    },
    {
      nome: 'WhatsApp',
      url: 'https://wa.me/5511999999999',
      icone: '💬'
    }
  ];

  const linksUteis = [
    { nome: 'Sobre Nós', href: '#sobre-nos' },
    { nome: 'Por que Investir', href: '#por-que-investir' },
    { nome: 'Produtos', href: '#produtos' },
    { nome: 'Orçamento', href: '#orcamento' }
  ];

  const servicos = [
    'Instalação Residencial',
    'Instalação Comercial',
    'Instalação Industrial',
    'Manutenção e Monitoramento',
    'Consultoria Energética',
    'Financiamento Solar'
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="container">
          <div className="footer-grid">
            {/* Informações da Empresa */}
            <div className="footer-section company-info">
              <div className="company-logo">
                <h3>⚡ Energia Solar 365</h3>
                <p className="company-tagline">Energia limpa todos os dias do ano</p>
              </div>
              
              <div className="company-details">
                <div className="detail-item">
                  <span className="icon">🏢</span>
                  <div>
                    <strong>Energia Solar 365 Ltda.</strong>
                    <p>CNPJ: 12.345.678/0001-90</p>
                  </div>
                </div>

                <div className="detail-item">
                  <span className="icon">📍</span>
                  <div>
                    <p>Rua das Energias Renováveis, 365</p>
                    <p>Solar Park - São Paulo, SP</p>
                    <p>CEP: 01234-567</p>
                  </div>
                </div>

                <div className="detail-item">
                  <span className="icon">📧</span>
                  <div>
                    <p>contato@energiasolar365.com.br</p>
                    <p>vendas@energiasolar365.com.br</p>
                  </div>
                </div>

                <div className="detail-item">
                  <span className="icon">📞</span>
                  <div>
                    <p>Vendas: (11) 3333-3333</p>
                    <p>WhatsApp: (11) 99999-9999</p>
                    <p>Suporte: (11) 4444-4444</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Links Úteis */}
            <div className="footer-section">
              <h4>Links Úteis</h4>
              <ul className="footer-links">
                {linksUteis.map((link, index) => (
                  <li key={index}>
                    <a href={link.href}>{link.nome}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Serviços */}
            <div className="footer-section">
              <h4>Nossos Serviços</h4>
              <ul className="footer-links">
                {servicos.map((servico, index) => (
                  <li key={index}>
                    <span>{servico}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Redes Sociais e Newsletter */}
            <div className="footer-section">
              <h4>Conecte-se Conosco</h4>
              
              <div className="social-media">
                <p>Siga-nos nas redes sociais:</p>
                <div className="social-links">
                  {redesSociais.map((rede, index) => (
                    <a 
                      key={index}
                      href={rede.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                      title={rede.nome}
                    >
                      <span className="social-icon">{rede.icone}</span>
                      <span className="social-name">{rede.nome}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="newsletter">
                <h5>📬 Newsletter</h5>
                <p>Receba novidades sobre energia solar</p>
                <div className="newsletter-form">
                  <input 
                    type="email" 
                    placeholder="Seu e-mail" 
                    className="newsletter-input"
                  />
                  <button className="newsletter-btn">Inscrever</button>
                </div>
              </div>

              <div className="certifications">
                <h5>🏆 Certificações</h5>
                <div className="cert-badges">
                  <span className="cert-badge">INMETRO</span>
                  <span className="cert-badge">ANEEL</span>
                  <span className="cert-badge">ISO 9001</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rodapé Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>&copy; {currentYear} Energia Solar 365. Todos os direitos reservados.</p>
              <p className="legal-note">
                Desenvolvido com 💚 para um futuro mais sustentável
              </p>
            </div>
            
            <div className="footer-bottom-links">
              <a href="#privacy">Política de Privacidade</a>
              <span className="separator">|</span>
              <a href="#terms">Termos de Uso</a>
              <span className="separator">|</span>
              <a href="#cookies">Cookies</a>
            </div>
          </div>
        </div>
      </div>

      {/* Botão Voltar ao Topo */}
      <button 
        className="back-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        title="Voltar ao topo"
      >
        ⬆️
      </button>
    </footer>
  );
};

export default Footer;