type InputProps = {
  label: string;
  type?: string;
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({ label, type = 'text', value, placeholder = '', onChange }: InputProps) {
  return (
    <div className="mb-4">
      <label className="custom-input-label">{label}</label>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="custom-input-style"
      />
    </div>
  );
}
