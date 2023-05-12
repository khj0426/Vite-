import { Carousel } from 'primereact/carousel';

export type responsiveOption = {
  breakpoint: string;
  numVisible: number;
  numScroll: number;
};

export type CarouselProps = {
  imgurls: string[];
  responsiveOption?: responsiveOption[];
  //한번에 스크롤 되는 크기
  numScroll?: number;
  //한번에 보여지는 크기
  numVisible?: number;
  //style주입
  style?: React.CSSProperties;
  itemTemplate: (url: string) => JSX.Element | JSX.Element[];
};

const CommonCarousel = ({ props }: { props: CarouselProps }) => {
  return (
    <Carousel
      value={props.imgurls}
      numScroll={props.numScroll}
      numVisible={props.numVisible}
      responsiveOptions={props.responsiveOption}
      style={props.style}
      itemTemplate={props.itemTemplate}
    />
  );
};

export default CommonCarousel;
