export interface IAddress {
  city: string;
  street: string;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  address?: IAddress;
}
