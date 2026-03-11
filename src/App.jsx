import { useState } from 'react' // Importamos useState
import { HashRouter, Routes, Route } from 'react-router-dom'
// components layout
import { Header } from './features/layout/components/Header'
import { Content } from './features/layout/components/Content'
import { Footer } from './features/layout/components/Footer'
// components auth
import { Myaccount } from './features/auth/components/Myaccount'
import { Mybuys } from './features/auth/components/Mybuys'
import { Myfavorities } from './features/auth/components/Myfavorities'
// components articles
import { Articles } from './features/articles/components/Articles'
import { Offers } from './features/articles/components/Offers'
import { Mycart } from './features/auth/components/Mycart'

function App() {

  const [search, setSearch] = useState("");

  return (
    <>
      <HashRouter>
      <Header search={search} setSearch={setSearch} />
        
        <Routes>
          <Route path="/" element={<Content />} />
         
          <Route path="articles" element={<Articles search={search} />} />
          
          <Route path="offers" element={<Offers />} />
          <Route path="/myaccount" element={<Myaccount />} />
          <Route path="/mybuys" element={<Mybuys />} />
          <Route path="/myfavorities" element={<Myfavorities />} />
          <Route path="/mycart" element={<Mycart />} />
        </Routes>
        <Footer />
      </HashRouter>
    </>
  )
}

export default App