import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const MainSection = ({ isRtl }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const NavigateToRegister = () => {
    navigate("/register");
  };
  return (
    <section
      className="w-full mt-20 flex lg:px-0 px-4 lg:flex-row flex-col justify-around py-14"
      style={{ direction: isRtl ? "rtl" : "ltr" }}
    >
      <div className="lg:w-5/12 w-full ">
        <h1 className="w-full changa text-red-800">
          <span className="block text-2xl">{t("mainSection.heading_one")}</span>
          <span className="block text-4xl font-bold mt-3">
            {t("mainSection.heading_two")}
          </span>
          <span className="block text-4xl font-bold mt-3">
            {t("mainSection.heading_three")}
          </span>
        </h1>
        <p className="mt-6 text-white">{t("mainSection.paragraph")}</p>
        <button
          type="button"
          onClick={NavigateToRegister}
          className="text-red-800 mt-16 bg-white border border-red-800 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-lg px-5 py-2.5 mr-2 mb-2"
        >
          {t("mainSection.button")}
        </button>
      </div>
      <div className="lg:w-5/12 w-full">
        <img src="/images/main-section.jpg" alt="vet" className="w-full mt-3" />
      </div>
    </section>
  );
};

export default MainSection;
