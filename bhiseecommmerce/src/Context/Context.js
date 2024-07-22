import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const MyContext = createContext();

const MyProvider = ({ children }) => {
    const API = 'https://fakestoreapi.com/products';
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
      const fetchData = async ()=>{
       try {
        const response = await axios.get(API)
        setData(response.data)
       } catch (error) {
        setError(error)
       }
      }
    fetchData()
    }, [])
    
    return (
        <MyContext.Provider value={{ data, error }}>
            {children}
        </MyContext.Provider>
    );
};

export default MyProvider;
