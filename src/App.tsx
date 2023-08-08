import React, { useState } from 'react';
import './App.css';
import Store from './Store';
import { Address, Data } from './model/restaurant';
import BestMenu from './BestMenu';

let data: Data = {
  name: '식당',
  category: 'western',
  address: {
    city: 'inchen',
    detail: 'somewhere',
    zipCode: 23425634,
  },
  menu: [
    { name: 'rose pasta', price: 2000, category: 'PASTA' },
    { name: 'garlic steak', price: 3000, category: 'STEAK' },
  ],
};

const App: React.FC = () => {
  const [myRestaurant, setMyRestaurant] = useState<Data>(data);

  const changeAddress = (address: Address) => {
    setMyRestaurant({ ...myRestaurant, address });
  };

  const showBestMenuName = (name: string) => {
    return name;
  };

  return (
    <div>
      <Store info={myRestaurant} changeAddress={changeAddress} />
      <BestMenu
        name='pizza'
        category='피자'
        price={1000}
        showBestMenuName={showBestMenuName}
      />
    </div>
  );
};

export default App;
