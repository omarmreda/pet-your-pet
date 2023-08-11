import ServiceCard from "../ServiceCard/ServiceCard"
import { useTranslation } from 'react-i18next'


const Services = ({ isRtl }) => {
    const { t } = useTranslation();
    return (
        <section className="py-10" style={{ direction: isRtl ? 'rtl' : 'ltr' }}>
            <h2 className="text-center text-3xl font-semibold">{t('services.services')}</h2>
            <div className="container my-12 mx-auto px-4 md:px-12">
                <div className="flex flex-wrap -mx-1 lg:-mx-4">
                    <ServiceCard serviceName={t('services.service_one')} />
                    <ServiceCard serviceName={t('services.service_two')} />
                    <ServiceCard serviceName={t('services.service_three')} />
                </div>
            </div>
        </section>

    )
}

export default Services
