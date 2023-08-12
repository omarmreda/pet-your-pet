import { useTranslation } from "react-i18next";

const ProductCard = ({ imgUrl, productName, productPrice, addToCart }) => {
    const { t } = useTranslation();
    return (
        <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <article className="overflow-hidden rounded-lg shadow-lg">
                <a href="#">
                    <img alt="Placeholder" className="block h-auto w-full" src={imgUrl} />
                </a>

                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 className="text-lg">
                        <a className="no-underline hover:underline text-white" href="#">
                            {productName}
                        </a>
                    </h1>
                    <p class="text-white text-sm">e£ {productPrice}</p>
                </header>
                <button
                    onClick={addToCart}
                    className="text-center py-4 mt-4  w-full bg-[#222] hover:bg-gray-300 hover:text-gray-900 text-white">
                    {t("pharmacy.add_to_cart")}
                </button>
            </article>
        </div>
    );
};

export default ProductCard;
