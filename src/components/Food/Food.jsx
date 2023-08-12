// import CardItem from "../ServiceCard/CardItem";
import { useTranslation } from "react-i18next";
import food from "../../data/food";
import ProductCard from "../ProductCard/ProductCard";

const Food = () => {
  const { t } = useTranslation();
  return (
    <section className="py-10 mt-10">
      <h2 className="text-center text-3xl changa font-semibold">
        {t("pharmacy.food")}
      </h2>
      <div className="container my-12 mx-auto  px-4 md:px-12">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          {food.map((foodItem) => (
            <ProductCard
              imgUrl={foodItem.productImg}
              serviceName={foodItem.productName}
              key={foodItem.productName}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Food;
