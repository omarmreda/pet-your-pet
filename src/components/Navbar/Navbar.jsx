import { GrLanguage } from 'react-icons/gr'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'

const Navbar = ({ isRtl }) => {
    const { t } = useTranslation()
    return (
        <nav className={`bg-white block fixed w-full z-20 top-0 left-0 border-b border-gray-200 changa`} style={{ direction: isRtl ? 'rtl' : 'ltr' }}>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="https://flowbite.com/" className="flex items-center">
                    <img
                        src="/images/logo.png"
                        className={`h-8  ${isRtl ? 'ml-3' : 'mr-3'}`}
                        alt="Logo"
                    />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                        Pet your Pet
                    </span>
                </a>
                <div className="flex md:order-2">
                    <div className='group inline-block relative'>

                        <button
                            type="button"
                            className={`text-white group relative flex items-center px-4 py-2 text-center ${isRtl ? 'ml-3 md:ml-0' : 'mr-3 md:mr-0'}`}
                        >
                            <GrLanguage className="text-base group-hover:text-blue-500" />
                            <MdOutlineKeyboardArrowDown className="text-black text-lg group-hover:text-blue-500" />
                        </button>
                        <ul className="absolute bg-white hidden text-gray-800 w-max pt-4 group-hover:flex flex-col left-1/2 transform -translate-x-1/2 text-center z-50">
                            <li
                                className="rounded-t flex cursor-pointer items-center justify-start gap-2  hover:bg-gray-400 py-2 px-4  whitespace-no-wrap"
                                onClick={() => i18next.changeLanguage('en')}
                            >
                                <span>English</span>
                                <img src='/images/uk.png' alt='uk' className='w-4 h-4' />

                            </li>
                            <li
                                className="rounded-t flex cursor-pointer justify-start items-center gap-2  hover:bg-gray-400 py-2 px-4  whitespace-no-wrap"
                                onClick={() => i18next.changeLanguage('ar')}
                            >
                                <span className='pl-2'>العربية</span>
                                <img src="/images/arabic.png" alt='arabic' className='w-4 h-4' />
                            </li>
                        </ul>

                    </div>

                    <button
                        data-collapse-toggle="navbar-sticky"
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-sticky"
                        aria-expanded="false"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>
                </div>
                <div
                    className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                    id="navbar-sticky"
                >
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <a
                                href="#"
                                className={`block py-2 ${isRtl ? '!pr-3 !pl-4 md:p-0' : ' pl-3 pr-4 md:p-0'} text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700  md:dark:hover:text-blue-500 dark:text-white   md:dark:hover:bg-transparent`}
                                aria-current="page"
                            >
                                {t('header.home')}
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className={`block py-2 ${isRtl ? '!pr-3 pl-4 md:p-0' : ' pl-3 pr-4 md:p-0'} text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700  md:dark:hover:text-blue-500 dark:text-white   md:dark:hover:bg-transparent`}
                            >
                                {t('header.about')}
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className={`block py-2 ${isRtl ? 'pr-3 pl-4 md:p-0' : ' pl-3 pr-4 md:p-0'} text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700  md:dark:hover:text-blue-500 dark:text-white   md:dark:hover:bg-transparent`}
                            >
                                {t('header.services')}
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className={`block py-2 ${isRtl ? 'pr-3 pl-4 md:p-0' : ' pl-3 pr-4 md:p-0'} text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white  md:dark:hover:bg-transparent`}
                            >
                                {t('header.contact')}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav >
    )
}

export default Navbar
