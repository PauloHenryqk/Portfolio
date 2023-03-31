import { HeaderStyle } from "./style"
import { sideBarSet } from "./script"

function Header() {
   
    return (
       <HeaderStyle>
           <nav>

               <ul id="socialMedias">

                  <li id="linkedIn">
                    <a href="https://www.linkedin.com/in/paulo-henryqk-7a1b08231" rel="noreferrer" target="_blank" tabIndex="0">
                      <ion-icon className="socialMediasIcon" name="logo-linkedin"></ion-icon>
                    </a>
                  </li>
                  <li id="gmail">
                      <a href="mailto:paulohenryqkoficial@gmail.com" rel="noreferrer" target="_blank" tabIndex="0">
                         <ion-icon className="socialMediasIcon" name="mail-outline"></ion-icon>
                      </a>
                  </li>
                  <li id="github">
                     <a href="https://github.com/EaiPh" rel="noreferrer" target="_blank" tabIndex="0">
                        <ion-icon className="socialMediasIcon" name="logo-github"></ion-icon>
                     </a>
                  </li>
                  <li id="instagram">
                     <a href="https://instagram.com/paulo_henryqk" rel="noreferrer" target="_blank" tabIndex="0">
                        <ion-icon className="socialMediasIcon" name="logo-instagram"></ion-icon>
                     </a>
                  </li>

               </ul>
           
              <div id="profilePicture" tabIndex="0">
                  <img id="picture" src="./assets/images/profilePicture.png" alt="foto de perfil" />
              </div>

              <ion-icon onClick={sideBarSet.open} id="sideShortCut" name="reorder-three-outline" tabIndex="0"></ion-icon>

              <aside>
                 <ion-icon onClick={sideBarSet.close} id="closeBar" name="close-circle-outline" tabIndex="0"></ion-icon>
                 <ul>
                    <li><a href="#hardSkills" tabIndex="0">HardSkills</a></li>
                    <li><a href="#certificationsAndDifferences" tabIndex="0">Certificações</a></li>
                    <li><a href="#whatIdo" tabIndex="0">Oque faço</a></li>
                    <li><a href="#whatIdone" tabIndex="0">Oque já fiz</a></li>
                    <li><a href="#contact" tabIndex="0">Contato</a></li>
                 </ul>
              </aside>

           </nav>
           <div id="presentation">
              <h1>Paulo Henrique</h1>
              <small>Sou Desenvolvedor web, iniciei meus estudos
               de forma online e gratuita, comprei um curso e
               estou estudando com foco em Desenvolvimento Web.
               </small>
           </div>

       </HeaderStyle>

    )
}

export default Header 