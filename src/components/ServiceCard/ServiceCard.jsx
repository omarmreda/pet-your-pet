

const ServiceCard = ({ serviceName }) => {
    return (
        <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <article className="overflow-hidden rounded-lg shadow-lg">
                <a href="#">
                    <img
                        alt="Placeholder"
                        className="block h-auto w-full"
                        src="https://media.istockphoto.com/id/1405962520/photo/cute-west-highland-white-terrier-dog-after-bath-dog-wrapped-in-towel-pet-grooming-concept.jpg?s=2048x2048&w=is&k=20&c=T_DGcBnyO8QIe41YJnHr1RCfhl_fLBHC9Kk6izVQS40="
                    />
                </a>

                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 className="text-lg">
                        <a
                            className="no-underline hover:underline text-gray-800"
                            href="#"
                        >
                            {serviceName}
                        </a>
                    </h1>
                    <p className="text-white text-sm">25/7/2023</p>
                </header>
            </article>
        </div>
    )
}

export default ServiceCard
