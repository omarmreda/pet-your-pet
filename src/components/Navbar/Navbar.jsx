import { GrLanguage } from "react-icons/gr";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

const Navbar = ({ isRtl, setIsRtl }) => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };
  const { t } = useTranslation();
  return (
    <nav
      className={`bg-[#111] block fixed w-full z-20 top-0 left-0 border-b border-[#222] changa`}
      style={{ direction: isRtl ? "rtl" : "ltr" }}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center" onClick={handleClick}>
          <img
            src="/images/logo.png"
            className={`h-8  ${isRtl ? "ml-3" : "mr-3"}`}
            alt="Logo"
          />
          <span className="self-center text-white text-2xl font-semibold whitespace-nowrap">
            Pet your Pet
          </span>
        </Link>
        <div className="flex md:order-2">
          <div className="group inline-block relative">
            <button
              type="button"
              className={`text-white group relative flex items-center px-4 py-2 text-center ${
                isRtl ? "ml-3 md:ml-0" : "mr-3 md:mr-0"
              }`}
            >
              <GrLanguage className="text-base text-gray-50 group-hover:text-red-800" />
              <MdOutlineKeyboardArrowDown className="text-white text-lg group-hover:text-red-800" />
            </button>
            <ul className="absolute bg-[#111] hidden text-white w-max pt-4 group-hover:flex flex-col left-1/2 transform -translate-x-1/2 text-center z-50">
              <li
                className="rounded-t flex cursor-pointer items-center justify-start gap-2  hover:bg-gray-400 py-2 px-4  whitespace-no-wrap"
                onClick={() => {
                  i18next.changeLanguage("en");
                  Cookies.set("i18next", "en");
                  setIsRtl(false);
                  window.scrollTo(0, 0);
                }}
              >
                <span>English</span>
                <img src="/images/uk.png" alt="uk" className="w-4 h-4" />
              </li>
              <li
                className="rounded-t flex cursor-pointer justify-start items-center gap-2  hover:bg-gray-400 py-2 px-4  whitespace-no-wrap"
                onClick={() => {
                  i18next.changeLanguage("ar");
                  Cookies.set("i18next", "ar");
                  setIsRtl(true);
                  window.scrollTo(0, 0);
                }}
              >
                <span className="pl-2">العربية</span>
                <img
                  src="/images/arabic.png"
                  alt="arabic"
                  className="w-4 h-4"
                />
              </li>
            </ul>
          </div>

          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
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
          className="items-center bg-[#111] justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 text-white font-medium  rounded-lg bg-[#111] md:flex-row md:space-x-8 md:mt-0 md:border-0">
            <li>
              <Link
                to="/"
                className={`block py-2 ${
                  isRtl ? "!pr-3 !pl-4 md:p-0" : " pl-3 pr-4 md:p-0"
                }  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-800  md:dark:hover:text-red-800 dark:text-white   md:dark:hover:bg-transparent`}
                aria-current="page"
                onClick={handleClick}
              >
                {t("header.home")}
              </Link>
            </li>
            <li>
              <Link
                to="/register"
                className={`block py-2 ${
                  isRtl ? "!pr-3 pl-4 md:p-0" : " pl-3 pr-4 md:p-0"
                }  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-800  md:dark:hover:text-red-800 dark:text-white   md:dark:hover:bg-transparent`}
                onClick={handleClick}
              >
                {t("header.register")}
              </Link>
            </li>
            <li>
              <Link
                to="/medicine"
                className={`block py-2 ${
                  isRtl ? "pr-3 pl-4 md:p-0" : " pl-3 pr-4 md:p-0"
                }  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-800  dark:text-white   md:dark:hover:bg-transparent`}
                onClick={handleClick}
              >
                {t("header.services")}
              </Link>
            </li>

            <li>
              <a
                href="#"
                className={`block py-2 ${
                  isRtl ? "pr-3 pl-4 md:p-0" : " pl-3 pr-4 md:p-0"
                }  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-800 dark:text-white  md:dark:hover:bg-transparent`}
              >
                {t("header.contact")}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
