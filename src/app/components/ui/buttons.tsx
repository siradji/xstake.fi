"use client"
import React, {PropsWithChildren} from 'react';

export type buttonVariant = 'primary' | 'secondary' | 'tertiary' | 'text'
export type buttonSize = 'sm' | 'md' | 'lg'
export interface ButtonProp {
    onClick: () => void
    variant?: buttonVariant
    size?: buttonSize
    disabled?: boolean
    className?: string
    isRounded?: boolean
}
export const Button: React.FC<PropsWithChildren<ButtonProp>> = ({
                    children,
                    variant = 'primary',
                    size = 'md',
                    disabled = false,
                    isRounded = true,
                    className = '',
                    onClick,
                }) => {
    const baseClasses = "inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

    // Size variations
    const sizeClasses = {
        lg: "px-xl py-lg text-subtitle leading-h5 rounded-[100px]",
        md: "px-lg py-md text-body1 leading-body1 rounded-[100px]",
        sm: "px-md py-[12px] text-body2 leading-body2 rounded-[100px]",
    };

    // Variant variations
    const variantClasses = {
        // Primary button styles
        primary: `
      bg-neutral-dark-blue-600 
      text-primary-neutral-50 
      border border-primary-cool-600
      hover:bg-neutral-dark-blue-400
      focus:ring-primary-cool-500
      active:border-primary-cool-500
      disabled:bg-neutral-dark-blue-600/50 
      disabled:border-neutral-black-300 
    `,

        // Secondary button styles
        secondary: `
      bg-transparent
      text-neutral-dark-blue-600 
      border neutral-dark-blue-600 
      hover:bg-neutral-dark-blue-50
      hover:text-neutral-dark-blue-400
      focus:ring-primary-cool-300
      active:bg-primary-neutral-200
      disabled:opacity-50
      disabled:border-neutral-dark-blue-600 
    `,

        // Tertiary button styles
        tertiary: `
      bg-primary-cool-100
      text-primary-cool-900
      hover:border
      hover:bg-neutral-dark-blue-50 
      hover:border-neutral-dark-blue-50 
      disabled:bg-primary-neutral-100 
      disabled:border-primary-neutral-100 
      disabled:text-neutral-black-400
    `,

        // Text button styles
        text: `
      bg-transparent 
      text-primary-cool-600 
      border border-transparent
      hover:bg-primary-neutral-100 
      focus:ring-primary-cool-300
      active:bg-primary-neutral-200
      disabled:text-neutral-black-400
    `
    };


    return (
        <button
            className={`
        ${baseClasses}
        ${sizeClasses[size] || sizeClasses.md}
        ${variantClasses[variant] || variantClasses.primary}
        ${className}
      `}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </button>
    );
};
