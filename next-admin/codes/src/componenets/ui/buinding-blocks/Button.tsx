type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
};

const Button = ({
  children,
  onClick,
  className,
  type = "button",
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`custom-primary-button ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
