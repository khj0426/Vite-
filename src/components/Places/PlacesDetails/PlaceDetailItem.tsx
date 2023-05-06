import styled from 'styled-components';
const StyledDetailItemWrapper = styled.section`
  display: grid;
  justify-content: center;
  color: #fff;
`;

const StyledDetailItemText = styled.div`
  display: grid;
`;

const StyledDetailItemTextArea = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  @media ${(props) => props.theme.desktop} {
    width: 700px;
  }
  @media ${(props) => props.theme.laptop} {
    width: 600px;
  }

  @media ${(props) => props.theme.tablet} {
    width: 500px;
  }

  @media ${(props) => props.theme.mobile} {
    width: 100%;
  }
  gap: 5px;
`;

const PlaceDetailItem = ({
  list,
}: {
  list: kakao.maps.services.PlacesSearchResultItem;
}) => {
  return (
    <>
      <StyledDetailItemWrapper>
        <StyledDetailItemTextArea>
          <h1>{list.place_name}</h1>
          <StyledDetailItemText>
            <span>주소</span>
            <span>{list.address_name}</span>
          </StyledDetailItemText>
          <StyledDetailItemText>
            <span>전화번호</span>
            <span>{list.phone}</span>
          </StyledDetailItemText>
          <StyledDetailItemText>
            <span>분류</span>
            <span>{list.category_name}</span>
          </StyledDetailItemText>
        </StyledDetailItemTextArea>
      </StyledDetailItemWrapper>
    </>
  );
};

export default PlaceDetailItem;
