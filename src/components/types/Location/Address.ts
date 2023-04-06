// |Good part:
// |- The code defines a type `resultInterface` which is an array of objects.
// |- Each object has two properties: `address` and `road_address`.
// |- The `address` property is of type `kakao.maps.services.Address`.
// |- The `road_address` property is of type `kakao.maps.services.RoadAaddress` or `null`.
// |
// |Bad part:
// |- There is no bad part in this code snippet. However, it would be better if the naming convention for `RoadAaddress` was consistent with `Address` (i.e. both should start with a lowercase letter).
// |

export type resultInterface = Array<{
    address: kakao.maps.services.Address
    road_address: kakao.maps.services.RoadAaddress | null
}>

export type addressHandlerType = {
    error: kakao.maps.services.Status | undefined
    resultAddress: resultInterface | undefined
}
