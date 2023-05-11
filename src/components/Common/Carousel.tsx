import { Carousel as PrimeReactCarousel } from 'primereact/carousel';

type responsiveOption = {
  breakpoint: string;
  numVisible: number;
  numScroll: number;
};

export type CarouselProps = {
  imgurls: string[];
  responsiveOption?: responsiveOption[];
  numScroll?: number;
  numVisible?: number;
};

const Carousel = ({ props }: { props: CarouselProps }) => {
  return (
    <PrimeReactCarousel
      value={props.imgurls}
      numScroll={props.numScroll}
      numVisible={props.numVisible}
      responsiveOptions={props.responsiveOption}
    />
  );
};

export default Carousel;
