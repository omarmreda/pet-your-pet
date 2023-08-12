const ProductCard = ({ imgUrl, productName, productPrice }) => {
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
        <button className="text-center py-4 mt-4 mx-auto">Add to cart</button>
      </article>
    </div>
  );
};

export default ProductCard;
