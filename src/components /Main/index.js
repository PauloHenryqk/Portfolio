import { knowledge, daily, projects } from "../../data/data"
import { MainStyle } from  "./style"

function Main() {
   return (

      <MainStyle>
        <div id="hardSkills">

           <h2>Possuo conhecimento nas tecnologias</h2>
            <section className="techs">

               <div key={knowledge.map(i => i.tech)} id={knowledge.map(i => i.tech)} className="cardTech">
                  <div className="techName">{knowledge.map(i => i.tech)}</div>
                  <p>{knowledge.map(i => i.msg)}</p>
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

               <div key={daily.map(i => i.name.trim())} className="card">
                  <div id={daily.map(i => i.name)}>
                     <img src={`../../assets/imagens/${daily.map(i => i.img)}`} alt="foto de coisas que faço diarimente" />
                  </div>
                  <div>{daily.map(i => i.name)}</div>
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