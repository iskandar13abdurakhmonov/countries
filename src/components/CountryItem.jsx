import styles from './CountryItem.module.css'

export default function CountryItem() {
    return (
        <li className={styles.countryItem}>
            <div className={styles.imageBox}>
                <img
                    className={styles.countryImage}
                    src="https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1280px-Flag_of_Germany.svg.png"
                    alt="germany flag"
                />
            </div>
            <div className={styles.textBox}>
                <h2 className={styles.countryName}>Germany</h2>
                <div className={styles.infos}>
                    <span className={styles.title}>
                        Population:
                        <span className={styles.descr}>81,770,900</span>
                    </span>
                    <span className={styles.title}>
                        Region: <span className={styles.descr}>Europe</span>
                    </span>
                    <span className={styles.title}>
                        Capital: <span className={styles.descr}>Berlin</span>
                    </span>
                </div>
            </div>
        </li>
    )
}
