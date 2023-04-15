import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import styled from 'styled-components';
const CardWrapper = styled.li`
  list-style-type: none;
  display: flex;
  width: 300px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-end;
  cursor: pointer;
  margin: 25px;
  @media ${(props) => props.theme.desktop} {
    width: 350px;
    height: 350px;
    margin: 20px;
  }
  @media ${(props) => props.theme.laptop} {
    width: 300px;
    height: 300px;
    margin: 25px;
  }

  @media ${(props) => props.theme.tablet} {
    width: 300px;
    height: 300px;
    margin: 20px;
  }

  @media ${(props) => props.theme.mobile} {
    width: 300px;
    height: 300px;
    margin: 5px;
  }
`;

function DetailCard({
  list,
}: {
  list: kakao.maps.services.PlacesSearchResultItem;
}) {
  return (
    <CardWrapper>
      <Card title={list.place_name} subTitle={list.address_name}>
        <p>현재 위치로부터 {list.distance}만큼 떨어져 있어요!</p>
        <div>
          <Button label="Save" icon="pi pi-check" />
          <Button
            label="Cancel"
            icon="pi pi-times"
            className="p-button-outlined p-button-secondary"
          />
        </div>
      </Card>
    </CardWrapper>
  );
}

export default DetailCard;
