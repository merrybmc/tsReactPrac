import React from 'react';
import { Address, Data } from './model/restaurant';

interface Info {
  info: Data;
  changeAddress(address: Address): void;
}

const Store: React.FC<Info> = ({ info, changeAddress }) => {
  return <div>{info.name}</div>;
};

export default Store;
