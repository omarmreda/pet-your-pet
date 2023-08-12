const ProductCard = ({ imgUrl, serviceName }) => {
  return (
    <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
      <article className="overflow-hidden rounded-lg shadow-lg">
        <a href="#">
          <img alt="Placeholder" className="block h-auto w-full" src={imgUrl} />
        </a>

        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
          <h1 className="text-lg">
            <a className="no-underline hover:underline text-gray-800" href="#">
              {serviceName}
            </a>
          </h1>
        </header>
      </article>
    </div>
  );
};

export default ProductCard;
