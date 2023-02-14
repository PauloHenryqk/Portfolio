import { MainStyle } from  "./style"

function Main() {
   return (

      <MainStyle>
        <div id="hardSkills">

           <h2>Possuo conhecimento nas tecnologias</h2>
            <section className="techs">

               <div id="html" className="cardTech">
                  <div className="techName">Html</div>
                  <p>sou capaz de estruturar uma página web para ser estilizada de forma fácil e eficiente,
                  com tags semânticas e adicionar acessibilidade ao Web site...</p>
               </div>
               <div id="css" className="cardTech" >
                  <div className="techName">Css</div>
                  <p>sou capaz de estilizar, criar animações e aplicar responsividade as páginasweb...</p>
               </div>
               <div id="js" className="cardTech">
                  <div className="techName">JavaScript</div>
                  <p>sou capaz de criar a dinâmica completa de um web site,
                  quebrar grandes problemas em pequenas partes para melhor resolução...</p>
               </div>
               <div id="reactJs" className="cardTech row2 studing">
                  <div className="techName">React.Js</div>
                  <p>Estudando...</p>
               </div>
               <div id="nodeJs" className="cardTech row2 studing">
                  <div className="techName">Node.js</div>
                  <p>Estudando...</p>
               </div>
               <div id="fireBase" className="cardTech row2 studing">
                  <div className="techName">Fire base</div>
                  <p>Estudando...</p>
               </div>

            </section>
            <div id="seeMore" tabindex="0">
               veja mais
               <ion-icon name="chevron-down-outline"></ion-icon> 
            </div>

         </div>
         <div id="certificationsAndDifferences">

            <section>
               <div className="title">Certificação</div>
               <div>
                  <img src="/assets/imagens/formation.png" alt="foto de formação" />
                  <p>Durante o curso coloquei em prática todo o meu conhecimento técnico em projetos práticos,
                  que me desafiaram e me fizeram buscar diferentes formas de resolver determinado problema. </p>
               </div>
            </section>
            <section>
               <div className="title"><strong>Diferencias</strong></div>
               <div>
                  <img src="/assets/imagens/diferenciais.png" alt="foto de lâmpada" />
                  <p>Me diferencio porque amo estudar e aprender mais sobre tecnologia,
                  sou dedicado e quero evoluir a todo momento, cada vez mais e mais,
                  sempre buscando o melhor de mim mesmo.</p>
               </div>
            </section>

         </div>
         <div id="whatIdo" >

            <h2>Oque eu faço</h2>
            <div className="container">
               <div className="card">
                  <div id="imgSchool">
                     <img src="assets/imagens/ensinoMedioImg.png" alt="foto estudante" />
                  </div>
                  <div>Ensino médio</div>
               </div>
               <div className="card">
                  <div id="imgCourse">
                     <img src="assets/imagens/img-Curso.png" alt="logo prog br" />
                  </div>
                  <div>Curso</div>
               </div>
               <div className="card">
                  <div id="imgEnglish">
                     <img src="assets/imagens/worldImg.png" alt="foto mundo" />
                  </div>
                  <div>Estudo Inglês</div>
               </div>
            </div>

         </div>

         <h2>Oque eu faço</h2>
         <div id="whatIdone">

            <div>
               <ion-icon className="arrows" id="arrowLeft" name="arrow-back-circle-outline"></ion-icon>
            </div>
            <div id="containerProject">

               <div className="projetos" tabindex="0">
                  <div>
                     <a href="https://pomodoro-app-v-2.netlify.app/" target="_blank">
                        <img src="/assets/imagens/pomodoro-img.png" alt="foto projeto pomodoro" />
                    </a>
                  </div>
                  <p>Pomodoro</p>
                  <span className="done"></span>
                  <a className="linkGithub" href="https://github.com/EaiPh/PomodoroApp-v2" target="_blank">
                     ver no github
                     <span className="material-symbols-outlined">open_in_new</span>
                  </a>
               </div>
               <div className="projetos" tabindex="0">
                  <div>
                     <a href="https://memory-game-ph00.netlify.app/" target="_blank">
                        <img src="/assets/imagens/jogo-da-memoria-img.png" alt="foto projeto jogo da memória" />
                     </a>
                  </div>
                  <p>Jogo da memória</p>
                  <span className="done"></span>
                  <a className="linkGithub" href="https://github.com/EaiPh/jogo-da-mem-ria-" target="_blank">
                     ver no github
                     <span className="material-symbols-outlined">open_in_new</span>                                                                                                        
                  </a>
               </div>
               <div className="projetos" tabindex="0">
                  <div>
                     <a href="https://jogo-da-velha-ph.netlify.app/" target="_blank">
                        <img src="/assets/imagens/jogo-da-velha-img.png" alt="foto projeto jogo da velha" />
                     </a>
                  </div>
                  <p>Jogo da velha</p>
                  <span className="done"></span>
                  <a className="linkGithub" href="https://github.com/EaiPh/jogo-da-velha" target="_blank">
                     ver no github
                    <span className="material-symbols-outlined">open_in_new</span>
                  </a>
               </div>
               <div className="projetos" tabindex="0">
                  <div>
                     <a href="https://qrcode-ph.netlify.app/" target="_blank">
                        <img src="/assets/imagens/qrCode-img.png" alt="foto projeto jogo da velha" />
                     </a>
                  </div>
                  <p>Link to Qr code</p>
                  <span className="done"></span>
                  <a className="linkGithub" href="https://github.com/EaiPh/Qrcode" target="_blank">
                     ver no github
                     <span className="material-symbols-outlined">open_in_new</span>
                  </a>   
               </div>
               <div className="projetos" tabindex="0">
                  <div>
                     <a href="https://churrascometro-ph.netlify.app/" target="_blank">
                        <img src="/assets/imagens/churrascometro-img.png" alt="foto projeto churrascometro" />
                     </a>
                  </div>
                  <p>Churrascometro</p>
                  <span className="done"></span>
                  <a className="linkGithub" href="https://github.com/EaiPh/Churrascometro-" target="_blank">
                     ver no github
                     <span className="material-symbols-outlined">open_in_new</span>
                  </a>
               </div>

            </div>

         </div>

      </MainStyle>

   )
}

export default Main