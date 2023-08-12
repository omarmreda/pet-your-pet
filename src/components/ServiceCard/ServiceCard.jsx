import { Link } from "react-router-dom";

const ServiceCard = ({ imgUrl, serviceName }) => {
  return (
    <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
      <article className="overflow-hidden rounded-lg shadow-lg">
        <Link to="/medicine" onClick={() => window.scrollTo(0, 0)}>
          <img alt="Placeholder" className="block h-auto w-full" src={imgUrl} />
        </Link>

        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
          <h1 className="text-lg">
            <Link
              className="no-underline hover:underline text-white"
              to="/medicine"
              onClick={() => window.scrollTo(0, 0)}
            >
              {serviceName}
            </Link>
          </h1>
        </header>
      </article>
    </div>
  );
};

export default ServiceCard;
