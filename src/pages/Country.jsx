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
                <div className={styles.imageBackground}>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Flag_of_Belgium_%28civil%29.svg/640px-Flag_of_Belgium_%28civil%29.svg.png"
                        alt="The Flag of Belgium"
                    />
                </div>
                <div className={styles.info}>
                    <h2 className={styles.countryName}>Belgium</h2>
                    <div className={styles.infoBox}>
                        <div className={styles.infoLeft}>
                            <span>
                                Native Name: <span>Belgie</span>
                            </span>
                            <span>
                                Population: <span>11,319,511</span>
                            </span>
                            <span>
                                Region: <span>Europe</span>
                            </span>
                            <span>
                                Sub Region: <span>Westren Europe</span>
                            </span>
                            <span>
                                Capital: <span>Brussels</span>
                            </span>
                        </div>
                        <div className={styles.infoRight}>
                            <span>
                                Top Level Domain: <span>.be</span>
                            </span>
                            <span>
                                Currencies: <span>Euro</span>
                            </span>
                            <span>
                                Languages: <span>Dutch, French, German</span>
                            </span>
                        </div>
                    </div>
                    <div className={styles.borderCountriesBox}>
                        <span>Border Countries: </span>
                        <div className={styles.borderCountries}>
                            <button className={styles.borderCountry}>
                                France
                            </button>
                            <button className={styles.borderCountry}>
                                German
                            </button>
                            <button className={styles.borderCountry}>
                                Netherlands
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
