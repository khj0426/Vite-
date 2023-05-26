import type { NavigateCardProps } from '../../types/Common/PlaceNavigateCard';

const NavigateCard = ({ itemList, style }: NavigateCardProps) => {
  return (
    <article style={style}>
      {itemList.map((item) => (
        <div
          key={item.imgUrl}
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img src={item.imgUrl} width={50} height={50} />
          <h5>{item.label}</h5>
        </div>
      ))}
    </article>
  );
};

export default NavigateCard;
