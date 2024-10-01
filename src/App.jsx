import './App.css'
import Display from './components/DiaplayComponent'
import Hero from './components/HeroComponent'

function App() {
  

  return (
    <div className='wrapper'>
      {/* hero section */}
        <Hero/>

      {/* dispaly section */}
        <Display/>
      
    </div>
  )
}

export default App
