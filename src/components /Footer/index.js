import { FooterStyle } from "./style"

function Footer() {
    return (
        <FooterStyle>
           <form action="https://gmail.us12.list-manage.com/subscribe/post?u=293c40808a3996973cdae368d&amp;id=54e6b8f429&amp;f_id=00cf7be0f0" class="contact validate" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_self">

              <div>
                 <label for="email">Email</label>
                 <input type="text" name="EMAIL" id="email"/>
              </div>
              <div>
                 <label for="name">nome</label>
                 <input type="text" name="FNAME" id="name"/>
              </div>
              <div>
                 <label for="subject">Assunto</label>
                 <input type="text" name="DISCUSS" id="subject"/>
              </div>
              <div>
                 <label for="mesage">mensagem</label>
                 <textarea name="MSG" rows="8" cols="5" id="mesage"></textarea>
              </div>

              <input type="submit" name="btn" id="btn" value="Enviar" />

              <div id="area-hidden" aria-hidden="true">
                 <input type="text" name="b_293c40808a3996973cdae368d_54e6b8f429" tabindex="-1" value="" />
              </div>
           </form>

           <div id="phrase">&lt;/THINK DIFFERENT&gt; &#x1F34E;</div>

        </FooterStyle>
    )
}

export default Footer 