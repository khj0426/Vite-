import type { addressHandlerType } from '../components/types/Location/Address'
import AddressConstants from '../components/constants/AddressConstant'
const AddressHandlerError = ({ resultAddress, error }: addressHandlerType) => {
    return (
        <>
            {error === kakao.maps.services.Status.ERROR && (
                <div>{AddressConstants.serverError}</div>
            )}

            {error === kakao.maps.services.Status.ZERO_RESULT && (
                <div>{AddressConstants.notfoundError}</div>
            )}

            {typeof resultAddress !== 'undefined' ? (
                <h1>{resultAddress[0].address.address_name}</h1>
            ) : null}
        </>
    )
}
export default AddressHandlerError
