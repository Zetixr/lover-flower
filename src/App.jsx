import './App.css'
import NavBar from './components/NavBar'
import Catalog from './pages/catalog'
import Hero from "./pages/hero"
import Popular from './pages/popular'
import OrderSteps from './pages/orderSteps'
import SpecialOccasion from './pages/specialOcassion'
import Questions from './pages/questions'
import Footer from './components/footer'
function App() {


  return (
    <>
      <NavBar/>
      <Hero/>
      <Catalog/>
      <Popular/>
      <OrderSteps/>
      <SpecialOccasion/>
      <Questions/>
      <Footer/>
    </>
  )
}


export default App
