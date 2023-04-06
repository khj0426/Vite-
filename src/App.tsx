import './App.css'
import Header from './components/Header/Header'
import AddressHandlerError from './hook/AddressHandler'
import useCurrentPos from './hook/currentLocaion'
import useCafeList from './hook/useCafeList'
import GlobalStyle from './components/style/Globalstyle'
import { Map } from './components/Map/Map'

function App() {
    const { resultAddress, error, currentLocation } = useCurrentPos()

    return (
        <>
            <GlobalStyle />
            <div className="App">
                <Header />
                <AddressHandlerError error={error} resultAddress={resultAddress} />
                {typeof currentLocation !== 'undefined' && <Map pos={currentLocation} />}
            </div>
        </>
    )
}

export default App
