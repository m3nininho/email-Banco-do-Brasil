import credito from '../../assets/images/credito.jpg'


const anuncios = [
  {
    title: 'Crédito BB',
    text: 'Contrate seu empréstimo com taxas especiais',
    smallPrint: '*sujeito a aprovação e demais condições do produto.',
    img: credito
  }
]

function Anuncio(id){
return /*html*/`
  <div>
    <img src=${anuncios[id].img} src="Logo representativo da solicitação de crédito">

  </div>
`
}
export default Anuncio