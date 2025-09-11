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

### Wireframe:
<img width="1366" height="3586" alt="wireframe" src="https://github.com/user-attachments/assets/abc81f80-497b-4709-94e1-a9ef8c678a6d" />

# Tutorial
## 1. Estrutura em HTML do Index

O HTML organiza o conteúdo do site em seções bem definidas.
### Cabeçalho e Navegação
Aqui temos:
- Um logo estilizado com a letra “V”. 
- Links de navegação tanto para desktop quanto para mobile. 
- Um botão “hambúrguer” que abre/fecha o menu em telas pequenas.

<!--
<nav class="navbar" id="navbar">
  <section class="nav-container">
    <header class="nav-header">
      <section class="logo-section">
        <figure class="logo"><span>V</span></figure>
      </section> -->

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

### Hero Section
É a seção principal que aparece ao carregar o site: 
- Botão de cadastro que direciona para o formulário. 
- Nome da confeitaria em destaque. 

<!--
<section id="home" class="hero-section">
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
 -->

### Seção Sobre Nós
Apresenta a história da confeitaria e uma citação inspiradora.
<!--
<section id="sobre-nos" class="sobre-nos-section">
  <section class="container">
    <section class="sobre-nos-grid">
      <header class="sobre-nos-header"><h2>SOBRE NÓS</h2></header>
      <article class="sobre-nos-content">
        <p class="main-text">Seven dishes. Six drinks...</p>
        <blockquote class="quote">
         <p>"Cada criação é uma obra de arte..."</p>
        </blockquote>
      </article>
    </section>
  </section>
</section>
 -->

### Seção Menu (Cardápio)
Mostra as três principais categorias:
- Doces
- Salgados
- Bolos artísticos
<!--
<section id="menu" class="menu-section">
  <section class="container">
    <header class="menu-header"><h2>NO CARDÁPIO</h2></header>
    <section class="menu-grid">
      <article class="menu-item menu-delights">...</article>
      <article class="menu-item menu-savory">...</article>
      <article class="menu-item menu-cakes">...</article>
    </section>
    <footer class="menu-footer"><p>Explore nossa seleção...</p></footer>
  </section>
</section>
-->

### Seção Novidades
Aqui são apresentadas promoções sazonais e a possibilidade de encomendas personalizadas.
<!--
<section class="novidades-section">
  <aside class="novidades-bg">
    <figure class="novidades-image">
      <section class="novidades-image-content">
        <h3>Sobremesas</h3><h3>Especiais</h3>
      </section>
    </figure>
  </aside>
  <section class="container">
    <section class="novidades-grid">
      <section></section>
      <section class="novidades-content-wrapper">
        <article class="novidades-content">
          <header><h2>NOVIDADES</h2></header>
          <section class="news-items">
            <article class="news-item news-winter">...</article>
            <article class="news-item news-custom">...</article>
          </section>
        </article>
      </section>
    </section>
  </section>
</section>
-->

### Seção Contatos + Rodapé
Mostra os telefones, e-mail e Instagram, além do rodapé com links de navegação.
<!--
<section id="contatos" class="contatos-section">
  <section class="container">
    <header class="contatos-header"><h2>CONTATOS</h2></header>
    <section class="contatos-grid">
      <section class="contact-info">
        <article class="contact-item">📞 Telefone</article>
        <article class="contact-item">📧 E-mail</article>
        <article class="contact-item">📱 Redes Sociais</article>
      </section>
    </section>
    <footer class="footer-content">
      <section class="footer-links">...</section>
      <section class="footer-bottom">
        <p>&copy; 2025 VELOURS Pâtisserie. Todos os direitos reservados.</p>
      </section>
    </footer>
  </section>
</section>
-->

## 2. Estilo com CSS
### Reset inicial:
* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: 'Kuchek', sans-serif; color: #374151; }

### Navbar fixa com transparência:
.navbar {
  position: fixed;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
}

### Botão arredondado e animado:
.signup-btn { background: #14b8a6; border-radius: 9999px; }
.signup-btn:hover { background: #0f766e; }

### Responsividade com media queries:
No desktop, o menu aparece em linha; no mobile, vira um menu hamburguer.
Com media queries, o layout se adapta a diferentes tamanhos de tela.
@media (min-width: 768px) {
    .desktop-nav {
        display: flex;
    }
    .mobile-menu-btn {
        display: none;
    }



## 2. Estrutura do Formulário

### O projeto é composto por dois arquivos principais:

    - index.html: Arquivo HTML contendo a estrutura do formulário.

    - style.css: Arquivo CSS responsável pelo estilo e layout do formulário.

### index.html

#### O arquivo HTML contém a estrutura básica do formulário de cadastro, que inclui os seguintes campos:

    - Nome: Um campo de texto para o nome completo do usuário.

    - Telefone: Um campo de entrada para o número de telefone, com máscara no formato (99) 99999-9999.

    - E-mail: Um campo de entrada para o endereço de e-mail.

    - CEP: Um campo de entrada para o código postal (CEP), com máscara 00000-000.

    - O formulário também possui dois botões:

    - Voltar: Um botão que utiliza o comando history.back() para voltar à página anterior.

    - Enviar: Um botão para enviar os dados do formulário. A validação de preenchimento dos campos ocorre antes de enviar o formulário.

### style.css

#### O arquivo CSS fornece o estilo visual do formulário, incluindo:

    - Layout responsivo: O formulário se adapta automaticamente a diferentes tamanhos de tela, como dispositivos móveis e desktop.
          

    - Botões com animação: Os botões têm um efeito de hover que altera a cor quando o usuário passa o mouse sobre eles.
          
    - Caixas de entrada com bordas arredondadas e transições suaves.


### Integrantes: 
Gabriel Souza Martins RA: 10723188 \
Giulia Del Ry Ribeiro RA: 10723383 \
Laura Rocha Yaguiu RA: 10736399 \
Stephanie Julia Soares Dias RA: 10223952
