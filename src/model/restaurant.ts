export interface Data {
  name: string;
  category: string;
  address: Address;
  menu: Menu[];
}

export interface Address {
  city: string;
  detail: string;
  zipCode: Number;
}

export interface Menu {
  name: string;
  price: number;
  category: string;
}

// Address 타입에서 zipoCode 제거
export type AddressWithoutZipcode = Omit<Address, 'zipCode'>;

export type RestaurantOnlyCategory = Pick<Data, 'category'>;

// 특정 타입 추가
export interface Test extends Pick<Data, 'category'> {}

// api 호출 시 쓰이는 타입
export type ApiResponse<T> = {
  data: T[];
  totalPage: number;
  page: number;
};

export type RestaurantResponse = ApiResponse<Restaurant>;
export type MenuResponse = ApiResponse<Menu>;
