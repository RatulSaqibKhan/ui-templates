type InputFieldProps = {
  id: string;
  type?: string;
  placeholder?: string;
  value?: string;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
};

const InputField = ({
  id,
  type = "text",
  placeholder,
  value,
  disabled,
  onChange,
  className,
}: InputFieldProps) => {
  return (
    <input
      id={id}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      disabled={disabled}
      className={`custom-input-style ${className}`}
    />
  );
};

export default InputField;
