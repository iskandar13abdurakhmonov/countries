/* eslint-disable react/prop-types */
import styles from './CountryItem.module.css'

export default function CountryItem({ country }) {
    console.log(country)

    return (
        <li className={styles.countryItem}>
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
        </li>
    )
}
