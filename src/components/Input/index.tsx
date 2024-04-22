import "./styles.css";

interface Props {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  style?: React.CSSProperties;
}

const Input = ({ placeholder, required, value, onChange, style }: Props) => {
  return (
    <input
      className="input"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={style}
      required={required}
    />
  );
};

export default Input;
