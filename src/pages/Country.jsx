import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import styles from './Country.module.css'

import { BsArrowLeft } from 'react-icons/bs'
import { useEffect, useState } from 'react'

const NAME_URL = 'https://restcountries.com/v3.1/name/'

const CODE_URL = 'https://restcountries.com/v3.1/alpha/'

const formatNumber = (number) => {
    const numberString = String(number)
    const reversedNumberString = numberString.split('').reverse().join('')
    const formmattedNumberString = reversedNumberString.replace(
        /(\d{3})(?=\d)/g,
        '$1,'
    )
    return formmattedNumberString.split('').reverse().join('')
}

export default function Country() {
    const [country, setCountry] = useState({})
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const languages = country.languages
    const borderingCountries = country.borders

    console.log(country)

    const navigate = useNavigate()

    const [searchParams] = useSearchParams()

    const current = searchParams.get('current')

    const population = country?.population

    const formatedPopulation = formatNumber(population)

    const back = () => {
        navigate(-1)
    }

    useEffect(() => {
        const getCountry = async () => {
            setIsLoading(true)
            try {
                const res = await fetch(
                    `${current.length === 3 ? CODE_URL : NAME_URL}${current}`
                )

                if (!res.ok) {
                    throw new Error(
                        'Something went wrong while fetching the data :('
                    )
                }

                const data = await res.json()
                setCountry(data[0])
            } catch (err) {
                setError(err)
                console.log(err.message)
            } finally {
                setIsLoading(false)
            }
        }
        getCountry()
    }, [current])

    const renderCountryBorders = () => {
        return borderingCountries?.map((countryCode) => {
            const countryName = async () => {
                const res = await fetch(
                    `https://restcountries.com/v3.1/alpha/${countryCode}`
                )
                const data = await res.json()
                console.log(data[0].name.common)
            }
            countryName()
        })
    }
    renderCountryBorders()       

    return (
        <div className={styles.country}>
            <div className={styles.top}>
                <button
                    className={styles.backBtn}
                    onClick={() => back()}
                >
                    <BsArrowLeft />
                    <span className={styles.btnText}>Back</span>
                </button>
            </div>

            <div className={styles.box}>
                <div className={styles.imageHolder}>
                    <img
                        className={styles.flagImage}
                        src={country?.flags?.png}
                        alt={country?.flags?.alt}
                    />
                </div>

                <div className={styles.info}>
                    <h2 className={styles.countryName}>
                        {country?.name?.common}
                    </h2>

                    <div className={styles.infoBox}>
                        <div className={styles.infoLeft}>
                            <span className={styles.title}>
                                Native Name:{' '}
                                <span className={styles.descr}>
                                    {country?.name?.nativeName?.eng?.official}
                                </span>
                            </span>
                            <span className={styles.title}>
                                Population:{' '}
                                <span className={styles.descr}>
                                    {formatedPopulation}
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
                                    {country?.tld?.[0]}
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
                                {languages
                                    ? Object.keys(languages).map((language) => (
                                          <span
                                              key={language}
                                              className={styles.descr}
                                          >
                                              {languages[language]}
                                          </span>
                                      ))
                                    : ''}
                            </span>
                        </div>
                    </div>

                    <div className={styles.borderCountriesBox}>
                        <span className={styles.borderCountriesTitle}>
                            Border Countries:{' '}
                        </span>
                        <ul className={styles.borderCountries}>
                            {borderingCountries
                                ? borderingCountries.map((borderingCountry) => (
                                      <li
                                          key={borderingCountry}
                                          className={styles.borderCountry}
                                      >
                                          <Link
                                              to={`/country?current=${borderingCountry}`}
                                          >
                                              {borderingCountry}
                                          </Link>
                                      </li>
                                  ))
                                : ''}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
