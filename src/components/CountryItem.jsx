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

export default function CountryItem({ country, darkMode }) {

    console.log(country)

    return (
        <li
            className={`${styles.countryItem} ${
                darkMode ? styles.countryItemLight : styles.countryItemDark
            }`}
        >
            <Link to={`/country?current=${country.name.common}`}>
                <div className={styles.imageBox}>
                    <img
                        src={country.flags.png}
                        alt={country.flags.alt}
                    />
                </div>
                <div
                    className={`${styles.textBox} ${
                        darkMode ? styles.textBoxLight : styles.textBoxDark
                    }`}
                >
                    <h2
                        className={`${styles.countryName} ${
                            darkMode
                                ? styles.countryNameLight
                                : styles.countryNameDark
                        }`}
                    >
                        {country?.name?.official}
                    </h2>
                    <div className={styles.infos}>
                        <span
                            className={`${styles.title} ${
                                darkMode ? styles.titleLight : styles.titleDark
                            }`}
                        >
                            Population:
                            <span
                                className={`${styles.descr} ${
                                    darkMode
                                        ? styles.descrLight
                                        : styles.descrDark
                                }`}
                            >
                                {formatNumber(country.population)}
                            </span>
                        </span>
                        <span
                            className={`${styles.title} ${
                                darkMode ? styles.titleLight : styles.titleDark
                            }`}
                        >
                            Region:{' '}
                            <span
                                className={`${styles.descr} ${
                                    darkMode
                                        ? styles.descrLight
                                        : styles.descrDark
                                }`}
                            >
                                {country.region}
                            </span>
                        </span>
                        <span
                            className={`${styles.title} ${
                                darkMode ? styles.titleLight : styles.titleDark
                            }`}
                        >
                            Capital:{' '}
                            <span
                                className={`${styles.descr} ${
                                    darkMode
                                        ? styles.descrLight
                                        : styles.descrDark
                                }`}
                            >
                                {country.capital}
                            </span>
                        </span>
                    </div>
                </div>
            </Link>
        </li>
    )
}
