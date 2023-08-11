
import './App.css'
import Footer from './components/Footer/Footer';
import MainSection from './components/MainSection/MainSection';
import Navbar from './components/Navbar/Navbar';
import Services from './components/Services/Services';
import i18n from './i18next';



function App() {
    const isRtl = i18n.dir() === 'rtl';

    return (
        <div style={{ direction: isRtl ? 'rtl' : 'ltr' }}>
            <Navbar isRtl={isRtl} />
            <MainSection isRtl={isRtl} />
            <Services isRtl={isRtl} />
            <Footer isRtl={isRtl} />
        </div>
    )
}

export default App
