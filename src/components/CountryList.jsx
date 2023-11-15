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
                {isLoading
                    ? [1, 2, 3, 4, 5, 6, 7, 8].map((n) => <Skeleton key={n} />)
                    : newCountries.map((country) => (
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
