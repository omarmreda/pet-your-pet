import { useTranslation } from "react-i18next";
import medicines from "../../data/medicines";
import ProductCard from "../ProductCard/ProductCard";

const Medicine = () => {
  const { t } = useTranslation();

  return (
    <section className="py-10 mt-10">
      <h2 className="text-center text-3xl changa font-semibold">
        {t("pharmacy.medicines")}
      </h2>
      <div className="container my-12 mx-auto px-4 md:px-12">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          {medicines.map((medicine) => (
            <ProductCard
              imgUrl={medicine.productImg}
              serviceName={medicine.productName}
              key={medicine.productName}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Medicine;
