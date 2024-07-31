import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const MyContext = createContext();

const MyProvider = ({ children }) => {
    const API = 'https://fakestoreapi.com/products';
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [cartData, setCartData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(API);
                setData(response.data);
            } catch (error) {
                setError(error);
            }
        };
        fetchData();
    }, []);

    const CartHandler = (product) => {
        setCartData((prevCartData) => [...prevCartData, product]);
    };

    const RemoveFromCart = (productId) => {
        setCartData((prevCartData) =>
            prevCartData.filter((product) => product.id !== productId)
        );
    };

    return (
        <MyContext.Provider value={{ data, error, CartHandler, RemoveFromCart, cartData, setCartData, API }}>
            {children}
        </MyContext.Provider>
    );
};

export default MyProvider;
