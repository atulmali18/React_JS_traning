import { ,Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Services from './components/Services'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import NotFound from './components/NotFound'
const App = () => {
  return (
<>
<Router>
<Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />

      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />


      <Route path="*" element={<NotFound />} />


    </Routes>
    {/* <Footer/> */}
    </Router>
</>
  )
}

export default App