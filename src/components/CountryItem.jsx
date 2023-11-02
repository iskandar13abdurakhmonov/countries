/* eslint-disable react/prop-types */
import { Link, useSearchParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import styles from './CountryItem.module.css'

export default function CountryItem({ country }) {
    const [searchParams] = useSearchParams()
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const [cland, setCLand] = useState({})

    console.log(cland)

    const land = searchParams.get('country')
    

    useEffect(() => {
        const getCountries = async () => {
            try {
                setIsLoading(true)
                const res = await fetch(
                    `https://restcountries.com/v3.1/name/${land}`
                )
                if (!res.ok) {
                    throw new Error(
                        'Something went wrong with fetching the data :('
                    )
                }
                const data = await res.json()
                setCLand(data)
            } catch (err) {
                console.log(err)
                setError(err.message)
            } finally {
                setIsLoading(false)
            }
        }
        getCountries()
    }, [land])

    return (
        <Link to={`/?country=${country.name.common}`} className={styles.countryItem}>
            <div className={styles.imageBox}>
                <img
                    src={country.flags.png}
                    alt="germany flag"
                />
            </div>
            <div className={styles.textBox}>
                <h2 className={styles.countryName}>{country.name.common}</h2>
                <div className={styles.infos}>
                    <span className={styles.title}>
                        Population:
                        <span className={styles.descr}>
                            {country.population}
                        </span>
                    </span>
                    <span className={styles.title}>
                        Region:{' '}
                        <span className={styles.descr}>{country.region}</span>
                    </span>
                    <span className={styles.title}>
                        Capital:{' '}
                        <span className={styles.descr}>{country.capital}</span>
                    </span>
                </div>
            </div>
        </Link>
    )
}
