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
  label:string;
}

export interface ButtonInterface {
  type: "submit" | "button" | undefined;
  onClick?: () => void;
  className: string;
  label: string;
  disable?: boolean;
}

export interface dashboard{
  children:ReactNode
}
export interface LayoutProps {
  children: ReactNode; 
}
