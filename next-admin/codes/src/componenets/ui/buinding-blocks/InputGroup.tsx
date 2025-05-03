import React from "react";
import Input from "./InputField";
import Button from "./Button";

type InputGroupProps = {
  id: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  prepend?: React.ReactNode;
  append?: React.ReactNode;
  onPrependClick?: () => void;
  onAppendClick?: () => void;
  disabled?: boolean;
  className?: string;
};

const InputGroup = ({
  id,
  type = "text",
  placeholder,
  value,
  onChange,
  prepend,
  append,
  onPrependClick,
  onAppendClick,
  disabled,
  className = "",
}: InputGroupProps) => {
  return (
    <div
      className={`flex items-stretch border border-dark rounded-md overflow-hidden ${className}`}
    >
      {prepend && (
        <Button
          type="button"
          onClick={onPrependClick}
          className="px-3 bg-primary text-light !rounded-none border-r border-dark hover:bg-dark focus:outline-none"
        >
          {prepend}
        </Button>
      )}

      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className="flex-1 px-4 py-2 outline-none !border-transparent focus:!border-2 focus:!border-primary"
      />

      {append && (
        <Button
          type="button"
          onClick={onAppendClick}
          className="px-3 bg-primary text-light !rounded-none border-l border-dark hover:bg-dark focus:outline-none"
        >
          {append}
        </Button>
      )}
    </div>
  );
};

export default InputGroup;
