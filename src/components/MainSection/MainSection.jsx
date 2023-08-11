import { useTranslation } from 'react-i18next'

const MainSection = ({ isRtl }) => {
    const { t } = useTranslation()
    return (
        <section
            className="w-full mt-20 flex justify-around py-14"
            style={{ direction: isRtl ? 'rtl' : 'ltr' }}
        >
            <div className="w-5/12 ">
                <h1 className="w-full changa">
                    <span className="block text-2xl">
                        {t('mainSection.heading_one')}
                    </span>
                    <span className="block text-4xl font-bold mt-3">
                        {t('mainSection.heading_two')}
                    </span>
                    <span className="block text-4xl font-bold mt-3">
                        {t('mainSection.heading_three')}
                    </span>
                </h1>
                <p className="mt-6">{t('mainSection.paragraph')}</p>
                <button
                    type="button"
                    className="text-gray-900 mt-6 bg-white border border-gray-600 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-lg px-5 py-2.5 mr-2 mb-2"
                >
                    {t('mainSection.button')}
                </button>
            </div>
            <div className="w-5/12">
                <img
                    src="/images/main-section.jpg"
                    alt="vet"
                    className="w-full mt-3"
                />
            </div>
        </section>
    )
}

export default MainSection
