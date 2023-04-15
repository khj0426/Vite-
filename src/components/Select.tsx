import React, { useState } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { DropdownChangeEvent } from 'primereact/dropdown';

const SelectCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryChange = (e: DropdownChangeEvent) => {
    setSelectedCategory(e.value);
  };

  const handleButtonClick = () => {
    if (selectedCategory) {
      // 선택한 카테고리에 대한 처리 로직
      console.log('선택한 카테고리:', selectedCategory);
    } else {
      console.log('카테고리를 선택해주세요.');
    }
  };

  const categories = [
    { label: '카테고리 1', value: 'category1' },
    { label: '카테고리 2', value: 'category2' },
    { label: '카테고리 3', value: 'category3' },
  ];

  return (
    <>
      <Dropdown
        optionLabel="label"
        optionValue="value"
        options={categories}
        onChange={handleCategoryChange}
        placeholder="카테고리 선택"
        value={selectedCategory}
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
