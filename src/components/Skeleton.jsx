import React from 'react'
import styles from './Skeleton.module.css'

export default function Skeleton() {
    return (
        <div className={styles.skeletonBlog}>
            <main className={styles.skeletonImage}></main>

            <div className={styles.skeletonTextbox}>
                <p className={styles.skeletonText}></p>
                <p className={styles.skeletonText}></p>
                <p className={styles.skeletonText}></p>
                <p className={styles.skeletonText}></p>
                <p className={styles.skeletonText}></p>
            </div>
        </div>
    )
}
