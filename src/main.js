import Header from './components/Header'
import Main from './components/Main'
document.querySelector('#app').innerHTML = /*html*/`
  <div class=" mx-auto max-w-5xl h-screen">
     ${Header()}
     ${Main()}
  </div>
`

