import React from 'react';
import './Produtos.css';

const Produtos = () => {
  const produtos = [
    {
      id: 1,
      nome: "Placa Solar 550W",
      imagem: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=400&h=300&fit=crop&auto=format",
      descricao: "Painel solar monocristalino de alta eficiência para uso residencial e comercial.",
      especificacoes: [
        "Potência: 550W",
        "Eficiência: 21,5%",
        "Garantia: 25 anos",
        "Vida útil: 30+ anos"
      ],
      preco: "A partir de R$ 890",
      categoria: "paineis"
    },
    {
      id: 2,
      nome: "Kit Solar Completo 5kW",
      imagem: "https://images.unsplash.com/photo-1624397640148-949b1732bb0a?w=400&h=300&fit=crop&auto=format",
      descricao: "Kit completo com painéis, inversor, estruturas e todos os componentes para instalação.",
      especificacoes: [
        "Potência: 5kW",
        "Painéis: 10x 550W",
        "Inversor incluído",
        "Estruturas de fixação"
      ],
      preco: "A partir de R$ 18.990",
      categoria: "kits"
    },
    {
      id: 3,
      nome: "Inversor Solar 5kW",
      imagem: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=300&fit=crop&auto=format",
      descricao: "Inversor string de alta qualidade que converte energia DC dos painéis em AC para sua casa.",
      especificacoes: [
        "Potência: 5kW",
        "Eficiência: 97,5%",
        "Proteção IP65",
        "Monitoramento WiFi"
      ],
      preco: "A partir de R$ 3.490",
      categoria: "inversores"
    },
    {
      id: 4,
      nome: "Kit Solar Residencial 3kW",
      imagem: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=400&h=300&fit=crop&auto=format",
      descricao: "Solução ideal para residências pequenas e médias com consumo até 400kWh/mês.",
      especificacoes: [
        "Potência: 3kW",
        "Painéis: 6x 550W",
        "Gera até 450kWh/mês",
        "Ideal para residências"
      ],
      preco: "A partir de R$ 12.990",
      categoria: "kits"
    },
    {
      id: 5,
      nome: "Estrutura de Fixação",
      imagem: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&auto=format",
      descricao: "Estruturas em alumínio para fixação segura dos painéis em telhados cerâmicos e metálicos.",
      especificacoes: [
        "Material: Alumínio",
        "Resistência: Ventos 180km/h",
        "Para telhados: Cerâmica/Metálico",
        "Garantia: 20 anos"
      ],
      preco: "A partir de R$ 450",
      categoria: "estruturas"
    },
    {
      id: 6,
      nome: "Sistema de Monitoramento",
      imagem: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&auto=format",
      descricao: "Sistema completo para monitoramento da geração de energia em tempo real via app.",
      especificacoes: [
        "Monitoramento 24h",
        "App móvel",
        "Alertas automáticos",
        "Relatórios detalhados"
      ],
      preco: "A partir de R$ 890",
      categoria: "monitoramento"
    }
  ];

  const categorias = [
    { id: 'todos', nome: 'Todos os Produtos' },
    { id: 'kits', nome: 'Kits Completos' },
    { id: 'paineis', nome: 'Painéis Solares' },
    { id: 'inversores', nome: 'Inversores' },
    { id: 'estruturas', nome: 'Estruturas' },
    { id: 'monitoramento', nome: 'Monitoramento' }
  ];

  const [categoriaAtiva, setCategoriaAtiva] = React.useState('todos');

  const produtosFiltrados = categoriaAtiva === 'todos' 
    ? produtos 
    : produtos.filter(produto => produto.categoria === categoriaAtiva);

  return (
    <section id="produtos" className="produtos">
      <div className="container">
        <div className="section-header">
          <h2>Nossos Produtos</h2>
          <p className="section-subtitle">
            Soluções completas em energia solar com a melhor qualidade do mercado
          </p>
        </div>

        {/* Filtros por categoria */}
        <div className="categorias-filter">
          {categorias.map((categoria) => (
            <button
              key={categoria.id}
              className={`filter-button ${categoriaAtiva === categoria.id ? 'active' : ''}`}
              onClick={() => setCategoriaAtiva(categoria.id)}
            >
              {categoria.nome}
            </button>
          ))}
        </div>

        {/* Grid de produtos */}
        <div className="produtos-grid">
          {produtosFiltrados.map((produto) => (
            <div key={produto.id} className="produto-card">
              <div className="card-image">
                <img src={produto.imagem} alt={produto.nome} />
                <div className="image-overlay">
                  <button className="view-details-btn">Ver Detalhes</button>
                </div>
              </div>
              
              <div className="card-content">
                <h3 className="produto-nome">{produto.nome}</h3>
                <p className="produto-descricao">{produto.descricao}</p>
                
                <div className="especificacoes">
                  <h4>Especificações:</h4>
                  <ul>
                    {produto.especificacoes.map((spec, index) => (
                      <li key={index}>{spec}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="card-footer">
                  <span className="preco">{produto.preco}</span>
                  <button className="orcamento-btn">Solicitar Orçamento</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="produtos-cta">
          <div className="cta-content">
            <h3>Não encontrou o que procura?</h3>
            <p>Temos soluções personalizadas para cada necessidade. Entre em contato conosco!</p>
            <button className="custom-solution-btn">
              Solicitar Solução Personalizada
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Produtos;