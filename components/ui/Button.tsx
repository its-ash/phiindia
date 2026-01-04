import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    fullWidth?: boolean;
}

export const Button = React.forwardRef<HTMLElement, ButtonProps & { as?: 'button' | 'a' | 'div' }>(
    ({ className, variant = 'primary', size = 'md', fullWidth, as = 'button', children, ...props }, ref) => {
        const baseStyles = 'inline-flex items-center justify-center rounded-lg font-medium transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-95';

        const variants = {
            primary: 'bg-gradient-to-r from-pink-400 to-blue-400 text-white hover:scale-105 shadow-md hover:shadow-lg',
            outline: 'border-2 border-pink-400 text-pink-500 hover:bg-pink-50',
            ghost: 'text-gray-600 hover:bg-gray-100 hover:text-gray-900',
        };

        const sizes = {
            sm: 'px-3 py-1.5 text-sm',
            md: 'px-5 py-2.5 text-base',
            lg: 'px-8 py-3 text-lg',
        };

        const Component = motion[as] as any;

        return (
            <Component
                ref={ref}
                whileHover={variant === 'primary' ? { scale: 1.05 } : {}}
                whileTap={{ scale: 0.95 }}
                className={cn(
                    baseStyles,
                    variants[variant],
                    sizes[size],
                    fullWidth && 'w-full',
                    className
                )}
                {...props}
            >
                {children}
            </Component>
        );
    }
);
Button.displayName = 'Button';
