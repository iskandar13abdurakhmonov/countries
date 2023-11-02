/* eslint-disable react/prop-types */
import CountryItem from './CountryItem'
import styles from './CountryList.module.css'

export default function CountryList({ countries }) {

    

  return (
    <div className={styles.countryListContainer}>
        <ul className={styles.countryList}>
            <CountryItem/>
        </ul>
    </div>
  )
}
