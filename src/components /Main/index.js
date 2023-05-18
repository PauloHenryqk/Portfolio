import { knowledge, daily, projects } from "../../data/data"
import { MainStyle } from  "./style"
import { arrows } from "./script"

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
                        <ul>
                           {
                             tech.msg.map( (txt, index) => {
                                 return (
                                    <li key={index}>{txt}</li>
                                 )
                              })
                           }
                        </ul>
                     </div>
                  )                   
                 })
               }
            </section>
            {/*
            <div id="seeMore" onClick={} tabIndex="0">
               veja mais
               <ion-icon name="chevron-down-outline"></ion-icon> 
            </div>
            */}
         </div>
         <div id="certificationsAndDifferences">

            <section>
               <div className="title">Certificação</div>
               <div>
                  <img src="./assets/images/formation.png" alt="foto de formação" />
                  <p>Durante o curso coloquei em prática todo o meu conhecimento técnico em projetos,
                  que me desafiaram e me fizeram buscar diferentes formas de resolver determinado problema. </p>
               </div>
            </section>
            <section>
               <div className="title"><strong>Diferencias</strong></div>
               <div>
                  <img src="./assets/images/diferenciais.png" alt="foto de lâmpada" />
                  <p>Quero crescer profissionalmente, aprender, realizar sonhos e estou disposto a trabalhar o máximo possível para isso, evoluir pessoalmente, profissional, intelectualmente e desenvolver novas skils.</p>
               </div>
            </section>

         </div>
         <div id="whatIdo" >

            <h2>Oque eu faço</h2>
            <div className="container">
               { daily.map((day, index) => {
                  return ( 
                     <div key={index} className="card">
                        <div id={day.id}>
                           <img src={`./assets/images/${day.img}`} alt="foto de coisas que faço diarimente" />
                        </div>
                        <div>{day.name}</div>
                     </div>
                  )
                 })
                 
               }
            </div> 
         </div>
         <div id="whatIdone">
            
            <h2>Oque já fiz</h2>

            <div>
               <ion-icon onClick={arrows.scrollLeft} className="arrows" id="arrowLeft" name="arrow-back-circle-outline"></ion-icon>
            </div>
            <div id="containerProject">
               { projects.map((project, index) => {
                  return ( 
                     <div key={index} className="projetos" tabIndex="0">
                        <div>
                           <a href={project.gitlink} rel="noreferrer" target="_blank">
                              <img src={`./assets/images/${project.img}`} alt="foto dos projeto" />
                           </a>
                        </div>
                        <p>{project.name}</p>
                        <span className="done">
                        </span>
                        <a className="linkGithub" href={project.gitlink} rel="noreferrer" target="_blank">
                           ver no github 
                           <span className="material-symbols-outlined">open_in_new</span>
                        </a>
                     </div>
                  )
                 })
               }
               
               <div className="seeMoreAtGithub" tabIndex="0">
                  <div>
                     <ion-icon name="logo-github"></ion-icon>
                  </div>
                  <a href="https://github.com/EaiPh/" rel="noreferrer" target="_blank" tabIndex="0">
                     <div>
                        <strong>veja mais</strong>
                        no GitHub 
                        <span className="material-symbols-outlined">open_in_new</span>
                     </div>
                  </a>
               </div>
            </div>
            <div>
               <ion-icon onClick={arrows.scrollRight} className="arrows" id="arrowRight" name="arrow-forward-circle-outline"></ion-icon>
            </div>

         </div>

      </MainStyle>

   )
}          

export default Main