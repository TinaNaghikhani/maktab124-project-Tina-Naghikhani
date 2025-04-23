import { ChangeEvent, ReactNode } from "react";

export interface InputInterface {
  type: string;
  placeholder: string;
  className: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  disabled?: boolean;
  id?: string;
  name?: string;
  error?: string;
  label: string;
}

export interface ButtonInterface {
  type: "submit" | "button" | undefined;
  onClick?: () => void | undefined;
  className: string;
  label?: string | unknown;
  disable?: boolean;
}

export interface dashboard {
  children: ReactNode;
}
export interface LayoutProps {
  children: ReactNode;
}
export interface products {
  image: string;
  name: string;
  category: string;
  price: number;
  id: number | string;
  count: number;
}
export interface ProductsInterface {
  id?: string;
  name: string;
  image: string;
  category: string;
  price: string;
  count: string;
}
export interface EditModalInterface {
  isOpen: boolean;
  onClose: () => void;
  onSave: (updateData: { name: string; price: number; count: number }) => void;
  product: { id: number; name: string; price: number; count: number };
}
