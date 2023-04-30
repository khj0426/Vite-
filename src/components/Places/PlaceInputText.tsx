import { useState } from 'react';
import TextInput, { Props as TextInputProps } from '../Common/TextInput';
import { Button } from 'primereact/button';

function PlaceInputText() {
  const [value, setValue] = useState('');
  const handleChange = ({ value }: { value: string }) => {
    setValue(value);
  };

  const inputProps: TextInputProps = {
    value,
    onChange: handleChange,
    placeholder: '장소를 검색하세요',
  };

  return (
    <div>
      <TextInput {...inputProps} />
      <Button label="검색하기" />
    </div>
  );
}

export default PlaceInputText;
