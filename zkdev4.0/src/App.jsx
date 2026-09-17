import './App.css'
import Header from './components/header/Header'
import Onas from './components/o-nas/o-nas'
import Oferta from './components/oferta/oferta'
import "tailwindcss"

function App() {

  return (
    <>
      <Header />
      <main className='flex flex-col w-full justify-center items-center pt-[120px]'>
        <Onas />
        <Oferta />
      </main>
    </>
  )
}

export default App
