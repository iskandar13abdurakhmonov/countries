import Header from './components/Header'
import { BrowserRouter as Rounter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Country from './pages/Country'
import Footer from './components/Footer'
import { useEffect, useState } from 'react'

function App() {
    const [countries, setCountriers] = useState([])
    const [country, setCountry] = useState({})
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    console.log(country)

    useEffect(() => {
        const getCountries = async () => {
            try {
                setIsLoading(true)
                const res = await fetch(
                    'https://restcountries.com/v3.1/name/USA'
                )
                if (!res.ok) {
                    throw new Error(
                        'Something went wrong with fetching the data :('
                    )
                }
                const data = await res.json()
                setCountry(data)
            } catch (err) {
                console.log(err)
                setError(err.message)
            } finally {
                setIsLoading(false)
            }
        }
        getCountries()
    }, [])

    return (
        <div className="App">
            <div className="wrapper">
                <Header />
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
                <Footer />
            </div>
        </div>
    )
}

export default App
