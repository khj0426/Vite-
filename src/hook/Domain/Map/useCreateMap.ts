// |Good parts:
// |- The code is using TypeScript, which helps catch errors during development.
// |- The code is using React hooks, specifically `useState` and `useEffect`,
// which allows for state management and side effects in functional components.
// |- The code is using the `kakao.maps` library to create a map object,
// which is a popular library for creating maps in Korea.
// |
// |Bad parts:
// |- The code is not handling errors that may occur when creating the map object.
// |- The code is only updating the map object when the latitude of the position changes,
// but it should also update when the longitude changes.
// |- The code is not checking if the `pos` or `container`
// parameters are null or undefined, which could cause errors.
// |

// 위치를 받아서 카키오 지도 객체를 반환합니다

export type CreateMapProps = {
  pos: GeolocationPosition;
  container: HTMLElement;
};

export function createMap({ pos, container }: CreateMapProps) {
  const $latitude = pos?.coords?.latitude;
  const $longitude = pos?.coords?.longitude;

  const $mapOptions: kakao.maps.MapOptions = {
    center: new kakao.maps.LatLng($latitude, $longitude),
    level: 2,
    draggable: true,
    scrollwheel: true,
    keyboardShortcuts: true,
  };

  return new kakao.maps.Map(container, $mapOptions);
}
