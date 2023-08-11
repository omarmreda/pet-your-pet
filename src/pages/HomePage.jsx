
import MainSection from '../components/MainSection/MainSection'
import Services from '../components/Services/Services'
const HomePage = ({ isRtl }) => {
    return (
        <>
            <MainSection isRtl={isRtl} />
            <Services isRtl={isRtl} />
        </>
    )
}

export default HomePage
