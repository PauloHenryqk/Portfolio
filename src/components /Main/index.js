import { knowledge, daily, projects } from "../../data/data"
import { MainStyle } from  "./style"

function Main() {
   return (

      <MainStyle>
        <div id="hardSkills">

           <h2>Possuo conhecimento nas tecnologias</h2>
            <section className="techs">
               { knowledge.map((tech, index)=>{
                  return (
                     <div key={index} id={tech.name} className="cardTech">
                        <div className="techName">{tech.name}</div>
                        <p>{tech.msg}</p>
                     </div>
                  )                   
                 })
               }
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
                  <img src="./assets/images/formation.png" alt="foto de formação" />
                  <p>Durante o curso coloquei em prática todo o meu conhecimento técnico em projetos práticos,
                  que me desafiaram e me fizeram buscar diferentes formas de resolver determinado problema. </p>
               </div>
            </section>
            <section>
               <div className="title"><strong>Diferencias</strong></div>
               <div>
                  <img src="./assets/images/diferenciais.png" alt="foto de lâmpada" />
                  <p>Me diferencio porque amo estudar e aprender mais sobre tecnologia,
                  sou dedicado e quero evoluir a todo momento, cada vez mais e mais,
                  sempre buscando o melhor de mim mesmo.</p>
               </div>
            </section>

         </div>
         <div id="whatIdo" >

            <h2>Oque eu faço</h2>
            <div className="container">
               { daily.map((day, index) => {
                  return ( 
                     <div key={index} className="card">
                        <div id={day.name}>
                           <img src={`./assets/images/${day.img}`} alt="foto de coisas que faço diarimente" />
                           <div>{day.name}</div>
                        </div>
                     </div>
                  )
                 })
               }
            </div>
         </div>
         <div id="whatIdone">
            
            <h2>Oque já fiz</h2>
            <div>
               <ion-icon className="arrows" id="arrowLeft" name="arrow-back-circle-outline"></ion-icon>
            </div>
            <div id="containerProject">
               { projects.map((project, index) => {
                  return ( 
                     <div key={index} className="projetos" tabindex="0">
                        <div>
                           <a href={project.gitlink} rel="noreferrer" target="_blank">
                              <img src={`./assets/images/${project.img}`} alt="foto dos projeto" />
                           </a>
                        </div>
                        <p>{project.name}</p>
                        <span className="done"></span>
                        <a className="linkGithub" href={project.gitlink} rel="noreferrer" target="_blank">
                           ver no github 
                           <span className="material-symbols-outlined">open_in_new</span>
                        </a>
                     </div>
                  )
                 })
               }
               
               <div class="seeMoreAtGithub" tabindex="0">
                  <div>
                     <ion-icon name="logo-github"></ion-icon>
                  </div>
                  <a href="https://github.com/EaiPh/" rel="noreferrer" target="_blank" tabindex="0">
                     <div>
                        <strong>veja mais</strong>
                        no GitHub 
                        <span class="material-symbols-outlined">open_in_new</span>
                     </div>
                  </a>
               </div>

            </div>
            <div>
               <ion-icon className="arrows" id="arrowRight" name="arrow-forward-circle-outline"></ion-icon>
            </div>

         </div>

      </MainStyle>

   )
}

export default Main