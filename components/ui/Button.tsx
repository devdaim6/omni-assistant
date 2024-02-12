import { cn } from '@/utils/cn';
import { Button } from '@nextui-org/react';
import { FC, ReactNode } from 'react'

interface ButtonProps {
    type: "submit" | "reset" | "button" | undefined;
    className: string;
    children: ReactNode;
    variant?: "solid" | "bordered" | "light" | "flat" | "faded" | "shadow" | "ghost" | undefined;
    size?: "sm" | "md" | "lg" | undefined;
}

const CustomButton: FC<ButtonProps> = ({ type, className, children, variant, size }) => {
    return <Button type={type} className={cn(className)} variant={variant} size={size}>{children}</Button>
}
export default CustomButton 