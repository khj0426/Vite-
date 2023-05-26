import { Dropdown } from 'primereact/dropdown';
import { DropdownChangeEvent } from 'primereact/dropdown';
import { categoryState } from '../../Atoms/Atoms';
import { useRecoilState } from 'recoil';
import { categories } from '../../constants/CategoryConstant';

const SelectCategory = () => {
  const [category, setCategory] = useRecoilState(categoryState);
  const handleCategoryChange = (e: DropdownChangeEvent) => {
    setCategory(() => e.target.value);
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
          display: 'flex',
          margin: '0 auto',
          width: '300px',
        }}
        filter={true}
      />
    </>
  );
};

export default SelectCategory;
