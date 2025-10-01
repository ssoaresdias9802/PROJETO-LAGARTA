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

#### Cabeçalho do dcoumento

O <head> contém informações importantes sobre a página, como:

- codificação de caracteres (UTF-8) para suportar acentos;

- meta viewport para responsividade em dispositivos móveis;

- título da página que aparece na aba do navegador;

- links para arquivos de estilo (CSS) e fontes externas.


    <head>
      
      <meta charset="UTF-8">
      
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
      <title>Formulário de Cadastro</title>
  
      <link rel="stylesheet" href="formulario.css">
  
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&display=swap" rel="stylesheet">
  
    </head>



## Estrutura Formulário

O   form   é o elemento que engloba os campos de entrada e os botões de envio.
A classe form-card serve para aplicar estilo no CSS, como sombra, padding e bordas arredondadas.


    <form class="form-card">
      <h2>Formulário de Cadastro</h2>
      

## Campos de entrada (nome, telefone, e-mail, CEP)

Cada campo é composto por um label e um input:

- label descreve o campo e melhora a acessibilidade.

- for="id" conecta o label ao input correspondente.

- input define o tipo de dado que será digitado e possui atributos como required para obrigar o preenchimento e placeholder para mostrar um exemplo de formato.


      <label for="nome">Nome:</label>
      <input type="text" id="nome" name="nome" required>

      <label for="telefone">Telefone:</label>
      <input type="tel" id="telefone" name="telefone" placeholder="(99) 99999-9999" required>

      <label for="email">E-mail:</label>
      <input type="email" id="email" name="email" required>

      <label for="cep">CEP:</label>
      <input type="text" id="cep" name="cep" placeholder="00000-000" required>


## Botões do formulário

Os botões permitem ações do usuário:

- Voltar: botão que retorna à página anterior sem submeter o formulário (type="button" + onclick="history.back()").

- Enviar: botão que envia os dados do formulário (type="submit").


      <div class="btns">
        <button type="button" class="voltar"  onclick="history.back()">Voltar</button>
        <button type="submit" class="enviar">Enviar</button>
      </div>
  





### style.css

#### O arquivo CSS fornece o estilo visual do formulário, incluindo:
-Remove margens padrão, define fonte base e define fundo rosado (#ffeaf2).



    body {
      margin: 0;
      font-family: Arial, sans-serif;
      background: #ffeaf2;
    }



    
- Usa Flexbox para centralizar o conteúdo horizontal e verticalmente; padding adiciona espaço ao redor (60px top/bottom, 20px sides).

  

        .form-card {
      background: rgba(255, 255, 255, 0.95);
      
      .formulario-section {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 60px 20px;
      }

        .form-card {
      background: rgba(255, 255, 255, 0.95);
      padding: 30px;
      border-radius: 15px;
      max-width: 500px;
      width: 100%;
      box-shadow: 0 8px 15px rgba(0,0,0,0.15);
      display: flex;
      flex-direction: column;
      gap: 15px;
    }

- .form-card é o cartão branco do formulário:

- background semitransparente (fica levemente com o fundo rosado visível).

- padding interno, border-radius canto arredondado.

- max-width: 500px limita a largura em telas grandes; width:100% faz encolher em telas menores.

- box-shadow cria profundidade.

- display:flex em coluna e gap separa os elementos verticalmente.


### Título com a fonte do Google, tamanho e cor.

    .form-card h2 {
      font-family: 'Playfair Display', serif;
      font-size: 28px;
      text-align: center;
      margin-bottom: 15px;
      color: #333;
    }

    
### Estilo dos rótulos (labels).

    .form-card label {
      font-weight: bold;
      font-size: 14px;
      color: #444;
    }


### Inputs com espaçamento interno, borda sutil e raio; width:100% ocupa o espaço da coluna. :focus altera a borda quando o usuário clica (feedback visual).    


    .form-card input {
      padding: 12px;
      border: 1px solid #ccc;
      border-radius: 8px;
      font-size: 16px;
      width: 100%;
      outline: none;
      transition: border 0.3s;
    }
    .form-card input:focus {
      border: 1px solid #ff6f91;
      

    }



### Botões alinhados lado a lado com mesmo tamanho (flex:1).

    
    .btns {
      display: flex;
      gap: 10px;
      justify-content: center;
    }
    .btns button {
      flex: 1;
      padding: 12px;
      border: none;
      border-radius: 8px;
      font-size: 16px;
      cursor: pointer;
      transition: 0.3s;
    }
    .enviar {
      background-color: #ff6f91;
      color: white;
    }
    .enviar:hover {
      background-color: #ff4e75;
    }
    .voltar {
      background-color: #ddd;
      color: #333;
    }
    .voltar:hover {
      background-color: #bbb;
    }


- .enviar rosa com hover mais escuro, .voltar cinza com hover.



### Media query para telas menores:

    @media (max-width: 600px) {
  
      .form-card {
  
        padding: 20px;
  
      }
  
      .form-card h2 {
  
        font-size: 22px;
  
      }
  
      .btns {
  
        flex-direction: column;
  
      }
  
    }



- Menos padding, título menor.

-Botões empilham verticalmente (flex-direction: column) para facilitar toque em celulares.




### O botão é identificado pelo ID dark-mode-toggle(sj).


    const darkModeBtn = document.getElementById('dark-mode-toggle');


    darkModeBtn.addEventListener('click', () => {
  

    document.body.classList.toggle('dark-mode');
  

    if (document.body.classList.contains('dark-mode')) {
      darkModeBtn.textContent = "☀️"; // Ícone de sol para modo escuro
    } else {
      darkModeBtn.textContent = "🌙"; // Ícone de lua para modo claro
    }
    });

-O botão é identificado pelo ID dark-mode-toggle.

-Quando clicado, ele adiciona ou remove a classe dark-mode do elemento <body>.

-Ao mesmo tempo, o ícone do botão muda automaticamente, indicando qual modo está ativo:

-☀️ aparece quando o modo escuro está ativado.

-🌙 aparece quando o modo claro está ativado.


### Validação do Formulário.

-O evento é disparado quando o documento termina de carregar (DOMContentLoaded).

-O formulário é identificado pelo ID form-card.

-Ao submeter o formulário, a função impede o envio real com event.preventDefault().

-Em seguida, exibe um alert confirmando o envio: "Formulário enviado com sucesso!".


      document.addEventListener('DOMContentLoaded', function() {
        document.getElementById('form-card').addEventListener('submit', function(event) {
          event.preventDefault(); // impede envio real do formulário
        alert("Formulário enviado com sucesso!");
      });
    });


### Integrantes: 
Gabriel Souza Martins RA: 10723188 \
Laura Rocha Yaguiu RA: 10736399 \
Stephanie Julia Soares Dias RA: 10223952
