/* eslint-disable react/prop-types */
import styles from './Form.module.css'
import { HiMagnifyingGlass } from 'react-icons/hi2'
import { useEffect, useState } from 'react'
import {
    MdOutlineKeyboardArrowDown,
    MdOutlineKeyboardArrowUp,
} from 'react-icons/md'

const regions = [
    { value: 'All', label: 'all' },
    { value: 'Africa', label: 'africa' },
    { value: 'Americas', label: 'americas' },
    { value: 'Asia', label: 'asia' },
    { value: 'Europe', label: 'europe' },
    { value: 'Oceania', label: 'oceania' },
]

export default function Form({
    query,
    setQuery,
    setFilteredCountries,
    countries,
    setNoResults,
    darkMode,
}) {
    const [activeRegion, setActiveRegion] = useState('Filter by Region')
    const [opened, setOpened] = useState(false)

    useEffect(() => {
        const Search = (query) => {
            const queryLower = query.toLowerCase()
            const queryTrimmed = queryLower.trim()
            const queryEmpty = queryTrimmed === ''
            if (queryTrimmed === '') {
                setFilteredCountries(countries)
                return
            }

            const searched = countries.filter((country) => {
                const name = country.name.common.toLowerCase()
                const capital = country.capital?.[0].toLowerCase()
                const region = country.region.toLowerCase()
                const subregion = country.subregion?.toLowerCase()
                const nativeName =
                    country.name.nativeName?.common?.toLowerCase()
                return (
                    name?.includes(queryLower) ||
                    capital?.includes(queryLower) ||
                    region?.includes(queryLower) ||
                    subregion?.includes(queryLower) ||
                    nativeName?.includes(queryLower)
                )
            })
            setFilteredCountries(searched)

            if (!queryEmpty && searched.length === 0) {
                setNoResults(true)
            } else {
                setNoResults(false)
            }
        }

        Search(query)
    }, [query, countries])

    const filterByRegion = (selected) => {
        regions.map((option) => {
            if (selected === 'All') {
                setActiveRegion('Filter by Region')
            } else if (option.value === selected) {
                setActiveRegion(option.value)
            }
            return option
        })

        const filteredRegion = countries.filter(
            (country) => country.region === selected
        )

        if (selected === 'All') {
            setFilteredCountries(countries)
        } else {
            setFilteredCountries(filteredRegion)
        }
        setOpened(false)
    }

    return (
        <div className={styles.formContainer}>
            <form
                className={`${styles.form} ${
                    darkMode ? styles.formLight : styles.formDark
                }`}
            >
                <div className={styles.inputBox}>
                    <HiMagnifyingGlass
                        className={`${
                            darkMode
                                ? styles.formIconLight
                                : styles.formIconDark
                        }`}
                    />
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className={`${styles.input} ${
                            darkMode ? styles.inputLight : styles.inputDark
                        }`}
                        placeholder="Search for a country..."
                    />
                </div>
            </form>
            <div
                className={styles.select}
                onClick={() => setOpened(!opened)}
            >
                <button
                    className={`${styles.selectDefault} ${
                        darkMode
                            ? styles.selectDefaultLight
                            : styles.selectDefaultDark
                    }`}
                >
                    <span
                        className={`${styles.selectText} ${
                            darkMode
                                ? styles.selectTextLight
                                : styles.selectTextDark
                        }`}
                    >
                        {activeRegion}
                    </span>
                    {opened ? (
                        <MdOutlineKeyboardArrowUp
                            className={`${
                                darkMode
                                    ? styles.dropdownIconLight
                                    : styles.dropdownIconDark
                            }`}
                        />
                    ) : (
                        <MdOutlineKeyboardArrowDown
                            className={`${
                                darkMode
                                    ? styles.dropdownIconLight
                                    : styles.dropdownIconDark
                            }`}
                        />
                    )}
                </button>
                {opened ? (
                    <ul
                        className={`${styles.optionList} ${
                            darkMode
                                ? styles.optionListLight
                                : styles.optionListDark
                        }`}
                    >
                        {regions.map((option) => (
                            <li
                                className={styles.optionItem}
                                key={option.value}
                            >
                                <button
                                    className={`${styles.optionItemButton} ${
                                        darkMode
                                            ? styles.optionItemButtonLight
                                            : styles.optionItemButtonDark
                                    }`}
                                    onClick={() => filterByRegion(option.value)}
                                >
                                    {option.value}
                                </button>
                            </li>
                        ))}
                    </ul>
                ) : (
                    ''
                )}
            </div>
        </div>
    )
}
