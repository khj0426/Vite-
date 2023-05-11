//공통적으로 쓰일 InputText 컴포넌트
import { useState } from 'react';
import { InputText } from 'primereact/inputtext';

export type Props = {
  className?: string;
  placeholder?: string;
  onChange: ({ value }: { value: string }) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  value?: string;
  disabled?: boolean;
  style: React.CSSProperties;
};

function TextInput({
  className,
  placeholder,
  onChange,
  onBlur,
  onFocus,
  style,
  value = '',
  disabled,
}: Props) {
  const [text, setTest] = useState<string>(value);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTest(e.target.value);
    onChange({ value: e.target.value });
  };

  return (
    <InputText
      value={text}
      className={className}
      placeholder={placeholder}
      onChange={handleChange}
      onFocus={onFocus}
      onBlur={onBlur}
      disabled={disabled}
      style={style}
    />
  );
}

export default TextInput;
