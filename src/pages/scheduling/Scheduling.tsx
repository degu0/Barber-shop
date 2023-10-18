import React from 'react';
import styles from './Scheduling.module.css';

const Scheduling: React.FC = () => {
    return (
        <div className={styles.scheduling}>
            <div className={styles.title}>
                <h1>TITLE OF SCHEDULING FOR BARBER SHOP</h1>
                <hr />
            </div>
            <div className={styles.dados}>
                <div className={styles.example_place}></div>
            </div>
            <div className={styles.plus}>
                <button>Scheduling</button>
            </div>
        </div>
    )
}

export default Scheduling;