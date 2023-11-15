import Header from './components/Header'
import { BrowserRouter as Rounter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Country from './pages/Country'
import Footer from './components/Footer'
import { useEffect, useState } from 'react'
import Form from './components/Form'
import CountryList from './components/CountryList'

function App() {
    const [countries, setCountriers] = useState([])
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const [country, setCountry] = useState([])
    const [filteredCountries, setFilteredCountries] = useState([])
    const [query, setQuery] = useState('')
    const [noResults, setNoResults] = useState(false)
    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            const getCountries = async () => {
                try {
                    const res = await fetch(
                        'https://restcountries.com/v3.1/all'
                    )
                    if (!res.ok) {
                        throw new Error(
                            'Something went wrong with fetching the data :('
                        )
                    }
                    const data = await res.json()
                    setCountriers(data)
                    setFilteredCountries(data)
                } catch (err) {
                    console.log(err)
                    setError(err.message)
                } finally {
                    setIsLoading(false)
                }
            }
            getCountries()
        }, 5000)
    }, [])

    const handleThemeChange = () => {
        setDarkMode(!darkMode)
    }

    return (
        <div className={`App ${darkMode ? 'AppLight' : 'AppDark'}`}>
            <div className="wrapper">
                <Header
                    onThemeChange={handleThemeChange}
                    darkMode={darkMode}
                />
                <main className="main">
                    <div className="main__container">
                        <Rounter>
                            <Routes>
                                <Route
                                    path="/"
                                    element={
                                        <Home>
                                            <Form
                                                darkMode={darkMode}
                                                countries={countries}
                                                query={query}
                                                setQuery={setQuery}
                                                setFilteredCountries={
                                                    setFilteredCountries
                                                }
                                                setNoResults={setNoResults}
                                            />
                                            <CountryList
                                                isLoading={isLoading}
                                                darkMode={darkMode}
                                                filteredCountries={
                                                    filteredCountries
                                                }
                                            />
                                        </Home>
                                    }
                                />
                                <Route
                                    path="/country"
                                    element={<Country darkMode={darkMode} />}
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
