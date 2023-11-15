/* eslint-disable react/prop-types */
import { useState } from 'react'
import CountryItem from './CountryItem'
import styles from './CountryList.module.css'
import Skeleton from './Skeleton'

export default function CountryList({
    filteredCountries,
    darkMode,
    isLoading,
}) {
    const newCountries = filteredCountries.slice(0, 8)

    return (
        <div className={styles.countryListContainer}>
            <ul className={styles.countryList}>
               
                        <Skeleton />
                {!isLoading &&
                    newCountries.map((country) => (
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
