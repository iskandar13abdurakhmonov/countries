/* eslint-disable react/prop-types */
import CountryItem from './CountryItem'
import styles from './CountryList.module.css'

export default function CountryList({ filteredCountries }) {

    const newCountries = filteredCountries.slice(0, 8)

    return (
        <div className={styles.countryListContainer}>
            <ul className={styles.countryList}>
                {newCountries.map((country) => (
                    <CountryItem
                        key={country.name.common}
                        country={country}
                    />
                ))}
            </ul>
        </div>
    )
}
