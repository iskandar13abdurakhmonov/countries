import Header from './components/Header'
import { BrowserRouter as Rounter, Routes, Route, useSearchParams } from 'react-router-dom'
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

    useEffect(() => {
        const getCountries = async () => {
            try {
                setIsLoading(true)
                const res = await fetch(
                    'http://localhost:3001/countries'
                )
                if (!res.ok) {
                    throw new Error(
                        'Something went wrong with fetching the data :('
                    )
                }
                const data = await res.json()
                setCountriers(data)
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
                                            <Form />
                                            <CountryList
                                                countries={countries}
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
