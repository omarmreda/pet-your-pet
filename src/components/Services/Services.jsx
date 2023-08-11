import CardItem from "../CardItem/CardItem";
import { useTranslation } from 'react-i18next'


const Services = ({ isRtl }) => {
    const { t } = useTranslation();
    return (
        <section className="py-10" style={{ direction: isRtl ? 'rtl' : 'ltr' }}>
            <h2 className="text-center text-3xl font-semibold text-red-800">{t('services.services')}</h2>
            <div className="container my-12 mx-auto px-4 md:px-12">
                <div className="flex flex-wrap -mx-1 lg:-mx-4">
                    <CardItem
                        imgUrl='/images/medical-care.png'
                        serviceName={t('services.service_one')} />
                    <CardItem
                        imgUrl='/images/hostel.png'
                        serviceName={t('services.service_two')} />
                    <CardItem
                        imgUrl='/images/pets-medicine.jpg'
                        serviceName={t('services.service_three')} />
                </div>
            </div>
        </section>

    )
}

export default Services
