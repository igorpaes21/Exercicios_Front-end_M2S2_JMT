import React, { useState } from 'react';
import './Orcamento.css';

const Orcamento = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    tipoSistema: '',
    consumoMensal: '',
    tipoImovel: '',
    cep: '',
    mensagem: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const tiposSistema = [
    { value: '', label: 'Selecione o tipo de sistema' },
    { value: 'residencial-3kw', label: 'Residencial 3kW (até 400kWh/mês)' },
    { value: 'residencial-5kw', label: 'Residencial 5kW (até 650kWh/mês)' },
    { value: 'residencial-8kw', label: 'Residencial 8kW (até 1.000kWh/mês)' },
    { value: 'comercial-10kw', label: 'Comercial 10kW (até 1.300kWh/mês)' },
    { value: 'comercial-20kw', label: 'Comercial 20kW (até 2.600kWh/mês)' },
    { value: 'industrial', label: 'Industrial (acima de 2.600kWh/mês)' },
    { value: 'personalizado', label: 'Sistema Personalizado' }
  ];

  const tiposImovel = [
    { value: '', label: 'Selecione o tipo de imóvel' },
    { value: 'casa', label: 'Casa' },
    { value: 'apartamento', label: 'Apartamento' },
    { value: 'comercio', label: 'Comércio' },
    { value: 'industria', label: 'Indústria' },
    { value: 'rural', label: 'Propriedade Rural' },
    { value: 'condominio', label: 'Condomínio' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envio do formulário
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Dados do orçamento:', formData);
      setSubmitStatus('success');
      
      // Limpar formulário após sucesso
      setFormData({
        nome: '',
        email: '',
        telefone: '',
        tipoSistema: '',
        consumoMensal: '',
        tipoImovel: '',
        cep: '',
        mensagem: ''
      });
      
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      
      // Limpar status após 5 segundos
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <section id="orcamento" className="orcamento">
      <div className="container">
        <div className="section-header">
          <h2>Solicite seu Orçamento Gratuito</h2>
          <p className="section-subtitle">
            Preencha o formulário abaixo e receba uma proposta personalizada em até 24 horas
          </p>
        </div>

        <div className="orcamento-content">
          <div className="form-container">
            <form onSubmit={handleSubmit} className="orcamento-form">
              {/* Dados Pessoais */}
              <div className="form-section">
                <h3>Dados Pessoais</h3>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="nome">Nome Completo *</label>
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      value={formData.nome}
                      onChange={handleInputChange}
                      required
                      placeholder="Digite seu nome completo"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">E-mail *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="telefone">Telefone/WhatsApp *</label>
                    <input
                      type="tel"
                      id="telefone"
                      name="telefone"
                      value={formData.telefone}
                      onChange={handleInputChange}
                      required
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="cep">CEP</label>
                    <input
                      type="text"
                      id="cep"
                      name="cep"
                      value={formData.cep}
                      onChange={handleInputChange}
                      placeholder="00000-000"
                    />
                  </div>
                </div>
              </div>

              {/* Informações do Sistema */}
              <div className="form-section">
                <h3>Informações do Sistema</h3>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="tipoSistema">Tipo de Sistema *</label>
                    <select
                      id="tipoSistema"
                      name="tipoSistema"
                      value={formData.tipoSistema}
                      onChange={handleInputChange}
                      required
                    >
                      {tiposSistema.map(tipo => (
                        <option key={tipo.value} value={tipo.value}>
                          {tipo.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="tipoImovel">Tipo de Imóvel</label>
                    <select
                      id="tipoImovel"
                      name="tipoImovel"
                      value={formData.tipoImovel}
                      onChange={handleInputChange}
                    >
                      {tiposImovel.map(tipo => (
                        <option key={tipo.value} value={tipo.value}>
                          {tipo.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="consumoMensal">Consumo Mensal Médio (kWh)</label>
                    <input
                      type="number"
                      id="consumoMensal"
                      name="consumoMensal"
                      value={formData.consumoMensal}
                      onChange={handleInputChange}
                      placeholder="Ex: 300"
                      min="50"
                      max="10000"
                    />
                    <small>Você encontra essa informação na sua conta de luz</small>
                  </div>
                </div>
              </div>

              {/* Mensagem Adicional */}
              <div className="form-section">
                <div className="form-group">
                  <label htmlFor="mensagem">Informações Adicionais</label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleInputChange}
                    rows="4"
                    placeholder="Descreva detalhes sobre seu projeto, dúvidas ou necessidades específicas..."
                  ></textarea>
                </div>
              </div>

              {/* Status de envio */}
              {submitStatus === 'success' && (
                <div className="submit-status success">
                  ✅ Orçamento enviado com sucesso! Entraremos em contato em breve.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="submit-status error">
                  ❌ Erro ao enviar orçamento. Tente novamente ou entre em contato conosco.
                </div>
              )}

              {/* Botão de envio */}
              <div className="form-actions">
                <button 
                  type="submit" 
                  className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="loading-spinner"></span>
                      Enviando...
                    </>
                  ) : (
                    'Solicitar Orçamento Gratuito'
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Informações adicionais */}
          <div className="info-sidebar">
            <div className="info-card">
              <h3>🚀 Orçamento Rápido</h3>
              <p>Resposta em até 24 horas com proposta detalhada</p>
            </div>
            
            <div className="info-card">
              <h3>💰 Sem Compromisso</h3>
              <p>Orçamento gratuito e sem obrigação de compra</p>
            </div>
            
            <div className="info-card">
              <h3>🏆 Garantia Total</h3>
              <p>Produtos com garantia de 25 anos e instalação certificada</p>
            </div>

            <div className="info-card">
              <h3>📞 Atendimento Especializado</h3>
              <p>Equipe técnica qualificada para tirar todas suas dúvidas</p>
            </div>

            <div className="contact-info">
              <h4>Precisa de ajuda?</h4>
              <p><strong>WhatsApp:</strong> (11) 99999-9999</p>
              <p><strong>E-mail:</strong> contato@energiasolar365.com.br</p>
              <p><strong>Horário:</strong> Seg-Sex 8h às 18h</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Orcamento;