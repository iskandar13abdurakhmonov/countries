/* eslint-disable react/prop-types */
import CountryItem from './CountryItem'
import styles from './CountryList.module.css'

export default function CountryList({ filteredCountries, darkMode }) {

    const newCountries = filteredCountries.slice(0, 8)

    return (
        <div className={styles.countryListContainer}>
            <ul className={styles.countryList}>
                {newCountries.map((country) => (
                    <CountryItem 
                        darkMode={darkMode}
                        key={country.name.common}
                        country={country}
                    />
                ))}
            </ul>
        </div>
    )
}
