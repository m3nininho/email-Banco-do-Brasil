import whatsappImg from '../../assets/images/whatsapp.png'
import facebookImg from '../../assets/images/facebook.png'
import twitterImg from '../../assets/images/twitter.png'
import instagramImg from '../../assets/images/instagram.png'
import linkedinImg from '../../assets/images/linkedin.png'


function Footer(){

  return /*html*/`
  
  <footer class="bg-bgFooter mx-auto max-w-lg mt-10">

    <h2 class="font-bold text-2xl ml-5 pt-5">Banco do Brasil</h2>
    <span class=" text-textColorDefault block ml-5 mb-5">Pra tudo que você imaginar</span>

    <span class="text-xs text-textColorMain ml-5">Caso não queira mais receber nossos e-mails,<a class=" underline" href="https://bancodobrasil.emktbbts.com.br/email/unsubscribe/632308805405e685045924">descadastre-se aqui</a></span>

    <div class=" bg-bgFooterAmarelo mt-5 flex p-5 items-center gap-10">
        <div class="">
          <nav>
            <ul class=" flex gap-5">
              <li><a><img src=${whatsappImg}></a></li>
              <li><a><img src=${facebookImg}></a></li>
              <li><a><img src=${twitterImg}></a></li>
              <li><a><img src=${instagramImg}></a></li>
              <li><a><img src=${linkedinImg}></a></li>
            </ul>
          </nav>
        </div>
        
      <div class=" text-right max-w-lg text-textColorDefault text-xs">
        <div>
          <span class=" block">Aplicativo Banco do Brasil para celular.</span>
        </div>
        <div>
          <span class="text-xs text-right">Fácil, seguro e completo.</span>
        </div>

      </div>
  </footer>
  `
}
export default Footer;