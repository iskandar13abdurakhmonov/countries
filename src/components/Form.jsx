/* eslint-disable react/prop-types */
import styles from './Form.module.css'
import Select from 'react-select'
import { HiMagnifyingGlass } from 'react-icons/hi2'
import { useEffect, useState } from 'react'

const options = [
    { value: 'africa', label: 'Africa' },
    { value: 'merica', label: 'America' },
    { value: 'asia', label: 'Asia' },
    { value: 'europe', label: 'Europe' },
    { value: 'oceania', label: 'Oceania' },
]

export default function Form({
    query,
    setQuery,
    setFilteredCountries,
    countries,
    setNoResults,
}) {
    const [selectedOption, setSelectedOption] = useState(null)

    

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

            console.log(searched)
        }

        Search(query)
    }, [query, countries])

    return (
        <div className={styles.formContainer}>
            <form className={styles.form}>
                <div className={styles.inputBox}>
                    <HiMagnifyingGlass />
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className={styles.input}
                        placeholder="Search for a country..."
                    />
                </div>
            </form>
            <Select
                styles={{
                    control: (baseStyles) => ({
                        ...baseStyles,
                        borderColor: 'transparent',
                    }),
                }}
                placeholder={'Filter by Region'}
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
            />
        </div>
    )
}
