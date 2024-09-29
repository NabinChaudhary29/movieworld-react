import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Title from './components/TitleComponent'
import Search from './components/SearchComponent'
import Result from './components/ResultComponent'
import Hero from './components/HeroComponent'
import SavedMovies from './components/SavedMoviesComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Title/>
        <Search/>
        <Result/>
        <Hero/>
        <SavedMovies/>
        
    </>
  )
}

export default App
