// |This code is a custom hook that takes in a position and a reference to a container element, and displays a road view using the Kakao Maps API.
// |
// |Good parts:
// |- The code is well-organized and easy to read.
// |- The hook uses the useCallback hook to memoize the getRoadView function, which can improve performance by preventing unnecessary re-renders.
// |- The code uses type annotations to make the code more readable and easier to understand.
// |
// |Bad parts:
// |- The code does not handle errors or edge cases, such as when the position is null or the reference to the container element is not available.
// |- The code assumes that the Kakao Maps API is available and loaded, which may not always be the case. It would be better to check if the API is available before using it.
// |- The code does not provide any way to customize the road view or handle user interactions with the road view.
// |
import { RefObject, useCallback } from 'react';

//위치와 로드뷰를 띄울 컨테이너를 받아서 로드뷰를 띄우는 훅
//position이 null일때 컨테이너가 이용불가일떄 처리

//onClick

type RoadViewProps = {
  pos: kakao.maps.LatLng | null;
  ref: RefObject<HTMLElement>;
};

const useRoadView = ({ pos, ref }: RoadViewProps) => {
  if (pos === null) {
    return;
  }
  const getRoadView = useCallback(() => {
    if (!(ref && ref.current)) {
      return;
    }
    const roadview = new kakao.maps.Roadview(ref.current);
    const roadviewClient = new kakao.maps.RoadviewClient();
    roadviewClient.getNearestPanoId(pos, 20, (panID) => {
      roadview.setPanoId(panID, pos);
    });
  }, [pos]);

  getRoadView();
};

export default useRoadView;
