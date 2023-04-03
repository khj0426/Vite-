import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import GlobalStyle from './components/style/Globalstyle'
function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <GlobalStyle />
            <div className="App">
                <Header />
            </div>
        </>
    )
}

export default App
