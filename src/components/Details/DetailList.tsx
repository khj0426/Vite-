import PlaceSearchAtom from '../Atoms/Atoms';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import DetailCard from '../Card';
import SelectCategory from '../Select';
import { useNavigate } from 'react-router-dom';

const StyledListWrapper = styled.ul`
  display: flex;
  margin: 0 auto;
  gap: 15px;

  @media ${(props) => props.theme.desktop} {
    width: 1000px;
  }
  @media ${(props) => props.theme.laptop} {
    width: 800px;
  }

  @media ${(props) => props.theme.tablet} {
    width: 800px;
  }

  @media ${(props) => props.theme.mobile} {
    width: 100%;
  }
  margin: 50px auto;
  align-items: flex-end;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const DetailItemList = () => {
  const SearchList = useRecoilValue(PlaceSearchAtom);
  const navigate = useNavigate();

  const handleItemClick = (
    eachList: kakao.maps.services.PlacesSearchResultItem
  ) => {
    navigate('/item', {
      state: {
        eachList,
      },
    });
  };
  return (
    <div>
      <SelectCategory />
      <StyledListWrapper>
        {SearchList.map((eachList) => (
          <div onClick={() => handleItemClick(eachList)} key={eachList.id}>
            <DetailCard key={eachList.id} list={eachList} />
          </div>
        ))}
      </StyledListWrapper>
    </div>
  );
};

export default DetailItemList;
