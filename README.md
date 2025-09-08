# PROJETO-LAGARTA

Para criarmos nosso projeto de caráter extensionista, decidimos colaborar com uma confeitaria iniciante no mercado. \
Atualmente a proprietária da Velours Pâtisserie (Carolina Macedo) vende as comidas majoritariamente dentro de seu condomínio via WhatsApp, porém quer expandir seu público e, através de um website, aumentar o alcance e a divulgação de seus produtos.

De início, pensamos em um site e-commerce, o qual irá abrangir:
- Uma home page (com seções sobre nós, cardápio, novidades, contatos);
- Um menu de navegação com versão mobile;
- Uma seção hero de destaque com o nome da Pâtisserie;
- Sobre nós (informações sobre a confeitaria e a confeiteira);
- Menu (com fotos e características dos doces);
- Contatos (tanto página do Instagram como telefone para agendamentos);

Wireframe:
<img width="1366" height="3586" alt="wireframe" src="https://github.com/user-attachments/assets/abc81f80-497b-4709-94e1-a9ef8c678a6d" />

# Tutorial
1. Estrutura em HTML

O HTML organiza o conteúdo do site em seções bem definidas.
- Cabeçalho e Navegação
<nav class="navbar" id="navbar">
  <section class="nav-container">
    <header class="nav-header">
      <section class="logo-section">
        <figure class="logo"><span>V</span></figure>
      </section>

      <!-- Menu desktop -->
      <section class="nav-links desktop-nav">
        <a href="#home" class="nav-link">HOME</a>
        <a href="#sobre-nos" class="nav-link">SOBRE NÓS</a>
        <a href="#menu" class="nav-link">MENU</a>
        <a href="#contatos" class="nav-link">CONTATOS</a>
      </section>

      <!-- Botão mobile -->
      <button class="mobile-menu-btn" id="mobile-menu-btn">
        <span class="hamburger"></span>
        <span class="hamburger"></span>
        <span class="hamburger"></span>
      </button>
    </header>

    <!-- Menu mobile -->
    <section class="mobile-nav" id="mobile-nav">
      <nav class="mobile-nav-links">
        <a href="#home" class="nav-link">HOME</a>
        <a href="#sobre-nos" class="nav-link">SOBRE NÓS</a>
        <a href="#menu" class="nav-link">MENU</a>
        <a href="#contatos" class="nav-link">CONTATOS</a>
      </nav>
    </section>
  </section>
</nav>
Aqui temos:
- Um logo estilizado com a letra “V”. 
- Links de navegação tanto para desktop quanto para mobile. 
- Um botão “hambúrguer” que abre/fecha o menu em telas pequenas. 

- Hero Section
<section id="home" class="hero-section">
  <aside class="hero-bg-pattern">
    <figure class="bg-circle bg-circle-1"></figure>
    <figure class="bg-circle bg-circle-2"></figure>
  </aside>
  
  <section class="hero-container">
    <aside class="signup-btn-container">
      <button class="signup-btn">Cadastra-se!</button>
    </aside>
    
    <header class="hero-header">
      <h1 class="hero-title">VELOURS</h1>
      <p class="hero-subtitle">Pâtisserie</p>
    </header>
  </section>
</section>

É a seção principal que aparece ao carregar o site: 
- Botão de cadastro. 
- Nome da confeitaria em destaque. 






Integrantes: \
Gabriel Souza Martins; RA: 10723188 \
Giulia Del Ry Ribeiro; RA: 10723383 \
Laura Rocha Yaguiu; RA: 10736399 \
Stephanie Julia Soares Dias; RA: 10223952
