import { useTranslation } from "react-i18next"

const RegisterPage = () => {
    const { t } = useTranslation();
    return (
        <div className="flex items-center min-h-screen px-20 bg-gray-50">
            <div className="flex-1 h-full max-w-screen mx-auto bg-white">
                <div className="flex flex-col md:flex-row">
                    <div className="h-32 md:h-auto md:w-1/2">
                        <img className="object-cover w-full h-full" src="/images/form.jpg"
                            alt="img" />
                    </div>
                    <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
                        <div className="w-full flex flex-col">
                            <h1 className="mb-4 text-2xl text-red-800 changa font-bold text-center">
                                {t('form.register')}
                            </h1>
                            <div>
                                <input type="text"
                                    className="w-full px-4 mt-10 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                                    placeholder={t('form.your_name')} />
                            </div>
                            <div>

                                <input type="text"
                                    className="w-full mt-8 px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                                    placeholder={t('form.pets_name')} />
                            </div>
                            <div>

                                <input type="text"
                                    className="w-full mt-8 px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                                    placeholder={t('form.pets_type')} />
                            </div>
                            <div>
                                <input type="email"
                                    className="w-full px-4 mt-8 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                                    placeholder={t('form.email_adress')} />
                            </div>
                            <div className="mt-4">
                                <input type="text"
                                    className="w-full px-4 mt-8 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                                    placeholder={t('form.pets_age')} />
                            </div>
                            <div>
                                <input
                                    className="w-full px-4 mt-8 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                                    placeholder={t('form.any_notes')} type="text" />
                            </div>
                            <button
                                className="block w-full mt-16 px-4 py-2  text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
                                href="#">
                                {t('form.register')}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage
