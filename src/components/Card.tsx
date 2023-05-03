import React, { useRef } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import useInViewPort from '../hook/useInViewPort';

const CardAnchor = styled.a`
  color: black;
  text-decoration: none;
  &:hover {
    font-weight: 600;
  }
`;

const CardWrapper = styled.li`
  list-style-type: none;
  display: flex;
  height: auto;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-end;
  cursor: pointer;
  margin: 25px;
  opacity: 0;
  @media ${(props) => props.theme.desktop} {
    width: 350px;
  }
  @media ${(props) => props.theme.laptop} {
    width: 300px;
  }

  @media ${(props) => props.theme.tablet} {
    width: 300px;
  }

  @media ${(props) => props.theme.mobile} {
    width: 250px;
  }
  &.animation {
    animation-name: opacity;
    animation-duration: 1500ms;
    animation-fill-mode: forwards;

    @keyframes opacity {
      from {
        opacity: 0;
        transform: translate3d(0, 100%, 50%);
      }
      to {
        opacity: 1;
        transform: translateX(0%, 0%, 0%);
      }
    }
  }
`;

function DetailCard({
  list,
}: {
  list: kakao.maps.services.PlacesSearchResultItem;
}) {
  const cardRef = useRef<HTMLParagraphElement | null>(null);
  const InViewPort = useInViewPort(cardRef, {
    threshold: 0.3,
  });
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
    <CardWrapper className={InViewPort ? 'animation' : ''}>
      <Card
        title={list.place_name}
        subTitle={list.address_name}
        style={{
          margin: '0 auto',
          width: '100%',
        }}
      >
        <p ref={cardRef}>현재 위치로부터 {list.distance}m만큼 떨어져 있어요!</p>
        <CardAnchor href={list.place_url} target="_blank">
          장소 바로가기
        </CardAnchor>
        <div style={{}}>
          <Button
            label="더 알아보기"
            icon="pi pi-check"
            onClick={() => handleItemClick(list)}
          />
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
