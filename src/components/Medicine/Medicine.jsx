import { useTranslation } from "react-i18next";
import ProductCard from "../ProductCard/ProductCard";

const Medicine = ({ addToCart }) => {
    const { t } = useTranslation();
    const medicines = [
        {
            productName: t("pharmacy.canaural"),
            productPrice: 11,
            productImg: "/images/canaural.png",
        },
        {
            productName: t("pharmacy.easotic"),
            productPrice: 19,
            productImg: "/images/easotic.png",
        },
        {
            productName: t("pharmacy.isathal"),
            productPrice: 22,
            productImg: "/images/isathal.png",
        },
    ];

    return (
        <section className="py-10 mt-20">
            <h2 className="text-center text-red-800 text-3xl changa font-semibold">
                {t("pharmacy.medicines")}
            </h2>
            <div className="container my-12 mx-auto px-4 md:px-12">
                <div className="flex flex-wrap -mx-1 lg:-mx-4">
                    {medicines.map((medicine) => (
                        <ProductCard
                            imgUrl={medicine.productImg}
                            productName={medicine.productName}
                            productPrice={medicine.productPrice}
                            key={medicine.productName}
                            addToCart={() => addToCart(medicine)}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Medicine;
