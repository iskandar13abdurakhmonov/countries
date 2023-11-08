import styles from './Footer.module.css'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className={styles.attribution}>
                    Challenge by{' '}
                    <a
                        href="https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca/hub"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Frontend Mentor
                    </a>
                    . Coded by{' '}
                    <a href="https://www.frontendmentor.io/profile/iskandar13abdurakhmonov">
                        eescan
                    </a>
                    .
                </div>
            </div>
        </footer>
    )
}
