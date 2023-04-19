import { useLocation } from 'react-router-dom';
import { useState } from 'react';

const Item = () => {
  const { eachList }: { eachList: kakao.maps.services.PlacesSearchResultItem } =
    useLocation().state;
  const [roadview, setRoadView] = useState<boolean>(false);
  return (
    <>
      <div style={{ color: '#fff', height: '50px' }}>{eachList.place_name}</div>
      {roadview === true && (
        <iframe
          title="kakao 해당 장소의 로드맵"
          src={`https://map.kakao.com/link/roadview/${eachList.id}`}
          width="100%"
          height="500px"
        />
      )}
      <div
        onClick={() => setRoadView(!roadview)}
        style={{
          color: '#fff',
        }}
      >
        로드뷰 보러가기
      </div>
    </>
  );
};

export default Item;
