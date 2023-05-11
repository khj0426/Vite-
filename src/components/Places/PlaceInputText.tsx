import { useState, useRef, useEffect } from 'react';
import TextInput, { Props as TextInputProps } from '../Common/TextInput';
import { Button } from 'primereact/button';
import useDebounce from '../../hook/useDebounce';
import useQuerySearch from '../../hook/Domain/Search/useQuerySearch';
import { Messages } from 'primereact/messages';
import { useRecoilState } from 'recoil';
import { searchState } from '../Atoms/Atoms';

function PlaceInputText() {
  const [placeState, setPlaceState] = useRecoilState(searchState);
  const [value, setValue] = useState('');
  const Value = useDebounce(value, 250);
  const errorMessageRef = useRef<Messages | null>(null);
  const handleChange = ({ value }: { value: string }) => {
    setValue(value);
  };

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setPlaceState(querySearchState);
  };

  const inputProps: TextInputProps = {
    value,
    onChange: handleChange,
    placeholder: '장소를 검색하세요',
    style: { width: '300px', height: '45px' },
  };

  const { querySearchState, error } = useQuerySearch({ query: Value });
  useEffect(() => {
    if (errorMessageRef && errorMessageRef.current) {
      errorMessageRef.current.show({
        severity: 'info',
        closable: false,
        content: <div className="ml-2">찾으시려는 정보가 없습니다!</div>,
      });
    }
  }, []);

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
      }}
    >
      <TextInput {...inputProps} />
      <Button
        onClick={handleButtonClick}
        style={{
          height: '45px',
        }}
      >
        <i className="pi pi-search" style={{ color: '#fff' }}></i>
      </Button>
      {error === kakao.maps.services.Status.ZERO_RESULT && (
        <Messages
          ref={errorMessageRef}
          style={{
            width: '300px',
            margin: 'auto 0',
          }}
        />
      )}
    </div>
  );
}
export default PlaceInputText;
