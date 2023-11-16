import React from 'react'
import styles from '../components/CountryDetailSkeleton.module.css'

export default function CountryDetailSkeletion() {
    return (
        <div className={styles.skeletonBody}>
            <div className={styles.skeletonImageHolder}>
                <div className={styles.skeletonImage}></div>
            </div>
            <div className={styles.skeletionTextbox}>
                <div className={styles.skeletonTextCol}>
                    <p className={styles.skeletonText}></p>
                    <p className={styles.skeletonText}></p>
                    <p className={styles.skeletonText}></p>
                    <p className={styles.skeletonText}></p>
                    <p className={styles.skeletonText}></p>
                </div>
                <div className={styles.skeletonTextCol}>
                    <p className={styles.skeletonText}></p>
                    <p className={styles.skeletonText}></p>
                    <p className={styles.skeletonText}></p>
                    <p className={styles.skeletonText}></p>
                    <p className={styles.skeletonText}></p>
                </div>
            </div>
        </div>
    )
}
