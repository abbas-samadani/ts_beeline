import { useState } from "react";
import { createContext } from "react";
import { products } from "../data/data.js";
import { stockLevels } from "../data/data.js";

export const ProductContext = createContext({});

export const ProductContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const getItemQuantity = (id) => {
        return cartItems.find(item => item.id === id)?.qty || 0
    }

    const increaseCartQuantity = (product) => {
        const productExist = cartItems.find((item) => item.id === product.id)
        if (productExist) {
            setCartItems(
                cartItems.map((item) =>
                    item.id === product.id
                        ? { ...productExist, qty: productExist.qty + 1 }
                        : item,
                ),
            )
        } else {
            setCartItems([...cartItems, { ...product, qty: 1 }])
        }
        decreaseStock(product.name);
    }

    const decreaseCartQuantity = (product) => {
        const productExist = cartItems.find((item) => item.id === product.id)
        if (productExist.qty === 1) {
            setCartItems(cartItems.filter((x) => x.id !== product.id))
        } else {
            setCartItems(cartItems.map((x) => x.id === product.id ? { ...productExist, qty: productExist.qty - 1 } : x))
        }
        increaseStock(product.name)
    }

    const removeFromCart = (id) => {
        setCartItems(currItems => {
            return currItems.filter(item => item.id !== id)
        })
    }

    const checkStock = (productName) => {
        if (stockLevels[productName] !== 0) {
            return true
        } else {
            return false;
        }
    }

    const decreaseStock = (productName) => {
        if (stockLevels[productName] !== 0) {
            stockLevels[productName] = stockLevels[productName] - 1;
        }
    }

    const increaseStock = (productName) => {
        stockLevels[productName] = stockLevels[productName] + 1;
    }

    const totalQuantity = cartItems.reduce((qty, item) => item.qty + qty, 0);

    const totalCartPrice = cartItems.reduce((total, cartItem) => total + cartItem.price * cartItem.qty, 0);

    return (
        <ProductContext.Provider
            value={{
                products,
                cartItems,
                getItemQuantity,
                increaseCartQuantity,
                decreaseCartQuantity,
                removeFromCart,
                totalQuantity,
                totalCartPrice,
                checkStock
            }}
        >
            {children}
        </ProductContext.Provider>
    );
};
