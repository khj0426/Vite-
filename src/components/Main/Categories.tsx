// 카테고리 별 아이콘을 로드합니다
import React from 'react';
import CafeIcon from '../../assets/CafeIcon.webp';
import MartIcon from '../../assets/mart.webp';

function Categories() {
  return (
    <div>
      <img src={CafeIcon} alt="카페 카테고리 사진" width={52} height={52} />
      <img src={MartIcon} alt="대형마트 카테고리 사진" width={52} height={52} />
    </div>
  );
}

export default Categories;
