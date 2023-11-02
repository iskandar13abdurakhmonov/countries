/* eslint-disable react/prop-types */

import styles from './Home.module.css'

export default function Home({ children }) {
  return (
    <div className={styles.home}>
      {children}
    </div>
  )
}
