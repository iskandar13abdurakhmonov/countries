import styles from './Header.module.css'
import { HiOutlineMoon } from 'react-icons/hi'

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={`header__container ${styles.headerContainer}`}>
                <span className={styles.logo}>Where in the world?</span>
                <button className={styles.themeToggle}>
                    <HiOutlineMoon />
                    Dark Mode
                </button>
            </div>
        </header>
    )
}
