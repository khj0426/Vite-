import { useLocation } from 'react-router-dom';
const Item = () => {
  const { eachList }: { eachList: kakao.maps.services.PlacesSearchResultItem } =
    useLocation().state;

  return (
    <>
      <div style={{ color: '#fff', height: '50px' }}>
        {eachList.address_name}
      </div>
    </>
  );
};

export default Item;
