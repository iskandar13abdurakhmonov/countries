/* eslint-disable react/prop-types */
import styles from './Header.module.css'
import { HiOutlineMoon } from 'react-icons/hi'

export default function Header({ darkMode, onThemeChange }) {
    return (
        <header
            className={`${styles.header} ${
                darkMode ? styles.headerLight : styles.headerDark
            }`}
        >
            <div className={`header__container ${styles.headerContainer}`}>
                <span className={`${styles.logo} ${darkMode ? styles.logoLight : styles.logoDark}`}>Where in the world?</span>
                <button
                    className={`${styles.themeToggle} ${darkMode ? styles.themeToggleLight : styles.themeToggleDark}`}
                    onClick={() => onThemeChange()}
                >
                    <HiOutlineMoon
                        size={21}
                        className={styles.toggleIcon}
                    />
                    Dark Mode
                </button>
            </div>
        </header>
    )
}
