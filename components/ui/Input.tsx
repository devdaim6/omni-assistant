import { cn } from '@/utils/cn';
import { FC } from 'react'

interface InputProps {
    type: "text" | "password" | "email" | "number" | "tel" | "url" | "search" | "date" | "time" | "datetime-local" | "month" | "week" | "color" | undefined;
    className: string;
    placeholder: string;
}

const Input: FC<InputProps> = ({ type, placeholder, className }) => {
    return <input
        type={type}
        placeholder={placeholder}
        className={cn(className)}
    />
}

export default Input