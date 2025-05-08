import { ChangeEvent, ReactNode } from "react";

export interface InputInterface {
  type: string;
  placeholder?: string;
  className: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  disabled?: boolean;
  id?: string;
  name?: string;
  error?: any;
  label?: string;
}

export interface ButtonInterface {
  type: "submit" | "button" | undefined;
  onClick?: () => Promise<void> |any;
  className: string;
  label?:ReactNode
  disable?: boolean;
}

export interface dashboard {
  children: ReactNode;
}
export interface LayoutProps {
  children: ReactNode;
}
export interface EditeModallInterface {
  isOpen: boolean;
  onClose: () => void;
  onSave:()=>void;
  onEdite: (editeProduct: any) => void;
  product: any;
}
export interface ProductsInterface {
  [x: string]: string;
  id: string;
  name: string;
  price: string; 
  offer: string;
  count: string;
  cover: string;
  category: string;
  age: string;
  pub: string;
  athur: string;
  athurPic: string;
  image: string;
  headerImg: string;
  discription1: string;
  discription2: string;
  discription3: string;
  pages: string;
  createdAt: string; 
}
export interface OrderType {
  id: number;
  status: string;
  totalPrice: number;
  createdAt: string;
  user?: {
    name: string;
    lName: string;
  };
}
