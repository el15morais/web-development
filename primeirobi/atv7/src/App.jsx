import React from 'react'
import './App.css'

const Navigation = () => (
  <nav>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">sobre</a></li>
      <li><a href="#">Contato</a></li>
    </ul>
  </nav>
)

const Header = () => (
  <header>
    <h1>Meu Blog de Viagens</h1>
    <Navigation />
  </header>
)

const Article = (props) => {
  return (
    <article>
      <h2>{props.titulo}</h2>
      <time>{props.data}</time>
      <div className="post-content">
        {props.conteudo.map((paragrafo, index) => (
          <p key={index}>{paragrafo}</p>
        ))}
      </div>
      <figure>
        <img src={props.imagem} alt="Praia" />
        <figcaption>Imagem ilustrativa da internet.</figcaption>
      </figure>
    </article>
  )
}

const Sidebar = () => (
  <aside>
    <h3>Posts Relacionados</h3>
    <ul>
      <li><a href="#">Outro blog com praia</a></li>
      <li><a href="#">Mais um blog com praia</a></li>
      <li><a href="#">Último blog de praia</a></li>
    </ul>
  </aside>
)

const Footer = () => (
  <footer>
    <p>&copy; 2026 - Todos os direitos reservados.</p>
  </footer>
)

function App() {
  const postInfo = {
    titulo: "Descobrindo as Praias do Nordeste",
    data: "15 de agosto de 2025",
    imagem: "https://production.media.dcx.clubmed/?url=https%3A%2F%2Fassets.dream.clubmed%2Fpm_7531_578_578532-10p5gshmmk-swhr.jpg&format=webp&width=300&height=300&quality=70",
    conteudo: [
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui incidunt eaque voluptatum natus ex laborum ut veritatis accusantium repudiandae maxime culpa molestiae consequuntur sit, accusamus, quia, tempora sed odit? Quis!",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti id pariatur nostrum placeat animi repellat.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, vero numquam. Perferendis incidunt libero aspernatur alias autem ipsum illum modi."
    ]
  }

  return (
    <>
      <Header />
      <main>
        <Article 
          titulo={postInfo.titulo}
          data={postInfo.data}
          conteudo={postInfo.conteudo}
          imagem={postInfo.imagem}
        />
        <Sidebar />
      </main>
      <Footer />
    </>
  )
}

export default App