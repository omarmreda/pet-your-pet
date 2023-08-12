import { useTranslation } from "react-i18next";
import ServiceCard from "../ServiceCard/ServiceCard";
import { useNavigate } from "react-router-dom";

const Services = ({ isRtl }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const navigateToMedicine = () => {
    navigate("/medicine");
  };
  return (
    <section className="py-10" style={{ direction: isRtl ? "rtl" : "ltr" }}>
      <h2 className="text-center changa text-3xl font-semibold text-red-800">
        {t("services.services")}
      </h2>
      <div className="container my-12 mx-auto px-4 md:px-12">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          <ServiceCard
            imgUrl="/images/medical-care.png"
            serviceName={t("services.service_one")}
          />
          <ServiceCard
            imgUrl="/images/hostel.png"
            serviceName={t("services.service_two")}
          />
          <ServiceCard
            imgUrl="/images/pets-medicine.jpg"
            onClick={navigateToMedicine}
            serviceName={t("services.service_three")}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
