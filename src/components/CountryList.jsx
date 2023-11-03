/* eslint-disable react/prop-types */
import CountryItem from './CountryItem'
import styles from './CountryList.module.css'

export default function CountryList({ countries }) {

    const newCountries = countries.slice(0, 8)

    return (
        <div className={styles.countryListContainer}>
            <ul className={styles.countryList}>
                {newCountries.map((country) => (
                    <CountryItem
                        key={country.name}
                        country={country}
                    />
                ))}
            </ul>
        </div>
    )
}
