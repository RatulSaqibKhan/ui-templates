type LabelProps = {
  children: React.ReactNode;
  id?: string;
  inputFieldId?: string;
  formId?: string;
  className?: string;
};

const Label = ({ children, id, inputFieldId, formId, className }: LabelProps) => {
  return (
    <label
      id={id}
      htmlFor={inputFieldId}
      form={formId}
      className={`custom-input-label ${className}`}
    >
      {children}
    </label>
  );
};

export default Label;
