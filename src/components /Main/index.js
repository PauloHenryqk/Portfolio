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
               { daily.map((day, index) => {
                  return ( 
                     <div key={index} className="card">
                        <div id={day.name}>
                           <img src={`../../assets/imagens/${daily.map(i => i.img)}`} alt="foto de coisas que faço diarimente" />
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

               <div key={projects.map(i => i.name.trim())} className="projetos" tabindex="0">
                  <div>
                     <a href={projects.map(i => i.gitlink)} rel="noreferrer" target="_blank">
                        <img src={`/assets/imagens/${projects.map(i => i.img)}}`} alt="foto dos projeto" />
                     </a>
                  </div>
                  <p>{projects.map(i => i.name)}</p>
                  <span className="done"></span>
                  <a className="linkGithub" href={projects.map(i => i.gitlink)} rel="noreferrer" target="_blank">
                     ver no github
                     <span className="material-symbols-outlined">open_in_new</span>
                  </a>
               </div>

            </div>
            <div>
               <ion-icon className="arrows" id="arrowLeft" name="arrow-back-circle-outline"></ion-icon>
            </div>

         </div>

      </MainStyle>

   )
}

export default Main