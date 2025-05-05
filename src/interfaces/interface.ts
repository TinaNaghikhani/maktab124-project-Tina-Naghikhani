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
  onClick?: () => Promise<void>;
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
