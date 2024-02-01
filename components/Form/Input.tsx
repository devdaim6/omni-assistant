import { cn } from "@/utils/cn";
import { FC } from "react";

interface InputProps {
  name: string;
  id: string;
  type: string;
  placeholder: string;
  className?: string | null;
}

const Input: FC<InputProps> = ({ name, id, type, placeholder, className }) => {
  return (
    <>
      <div className="space-y-2">
        <label
          htmlFor={name}
          className="capitalize text-sm font-medium text-gray-300 dark:text-gray-500"
        >
          {name}{" "}
          {type == "file" ? null : <span className="text-red-600">*</span>}
        </label>
        <input
          name={name}
          id={id}
          required={type == "file" ? false : true}
          type={type}
          placeholder={placeholder}
          className={
            className
              ? cn(
                  className,
                  "w-full p-2 border border-gray-300 bg-gray-600 rounded-md focus:outline-none dark:text-gray-200"
                )
              : "w-full p-2 border border-gray-300 bg-gray-600 rounded-md focus:outline-none dark:text-gray-200"
          }
        />
      </div>
    </>
  );
};

export default Input;
