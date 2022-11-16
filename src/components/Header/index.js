import headerImg from '../../assets/images/header.jpg'
import anuncio from '../../assets/images/anuncio.jpg'
function Header(){
return /*html*/`
  <div class=" max-w-2xl mx-auto">
      <img  class=" mx-auto mb-3 w-128" src=${headerImg}>
      <img  class=" mx-auto w-128" src=${anuncio}>
  </div>
`
}
export default Header