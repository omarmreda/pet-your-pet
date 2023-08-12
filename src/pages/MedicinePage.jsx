import Medicine from '../components/Medicine/Medicine'
import Food from '../components/Food/Food'
import Cart from '../components/Cart/Cart';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTranslation } from 'react-i18next';

const MedicinePage = () => {
    const { t } = useTranslation();
    const [cartItems, setCartItems] = useState([]);
    const addToCart = (product) => {
        // Check if the item already exists in the cart
        const existingItem = cartItems.find((item) => item.productName === product.productName);
        toast(t('cart.added'), {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            type: "success",
            progress: undefined,
            theme: "light",
        });
        if (existingItem) {
            // Increase the quantity of the existing item
            const updatedCart = cartItems.map((item) =>
                item.productName === product.productName
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );
            setCartItems(updatedCart);
        } else {
            // Add the item to the cart with quantity 1
            setCartItems([...cartItems, { ...product, quantity: 1 }]);
        }
    };

    return (
        <>
            <Medicine addToCart={addToCart} />
            <Food addToCart={addToCart} />
            <Cart cartItems={cartItems} serCartItems={setCartItems} />
            <ToastContainer />
        </>
    )
}

export default MedicinePage
