import React from 'react'
import styles from './Skeleton.module.css'

export default function Skeleton() {
    return (
        <div className={styles.skeletonBlog}>
            <header>
                <div className={styles.skeletonAvatar}></div>

                <div className={styles.skeletonAuthor}></div>
            </header>

            <main className={styles.skeletonImage}></main>

            <footer className={styles.skeletonFooter}></footer>
        </div>
    )
}
