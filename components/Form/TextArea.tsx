"use client"
import { Textarea } from "@nextui-org/react";
import { FC } from 'react';
interface TextAreaProps {
    value: string,
    setValue: any
    className?: string
}

const TextArea: FC<TextAreaProps> = ({ value, setValue, className }) => {
    return <>
        <Textarea
            variant="underlined"
            style={{ color: "gray" }}
            placeholder="Enter your Prompt"
            value={value}
            className={className}
            onValueChange={setValue}
        /></>
}

export default TextArea