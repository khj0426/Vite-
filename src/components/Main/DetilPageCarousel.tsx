import CommonCarousel from '../Common/Carousel';
import type { CarouselProps, responsiveOption } from '../Common/Carousel';
import styled from 'styled-components';
import { memo } from 'react';

const DetailPageCarouselImage = styled.img`
  display: inline-flex;
  flex-wrap: wrap;
  @media ${(props) => props.theme.desktop} {
    width: 1100px;
    height: 300px;
  }
  @media ${(props) => props.theme.laptop} {
    width: 900px;
    height: 300px;
  }

  @media ${(props) => props.theme.tablet} {
    width: 750px;
    height: 300px;
  }

  @media ${(props) => props.theme.mobile} {
    width: 300px;
    height: auto;
  }
  object-fit: contain;
`;

const DetailPageCarousel = () => {
  //props주입
  const DetailPageCarouselProps: CarouselProps = {
    numScroll: 1,
    numVisible: 1,
    imgurls: [
      'https://mp-seoul-image-production-s3.mangoplate.com/d8e852bf7058841a7a0694af93af1b9a.jpg?w=1080',
      'https://cdn-mart.baemin.com/inventory-unit/f454861c-e2ae-4dcb-ac02-aea51493a696.jpg?w=1080',
    ],
    itemTemplate: (imgUrl: string) => (
      <section
        style={{
          display: 'flex',
          justifyContent: 'center',
          margin: '25px auto',
        }}
      >
        <DetailPageCarouselImage src={imgUrl} alt="캐러셀 이미지" />
      </section>
    ),
    style: {},
  };
  return <CommonCarousel props={DetailPageCarouselProps} />;
};

export default memo(DetailPageCarousel);
