import Marker from '../../../../assets/marker.webp';

const useMarker = (
  map: kakao.maps.Map | undefined,
  location: GeolocationPosition
) => {
  if (typeof map === 'undefined') {
    return;
  }
  const marker = new kakao.maps.Marker({
    map,
    position: new kakao.maps.LatLng(
      location.coords.latitude,
      location.coords.longitude
    ),
    image: new kakao.maps.MarkerImage(Marker, new kakao.maps.Size(50, 50)),
    title: '춘식이s마카',
  });

  return { marker };
};

export default useMarker;
