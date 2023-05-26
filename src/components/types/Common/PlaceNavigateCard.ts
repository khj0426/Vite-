type ImageNamePair = {
  imgUrl?: string;
  label: string;
  onClick?: () => void;
};

type NavigateCardProps = {
  //이미지가 있고
  //이름이 있음
  //누르면 이벤트 발생

  itemList: ImageNamePair[];
  style?: React.CSSProperties;
};

export type { ImageNamePair, NavigateCardProps };
