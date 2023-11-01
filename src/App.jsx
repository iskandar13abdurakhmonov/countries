import Header from './components/Header'
import { BrowserRouter as Rounter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Country from './components/Country'
import Footer from './components/Footer'

function App() {
    return (
        <div className="App">
            <div className="wrapper">
                <Header/>
                <main className="main">
                    <div className="main__container">
                        <Rounter>
                            <Routes>
                                <Route
                                    path="/"
                                    element={<Home />}
                                />
                                <Route
                                    path="/country"
                                    element={<Country />}
                                />
                            </Routes>
                        </Rounter>
                    </div>
                </main>
               <Footer/>
            </div>
        </div>
    )
}

export default App
