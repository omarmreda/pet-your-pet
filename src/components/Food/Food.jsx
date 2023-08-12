// import CardItem from "../ServiceCard/CardItem";
import { useTranslation } from "react-i18next";
import ProductCard from "../ProductCard/ProductCard";


const Food = ({ addToCart }) => {
    const { t } = useTranslation();

    const food = [
        {
            productName: t("pharmacy.hills"),
            productPrice: 25,
            productImg: "/images/hills.jpg",
            quantity: 0,
        },
        {
            productName: t("pharmacy.plan"),
            productPrice: 19,
            productImg: "/images/science.jpg",
            quantity: 0,
        },
        {
            productName: t("pharmacy.royal"),
            productPrice: 45,
            productImg: "/images/royal.png",
            quantity: 0,
        },
    ];

    return (
        <section className="py-10">
            <h2 className="text-center text-3xl text-red-800 changa font-semibold">
                {t("pharmacy.food")}
            </h2>
            <div className="container my-12 mx-auto  px-4 md:px-12">
                <div className="flex flex-wrap -mx-1 lg:-mx-4">
                    {food.map((foodItem) => (
                        <ProductCard
                            imgUrl={foodItem.productImg}
                            productName={foodItem.productName}
                            key={foodItem.productName}
                            productPrice={foodItem.productPrice}
                            addToCart={() => addToCart(foodItem)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Food;
