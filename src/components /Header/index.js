import React, { Component } from "react"

function Header() {
    return (
       <>

        <Nav>
                 
            <ul id="socialMedias">
                <li id="linkedIn">
                    <a href="https://www.linkedin.com/in/paulo-henryqk-7a1b08231"  tabindex="0">
                        <ion-icon className="socialMediasIcon" name="logo-linkedin"></ion-icon>
                    </a>
                </li>
                <li id="gmail">
                    <a href="mailto:paulohenryqkoficial@gmail.com"  tabindex="0">
                        <ion-icon className="socialMediasIcon" name="mail-outline"></ion-icon>
                    </a>
                </li>
                <li id="github">
                    <a href="https://github.com/EaiPh"  tabindex="0">
                       <ion-icon className="socialMediasIcon" name="logo-github"></ion-icon>
                    </a>
                </li>
                <li id="instagram">
                    <a href="https://instagram.com/paulo_henryqk"  tabindex="0">
                        <ion-icon className="socialMediasIcon" name="logo-instagram"></ion-icon>
                    </a>
                </li>
            </ul>
            <div id="profilePicture" tabindex="0">
               <img id="picture" src="assets/imagens/profilePicture.png" alt="foto de perfil" />
            </div>                                

            <ion-icon id="sideShortCut" name="reorder-three-outline" tabindex="0"></ion-icon>

            <aside id="aside">                              
               <ion-icon id="closeBar" name="close-circle-outline" tabindex="0"></ion-icon>
               <ul>
                   <li><a href="#hardSkills" tabindex="0">HardSkills</a></li>
                   <li><a href="#certificationsAndDifferences" tabindex="0">Certificações</a></li>
                   <li><a href="#whatIdo" tabindex="0">Oque faço</a></li>
                   <li><a href="#whatIdone" tabindex="0">Oque já fiz</a></li>
                   <li><a href="#contact" tabindex="0">Contato</a></li>
               </ul>
            </aside>

        </Nav>
        <div id="presentation">
           <h1>Paulo Henrique</h1>
           <small>Sou Desenvolvedor web, iniciei meus estudos
           <br>de forma online e gratuita, comprei um curso e
           </br>estou estudando com foco em Desenvolvimento Web.
            </small>
        </div>

       </>

    )
}

export default Header 