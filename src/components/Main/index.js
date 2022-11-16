import Anuncio from "../Anuncio"

function Main(){

return /*html*/`

  <main class=" bg-bgColorContent max-w-lg h-screen mx-auto">
  
      <div class="p-12">
        <span class=" text-textColorDefault font-bold ">Fulano,</span>
        <h2 class=" text-textColorDefault font-bold mt-5 text-3xl ">Condições especiais pensadas para você</h2>
      </div>
      <div>
        ${Anuncio(0)}
      </div>
  </main>

`
}

export default Main