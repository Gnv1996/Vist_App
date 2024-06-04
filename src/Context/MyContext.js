import React, {createContext, useState} from 'react';

const MyContext = createContext();

const MyProvider = ({children}) => {
  const [hotelName, setHotelName] = useState('');
  const [price, setPrices] = useState('');

  return (
    <MyContext.Provider value={{hotelName, setHotelName, price, setPrices}}>
      {children}
    </MyContext.Provider>
  );
};

export {MyContext, MyProvider};
