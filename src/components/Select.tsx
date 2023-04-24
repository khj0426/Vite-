import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { DropdownChangeEvent } from 'primereact/dropdown';
import { categoryState } from './Atoms/Atoms';
import { useRecoilState } from 'recoil';
import { categories } from './constants/CategoryConstant';

const SelectCategory = () => {
  const [category, setCategory] = useRecoilState(categoryState);
  const handleCategoryChange = (e: DropdownChangeEvent) => {
    setCategory(() => e.target.value);
  };

  const handleButtonClick = () => {
    if (category) {
      // 선택한 카테고리에 대한 처리 로직
    } else {
      console.log('카테고리를 선택해주세요.');
    }
  };

  return (
    <>
      <Dropdown
        optionLabel="label"
        optionValue="value"
        options={categories}
        onChange={handleCategoryChange}
        placeholder="카테고리 선택"
        value={category}
        style={{
          width: '200px',
          marginTop: '16px',
        }}
      />
      <Button onClick={handleButtonClick} label="선택하기" />
    </>
  );
};

export default SelectCategory;
