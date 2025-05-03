import Label from "../buinding-blocks/Label";
import InputField from "../buinding-blocks/InputField";

type FormInputProps = {
  label: string;
  inputFieldId: string;
  labelId?: string;
  type?: string;
  value?: string;
  placeholder?: string;
  formId?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  labelClassName?: string;
  inputFieldClassName?: string;
  inputFieldDisabled?: boolean;
};

const FormInput = ({
  label,
  labelId,
  type = "text",
  value,
  placeholder = "",
  inputFieldId,
  formId,
  onChange,
  labelClassName,
  inputFieldClassName,
  inputFieldDisabled,
}: FormInputProps) => {
  return (
    <div className="mb-4">
      <Label
        id={labelId}
        inputFieldId={inputFieldId}
        formId={formId}
        className={labelClassName}
      >
        {label}
      </Label>
      <InputField
        id={inputFieldId}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={inputFieldClassName}
        disabled={inputFieldDisabled}
      />
    </div>
  );
};

export default FormInput;
