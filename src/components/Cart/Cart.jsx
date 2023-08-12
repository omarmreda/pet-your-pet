import { useTranslation } from "react-i18next"
import { useState } from "react"
import { AiOutlineShoppingCart } from 'react-icons/ai'

const Cart = ({ cartItems, serCartItems }) => {
    const [showCart, setShowCart] = useState(false)

    const { t } = useTranslation()
    return (

        <div className="">
            <button className="fixed top-20 right-2 bg-red-800 px-4 py-2 flex justify-center items-center gap-2 rounded group hover:bg-white hover:text-red-800 text-white" onClick={() => setShowCart(!showCart)}>{t('cart.cart')} <AiOutlineShoppingCart className="f group-hover:text-red-800" /></button>
            {/* start of block */}
            <div className={`relative z-50 ${showCart ? '' : 'hidden'}`} aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                            <div className="pointer-events-auto w-screen max-w-md">
                                <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                                        <div className="flex items-start justify-between">
                                            <h2 className="text-lg font-medium text-gray-900" id="slide-over-title">{t('cart.cart')}</h2>
                                            <div className="ml-3 flex h-7 items-center">
                                                <button type="button" className="relative -m-2 p-2 text-gray-400 hover:text-gray-500" onClick={() => setShowCart(false)}>
                                                    <span className="absolute -inset-0.5"></span>
                                                    <span className="sr-only">Close panel</span>
                                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                    </svg>
                                                </button>

                                            </div>
                                        </div>

                                        <div className="mt-8">
                                            <div className="flow-root">
                                                {(cartItems < 1) &&
                                                    <h2 className='text-gray-800 text-center py-5 text-3xl'>{t('cart.empty')}</h2>}
                                                <ul role="list" className="-my-6 divide-y divide-gray-200">
                                                    {cartItems.map((item, index) => (
                                                        <li className="flex py-6" key={index}>
                                                            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                                <img src={item.productImg} alt={item.productName} className="h-full w-full object-cover object-center" />
                                                            </div>

                                                            <div className="ml-4 flex flex-1 flex-col">
                                                                <div>
                                                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                                                        <h3>
                                                                            {item.productName}
                                                                        </h3>
                                                                        <p className="ml-4">{item.productPrice}</p>
                                                                    </div>
                                                                </div>
                                                                <div className="flex flex-1 items-end justify-between text-sm">
                                                                    <p className="text-gray-500">{item.quantity}</p>

                                                                    <div className="flex">
                                                                        <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">{t('cart.remove')}</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                                        <div className="mt-6">
                                            <a href="#" className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700" onClick={() => { serCartItems([]); setShowCart(false) }}>{t('cart.checkout')}</a>
                                        </div>
                                        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                                            <p>
                                                <button
                                                    onClick={() => setShowCart(false)}
                                                    type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
                                                    {t('cart.continue')}
                                                    <span aria-hidden="true"> &rarr;</span>
                                                </button>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Cart
