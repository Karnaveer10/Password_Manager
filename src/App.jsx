
import Navbar from './components/Navbar'
import Main from './components/Main'

function App() {

  return (
    <>
      <Navbar />
      <div className="absolute inset-0 -z-10 min-h-full min-w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
       <Main></Main>
      </div>
      

    </>
  )
}

export default App
