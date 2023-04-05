//현위치의 위도 경도를 반환
import { useState, useEffect } from 'react'
import type { resultInterface } from '../components/types/Location/Address'
const useCurrentPos = () => {
    const [currentLocation, setCurrentLocation] = useState<GeolocationPosition>()
    const [resultAddress, setResultAddress] = useState<resultInterface>()

    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((pos) => {
                setCurrentLocation(pos)
            })
        }
    }

    const getAddressFromCoordinate = () => {
        //좌표를 주소로 변환하는 함수
        const $latitude = currentLocation?.coords?.latitude
        const $longitude = currentLocation?.coords?.longitude
        console.log($latitude, $longitude)
        if (!($latitude && $longitude)) {
            return
        }

        const $geoCoder = new kakao.maps.services.Geocoder()
        $geoCoder.coord2Address($longitude, $latitude, (result, status) => {
            setResultAddress(result)
        })
    }

    useEffect(() => {
        getLocation()
    }, [])

    useEffect(() => {
        getAddressFromCoordinate()
    }, [currentLocation && true])

    return { resultAddress }
}

export default useCurrentPos
