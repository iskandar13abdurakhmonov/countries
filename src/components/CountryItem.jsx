/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import styles from './CountryItem.module.css'

const formatNumber = (number) => {
    const numberString = String(number)
    const reversedNumberString = numberString.split('').reverse().join('')
    const formmattedNumberString = reversedNumberString.replace(
        /(\d{3})(?=\d)/g,
        '$1,'
    )
    return formmattedNumberString.split('').reverse().join('')
}

export default function CountryItem({ country }) {
    return (
        <li className={styles.countryItem}>
            <Link
                to={`/country?current=${country.name.common}`}
                
            >
                <div className={styles.imageBox}>
                    <img
                        src={country.flags.png}
                        alt="germany flag"
                    />
                </div>
                <div className={styles.textBox}>
                    <h2 className={styles.countryName}>
                        {country?.name?.official}
                    </h2>
                    <div className={styles.infos}>
                        <span className={styles.title}>
                            Population:
                            <span className={styles.descr}>
                                {formatNumber(country.population)}
                            </span>
                        </span>
                        <span className={styles.title}>
                            Region:{' '}
                            <span className={styles.descr}>
                                {country.region}
                            </span>
                        </span>
                        <span className={styles.title}>
                            Capital:{' '}
                            <span className={styles.descr}>
                                {country.capital}
                            </span>
                        </span>
                    </div>
                </div>
            </Link>
        </li>
    )
}
