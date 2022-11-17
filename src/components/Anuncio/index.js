import credito from '../../assets/images/credito.jpg'
import amazon from '../../assets/images/amazon.jpg'
import card from '../../assets/images/card.jpg'
import seguridade from '../../assets/images/seguridade.jpg'
import investimento from '../../assets/images/investimento.jpg'
import consorcio from '../../assets/images/consorcio.jpg'



const anuncios = [
  {
    title: 'Crédito BB',
    text: 'Contrate seu empréstimo com taxas especiais',
    smallPrint: '*sujeito a aprovação e demais condições do produto.',
    img: credito,
    alt: 'Logo da solicitação de crédito'
  },
  {
    title: 'Amazon',
    text: 'Ofertas incríveis na Amazon com 8% de cashback',
    smallPrint: '*válido de 12/09 a 16/09',
    img: amazon,
    alt: 'Logo das ofertas na Amazon'
  },
  {
    title: 'Imagina você no Catar',
    text: 'Concorra a 16 pares de ingressos para a Copa do Mundo FIFA no Catar e diversos prêmios',
    smallPrint: '',
    img: card,
    alt: 'Logo de um simples cartão representativo'
  },
  {
    title: 'Seguridade',
    text: 'Comprou, ganhou! Ganhe um voucher de R$ 50,00 nas contratações de Seguro de Vida, Residencial e Ourocap PU',
    smallPrint: '',
    img: seguridade,
    alt: 'Logo de uma mão, representando a seguridade ao $'
  },
  {
    title: 'Investimentos - LCA/CDB Pré',
    text: 'LCA/CDB Pré com taxas especiais a partir de R$ 500. Aproveite!',
    smallPrint: '',
    img: investimento,
    alt: 'Logo de um saco de dinheiro'
  },
  {
    title: 'Consórcio',
    text: 'Desconto especial de 30% na taxa de administração para você comprar carro, pick-up, casa, sítio ou loja comercial. Com o Consórcio BB você pode!',
    smallPrint: '',
    img: consorcio,
    alt: 'Logo de uma casa e um carro totalmente ilustrativo desenhado'

  }
]

function Anuncio(id, choice){
if(choice == 'right'){
  return /*html*/`
  <div class=' grid grid-cols-2 mt-3 max-w-md mx-auto gap-2 mb-10 items-center '>
    <img class="row-span-3 grid w-40 col-start-2 justify-self-center self-center" src=${anuncios[id].img} alt=${anuncios[id].alt}>
    <div class=" max-w-xs flex flex-col gap-5">
      <h2 class="text-xl text-textColorDefault font-bold">${anuncios[id].title}</h2>
      <p class=" text-textColorMain ">${anuncios[id].text}</p>
      <span class=" text-xs text-textColorMain">${anuncios[id].smallPrint}</span>
    </div>
  </div>
  `
}
if(choice == 'left'){
  return /*html*/`
  <div class=' grid grid-cols-2 mt-3 max-w-md mx-auto gap-2 mb-10 items-center'>
    <img class="row-span-3 w-40" src=${anuncios[id].img} alt=${anuncios[id].alt}>
    <div class=" max-w-xs flex flex-col gap-5">
      <h2 class="text-xl text-textColorDefault font-bold">${anuncios[id].title}</h2>
      <p class=" text-textColorMain">${anuncios[id].text}</p>
      <span class=" text-xs text-textColorMain">${anuncios[id].smallPrint}</span>
    </div>
  </div>
  `
}
}
export default Anuncio