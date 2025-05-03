import Label from "../buinding-blocks/Label";
import InputGroup from "../buinding-blocks/InputGroup";

type FormInputGroupProps = {
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
  prepend?: React.ReactNode;
  append?: React.ReactNode;
  onPrependClick?: () => void;
  onAppendClick?: () => void;
};

const FormInputGroup = ({
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
  prepend,
  append,
  onPrependClick,
  onAppendClick,
}: FormInputGroupProps) => {
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
      <InputGroup
        id={inputFieldId}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        prepend={prepend}
        onAppendClick={onAppendClick}
        append={append}
        onPrependClick={onPrependClick}
        className={inputFieldClassName}
        disabled={inputFieldDisabled}
      />
    </div>
  );
};

export default FormInputGroup;
