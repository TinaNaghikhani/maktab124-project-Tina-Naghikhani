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
export interface EditeModallInterface {
  isOpen: boolean;
  onClose: () => void;
  onSave:()=>void;
  onEdite: (editeProduct: any) => void;
  product: any;
}
