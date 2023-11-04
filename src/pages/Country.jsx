import { useNavigate, useSearchParams } from 'react-router-dom'
import styles from './Country.module.css'

import { BsArrowLeft } from 'react-icons/bs'
import { useEffect, useState } from 'react'

export default function Country() {
    const [country, setCountry] = useState({})
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()

    const [searchParams] = useSearchParams()

    const current = searchParams.get('current')

    const back = () => {
        navigate(-1)
    }

    useEffect(() => {
        const getCountry = async () => {
            setIsLoading(true)
            try {
                const res = await fetch(
                    `https://restcountries.com/v3.1/name/${current}`
                )

                if(!res.ok) {
                    throw new Error('Something went wrong while fetching the data :(')
                }

                const data = await res.json()
                console.log(data)
            } catch (err) {
                setError(err)
                console.log(err.message)
            } finally {
                setIsLoading(false)
            }
        }
        getCountry()
    }, [current])

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
                    alt="The Flag of Belgium"
                />
                <div className={styles.info}>
                    <h2 className={styles.countryName}></h2>
                    <div className={styles.infoBox}>
                        <div className={styles.infoLeft}>
                            <span className={styles.title}>
                                Native Name:{' '}
                                <span className={styles.descr}></span>
                            </span>
                            <span className={styles.title}>
                                Population:{' '}
                                <span className={styles.descr}></span>
                            </span>
                            <span className={styles.title}>
                                Region: <span className={styles.descr}></span>
                            </span>
                            <span className={styles.title}>
                                Sub Region:{' '}
                                <span className={styles.descr}></span>
                            </span>
                            <span className={styles.title}>
                                Capital: <span className={styles.descr}></span>
                            </span>
                        </div>
                        <div className={styles.infoRight}>
                            <span className={styles.title}>
                                Top Level Domain:{' '}
                                <span className={styles.descr}></span>
                            </span>
                            <span className={styles.title}>
                                Currencies:{' '}
                                <span className={styles.descr}></span>
                            </span>
                            <span className={styles.title}>
                                Languages:{' '}
                                <span className={styles.descr}></span>
                            </span>
                        </div>
                    </div>
                    <div className={styles.borderCountriesBox}>
                        <span className={styles.borderCountriesTitle}>
                            Border Countries:{' '}
                        </span>
                        <div className={styles.borderCountries}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
