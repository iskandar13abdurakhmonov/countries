import styles from './Form.module.css'
import Select from 'react-select'
import { HiMagnifyingGlass } from 'react-icons/hi2'
import { useState } from 'react'

const options = [
    { value: 'africa', label: 'Africa' },
    { value: 'merica', label: 'America' },
    { value: 'asia', label: 'Asia' },
    { value: 'europe', label: 'Europe' },
    { value: 'oceania', label: 'Oceania' },
]

export default function Form() {
    const [selectedOption, setSelectedOption] = useState(null)

    return (
        <div className={styles.formContainer}>
            <form className={styles.form}>
                <div className={styles.inputBox}>
                    <HiMagnifyingGlass />
                    <input
                        type="text"
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
