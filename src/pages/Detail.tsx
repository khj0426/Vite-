import PlaceSearchAtom from '../components/Atoms/Atoms';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import DetailCard from '../components/Card';
import SelectCategory from '../components/Select';
import Map from '../components/Map/Map';
const StyledListWrapper = styled.ul`
  display: flex;
  margin: 0 auto;
  gap: 15px;

  @media ${(props) => props.theme.desktop} {
    width: 60%;
  }
  @media ${(props) => props.theme.laptop} {
    width: 60%;
  }

  @media ${(props) => props.theme.tablet} {
    width: 100%;
  }

  @media ${(props) => props.theme.mobile} {
    width: 100%;
  }
  margin-top: 50px;
  align-items: flex-end;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Detail = ({ pos }: { pos: GeolocationPosition }) => {
  const SearchList = useRecoilValue(PlaceSearchAtom);
  return (
    <div>
      <SelectCategory pos={pos}></SelectCategory>
      <StyledListWrapper>
        {SearchList.map((eachList) => (
          <DetailCard key={eachList.id} list={eachList} />
        ))}
      </StyledListWrapper>
    </div>
  );
};

export default Detail;
