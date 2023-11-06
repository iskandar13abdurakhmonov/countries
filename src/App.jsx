import Header from './components/Header'
import {
    BrowserRouter as Rounter,
    Routes,
    Route,
} from 'react-router-dom'
import Home from './pages/Home'
import Country from './pages/Country'
import Footer from './components/Footer'
import { useEffect, useState } from 'react'
import Form from './components/Form'
import CountryList from './components/CountryList'

function App() {
    const [countries, setCountriers] = useState([])
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [country, setCountry] = useState([])
    const [filteredCountries, setFilteredCountries] = useState([])
    const [query, setQuery] = useState('')
    const [noResults, setNoResults] = useState(false)

    useEffect(() => {
        const getCountries = async () => {
            try {
                setIsLoading(true)
                const res = await fetch('https://restcountries.com/v3.1/all')
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
                                    element={
                                        <Home>
                                            <Form
                                                countries={countries}
                                                query={query}
                                                setQuery={setQuery}
                                                setFilteredCountries={
                                                    setFilteredCountries
                                                }
                                                setNoResults={setNoResults}
                                            />
                                            <CountryList
                                                filteredCountries={
                                                    filteredCountries
                                                }
                                            />
                                        </Home>
                                    }
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
