import React from "react";
import styles from './Footer.module.css';

const Footer: React.FC = () => {
    return(
        <footer className={styles.footer}>
            <h1>BARBER SHOP</h1>
            <p className={styles.copy_right}>&copy; {new Date().getFullYear()} - BARBER SHOP</p>
        </footer>
    )
}

export default Footer;