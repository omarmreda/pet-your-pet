
import './App.css'
import Footer from './components/Footer/Footer';
import MainSection from './components/MainSection/MainSection';
import Navbar from './components/Navbar/Navbar';
import i18n from './i18next';
import { useTranslation } from 'react-i18next'



function App() {
    const { t, i18n } = useTranslation();
    const isRtl = i18n.dir() === 'rtl';

    return (
        <>
            <Navbar isRtl={isRtl} />
            <MainSection isRtl={isRtl} />
            <Footer />
        </>
    )
}

export default App
