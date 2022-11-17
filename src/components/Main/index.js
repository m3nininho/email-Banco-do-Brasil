import Anuncio from "../Anuncio"

import phoneImg from '../../assets/images/phone.jpg'
import pcImg from '../../assets/images/pc.jpg'
import anuncioFooter from '../../assets/images/anuncio-guia.jpg'

function Main(){

return /*html*/`

  <main class=" bg-bgColorContent max-w-lg mx-auto">
  
      <div class="p-12">
        <span class=" text-textColorDefault font-bold ">Fulano,</span>
        <h2 class=" text-textColorDefault font-bold mt-5 text-3xl ">Condições especiais pensadas para você</h2>
      </div>
      <div class=' p-5 mx-auto'>
        ${Anuncio(0, 'left')}
        ${Anuncio(1, 'right')}
        ${Anuncio(2, 'left')}
        ${Anuncio(3, 'right')}
        ${Anuncio(4, 'left')}
        ${Anuncio(5, 'right')}
      </div>
      <div class="p-5">
          <h2 class=" text-textColorDefault text-xl font-bold text-center">Consulte todas as ofertas</h2>
          <div class=" max-w-xs flex mx-auto mt-10 mb-10 gap-10">
              <a href='https://www49.bb.com.br/m/vantagens#%2Fcm49eyJvcHIiOiJiZW5lZml0cyJ9'><img class=" w-36" src=${phoneImg} alt="Imagem de um celular desenhado"></a>
              <a href='https://www2.bancobrasil.com.br/aapf/login.html?dl=eyJ1cmwiOiIvcG9udG9zUHJhVm9jZS92YW50YWdlbnNTZXJCQi9yY3AzNDc3NjU0LmpzcD9hanVkYU1lbnVOb3ZvPVByYSBWb2PqcG9ydGFsIn0=#/acesso-aapf-agencia-conta'><img class=" w-36" src=${pcImg} alt="Imagem de um computador desenhado"></a>
          </div>
          <span class=" text-textColorMain font-bold text-sm p-5">*Condições válidas por tempo determinado.</span>
      </div>
  </main>
    <img class=" mt-10 mx-auto max-w-lg " src=${anuncioFooter} alt="Imagem ilustrativa de guia">
`
}

export default Main