import './App.css'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import i18n from './i18next'
import HomePage from './pages/HomePage'
import RegisterPage from './pages/RegisterPage'
import MedicinePage from './pages/MedicinePage'
import { useEffect, useState } from 'react'


function App() {



    const [isRtl, setIsRtl] = useState(i18n.dir() === 'rtl')



    useEffect(() => {
        if (isRtl) {
            document.body.dir = 'rtl'
        } else {
            document.body.dir = 'ltr'
        }
    }, [isRtl])
    return (
        <div>
            <Navbar isRtl={isRtl} setIsRtl={setIsRtl} />
            <Routes>
                <Route path="/" element={<HomePage isRtl={isRtl} />} />
                <Route path="register" element={<RegisterPage />} />
                <Route path="medicine" element={<MedicinePage />} />
            </Routes>
            <Footer isRtl={isRtl} />
        </div>
    )
}

export default App
