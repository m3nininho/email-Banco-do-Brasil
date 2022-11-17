import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
document.querySelector('#app').innerHTML = /*html*/`
  <div class=" mx-auto max-w-5xl h-screen">
     ${Header()}
     ${Main()}
     ${Footer()}
  </div>
`

