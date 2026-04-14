import "../App.css";

export default function Perfil() {
  return (
    <div className="container">
      <div className="layout">

        <div className="main">

          {/* PERFIL */}
          <div className="card perfil">
            <div className="capa"></div>

            <div className="perfil-info">
              <img
                src="https://i.pinimg.com/736x/2a/60/51/2a60511bb148fd2809fb49dd64e6cdb6.jpg"
                alt="perfil"
                className="foto"
              />

              <div className="texto">
                <h2>Nome Sobrenome</h2>
                <p>Desenvolvedora | HTML | CSS | Typescript | Node</p>
                <span>Cidade, estado e país</span>

                <div className="botoes">
                  <button className="btn-azul">Mensagem</button>
                  <button className="btn-cinza">Mais</button>
                </div>
              </div>
            </div>
          </div>

          {/* DESTAQUES COM IMAGEM */}
          <div className="card">
            <h3>Destaques</h3>

            <div className="destaques">
              <img
                src="https://www.univates.br/blog/wp-content/uploads/2024/07/Imagens-posts-blog-45-1920x1280.jpg"
                className="post"
                alt="post1"
              />

              <img
                src="https://media.istockphoto.com/id/1199291049/pt/foto/group-of-people-writing-on-sticky-notes.jpg?s=2048x2048&w=is&k=20&c=vCFVoJOmxELFw290hIKqN1GSlCPABVtfAUDolTv7M_E="
                className="post"
                alt="post2"
              />

              <img
                src="https://wordpress-cms-ead-prod-assets.quero.space/uploads/2024/04/software.jpg"
                className="post"
                alt="post3"
              />
            </div>
          </div>

          {/* SOBRE */}
          <div className="card">
            <h3>Sobre</h3>
            <p>Fala sobre #javascript, #frontend, #reactjs e #backend</p>
          </div>

          {/* EXPERIÊNCIAS */}
          <div className="card">
            <h3>Experiências</h3>

            <div className="experiencia">
              <img 
                src="https://img.odcdn.com.br/wp-content/uploads/2021/06/shutterstock_370707185_Easy-Resize.com_-e1624471909677.jpg" 
                className="logo" 
              />

              <div className="empresa-info">
                <strong>Empresa</strong>
                <p>1 a 7 meses</p>

                <div className="linha"></div>

                <div className="cargo">
                  <div className="bolinha"></div>
                  <div>
                    <strong>Fullstack Developer</strong>
                    <p>Tempo integral</p>
                    <span>jan de 2022 - o momento</span>
                  </div>
                </div>

                <div className="cargo">
                  <div className="bolinha"></div>
                  <div>
                    <strong>Front-end Developer</strong>
                    <p>Tempo integral</p>
                    <span>jan de 2021 - jun de 2021</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* FORMAÇÃO */}
          <div className="card">
            <h3>Formação acadêmica</h3>

            <div className="formacao">
              <img 
                src="https://www.missaosalesiana.org.br/wp-content/uploads/2025/07/20-anos-credenciamento-Unisalesiano.webp" 
                className="logo-grande" 
              />

              <div>
                <strong>Instituição de ensino</strong>
                <p>Nome do curso</p>
                <span>2015 a 2019</span>
              </div>
            </div>
          </div>

          {/* IDIOMAS */}
          <div className="card">
            <h3>Idiomas</h3>

            <div className="idioma">
              <strong>Português</strong>
              <p>Fluente ou nativo</p>
            </div>

            <hr />

            <div className="idioma">
              <strong>Inglês</strong>
              <p>Intermediário</p>
            </div>
          </div>

        </div>

        {/* SIDEBAR */}
        <div className="sidebar">

          <div className="card">
            <h4>As pessoas também viram</h4>

            <div className="user">
              <span>Usuário 1</span>
              <button className="btn-outline">Mensagem</button>
            </div>

            <div className="user">
              <span>Usuário 2</span>
              <button className="btn-outline">Mensagem</button>
            </div>

            <div className="user">
              <span>Usuário 3</span>
              <button className="btn-outline">Mensagem</button>
            </div>
          </div>

          <div className="card">
            <h4>Pessoas que talvez você conheça</h4>

            <div className="user">
              <span>Usuário 4</span>
              <button className="btn-azul">Conectar</button>
            </div>

            <div className="user">
              <span>Usuário 5</span>
              <button className="btn-azul">Conectar</button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}