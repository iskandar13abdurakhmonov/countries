import { useNavigate, useSearchParams } from 'react-router-dom'
import styles from './Country.module.css'
import { useEffect, useState } from 'react'

export default function Country() {

    const [searchParams] = useSearchParams()
    const current = searchParams.get('current')
    
    const [country, setCountry] = useState({})
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()

    console.log(country)

    useEffect(() => {
      const getCountries = async () => {
          try {
              setIsLoading(true)
              const res = await fetch(
                  `https://restcountries.com/v3.1/name/${current}`
              )
              if (!res.ok) {
                  throw new Error(
                      'Something went wrong with fetching the data :('
                  )
              }
              const data = await res.json()
              setCountry(data[0])
          } catch (err) {
              console.log(err)
              setError(err.message)
          } finally {
              setIsLoading(false)
          }
      }
      getCountries()
  }, [current])

  const back = () => {
    navigate(-1)
  }

    return <>
      <button onClick={() => back()}>back</button>
      {country ? <div className={styles.country}>
        <h1>{country?.name?.common}</h1>
      </div> : 'Loading...'}
    </>
}
