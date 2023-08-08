import React from 'react';
import { Menu } from './model/restaurant';

// interface Pizza {
//   name: string;
//   category: string;
//   price: number;
// }

interface Pizza extends Menu {
  showBestMenuName: (name: string) => string;
}

const BestMenu: React.FC<Pizza> = ({ name, category, price }) => {
  return <div>{name}</div>;
};

export default BestMenu;
