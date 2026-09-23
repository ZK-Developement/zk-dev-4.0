import './App.css'
import Header from './components/header/Header'
import Onas from './components/o-nas/o-nas'
import Design from './components/design/design'
import Strona from './components/storna/strona'
import Oferta from './components/oferta/oferta'
import Pakiety from './components/pakiety/pakiety'
import Portfolio from './components/portfolio/portfolio'
import Kontakt from './components/kontakt/kontakt'
import Footer from './components/footer/footer'
import "tailwindcss"

function App() {

  return (
    <>
      <Header />
      <main className='flex flex-col w-full justify-center items-center pt-[120px]'>
        <Onas />
        <Strona />
        <Oferta />
        <Design />
        <Pakiety />
        <Portfolio />
        <Kontakt />
      </main>
      <Footer />
    </>
  )
}

export default App
