import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import AddressHandlerError from './hook/AddressHandler'
import useCurrentPos from './hook/currentLocaion'
import GlobalStyle from './components/style/Globalstyle'
function App() {
    const [count, setCount] = useState(0)
    const { resultAddress, error } = useCurrentPos()
    return (
        <>
            <GlobalStyle />
            <div className="App">
                <Header />
                <AddressHandlerError error={error} resultAddress={resultAddress} />
            </div>
        </>
    )
}

export default App
