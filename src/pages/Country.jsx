import { useNavigate, useSearchParams } from 'react-router-dom'
import styles from './Country.module.css'
import { useEffect, useState } from 'react'

import { BsArrowLeft } from 'react-icons/bs'

export default function Country() {
    const [searchParams] = useSearchParams()
    const current = searchParams.get('current')

    const [country, setCountry] = useState({})
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    // const currency = Object.values(country?.currencies)[0]?.name;

    console.log(country.currencies)

    const navigate = useNavigate()

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

    const borders = country.borders

    const back = () => {
        navigate(-1)
    }

    return (
        <div className={styles.country}>
            <div className={styles.top}>
                <button
                    className={styles.backBtn}
                    onClick={() => back()}
                >
                    <BsArrowLeft />
                    Back
                </button>
            </div>
            <div className={styles.box}>
                <img
                    className={styles.imageBackground}
                    src={country?.flags?.png}
                    alt="The Flag of Belgium"
                />
                <div className={styles.info}>
                    <h2 className={styles.countryName}>
                        {country?.name?.official}
                    </h2>
                    <div className={styles.infoBox}>
                        <div className={styles.infoLeft}>
                            <span className={styles.title}>
                                Native Name:{' '}
                                <span className={styles.descr}>
                                    {country?.name?.nativeName?.zho?.official}
                                </span>
                            </span>
                            <span className={styles.title}>
                                Population:{' '}
                                <span className={styles.descr}>
                                    {country?.population}
                                </span>
                            </span>
                            <span className={styles.title}>
                                Region:{' '}
                                <span className={styles.descr}>
                                    {country?.region}
                                </span>
                            </span>
                            <span className={styles.title}>
                                Sub Region:{' '}
                                <span className={styles.descr}>
                                    {country?.subregion}
                                </span>
                            </span>
                            <span className={styles.title}>
                                Capital:{' '}
                                <span className={styles.descr}>
                                    {country?.capital}
                                </span>
                            </span>
                        </div>
                        <div className={styles.infoRight}>
                            <span className={styles.title}>
                                Top Level Domain:{' '}
                                <span className={styles.descr}>
                                    {country?.tld}
                                </span>
                            </span>
                            <span className={styles.title}>
                                Currencies:{' '}
                                <span className={styles.descr}>
                                    {country.currencies
                                        ? Object.keys(country.currencies)
                                              .map(
                                                  (currencyCode) =>
                                                      country.currencies[
                                                          currencyCode
                                                      ].name
                                              )
                                              .join(', ')
                                        : ''}
                                </span>
                            </span>
                            <span className={styles.title}>
                                Languages:{' '}
                                <span className={styles.descr}>
                                    {country?.languages?.zho}
                                </span>
                            </span>
                        </div>
                    </div>
                    <div className={styles.borderCountriesBox}>
                        <span className={styles.borderCountriesTitle}>
                            Border Countries:{' '}
                        </span>
                        <div className={styles.borderCountries}>
                            {borders &&
                                borders.map((border) => (
                                    <button
                                        key={border}
                                        className={styles.borderCountry}
                                    >
                                        {border}
                                    </button>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
