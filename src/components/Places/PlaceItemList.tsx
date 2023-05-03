import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import DetailCard from '../Card';
import { searchState } from '../Atoms/Atoms';

const StyledListWrapper = styled.ul`
  display: flex;
  margin: 0 auto;
  gap: 15px;
  width: 80%;
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
  margin: 0px auto;
  align-items: flex-end;
  flex-wrap: wrap;
  justify-content: center;
`;

const StyledhasNoItem = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;
  margin: 10px auto;
  color: 'white';
  font-size: 20px;
`;

const PlaceItemList = () => {
  const SearchList = useRecoilValue(searchState);

  return (
    <div>
      <StyledListWrapper>
        {SearchList.length === 0 && (
          <StyledhasNoItem>
            <i
              className="pi 
          pi-exclamation-circle"
              style={{ fontSize: '20px', color: 'slateblue' }}
            />
            <span
              style={{
                color: '#fff',
              }}
            >
              장소를 검색하거나 카테고리를 선택해주세요
            </span>
          </StyledhasNoItem>
        )}
        {SearchList.map((eachList) => (
          <div key={eachList.id}>
            <li key={eachList.id} />
            <DetailCard list={eachList} />
          </div>
        ))}
      </StyledListWrapper>
    </div>
  );
};

export default PlaceItemList;
