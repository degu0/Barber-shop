import React from "react";
import styles from './Footer.module.css';

import logo from '../../../image/logo.png';

import { BsLinkedin, BsGithub } from 'react-icons/bs';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.informations}>
                <div className={styles.about}>
                    <a href="/">
                        <img src={logo} alt="logo" id={styles["logo"]} />
                    </a>
                    <h1>BARBA & CO</h1>
                </div>
                <div className={styles.working_hours}>
                    <h2>TRABALHO EM HORAS</h2>
                    <hr />
                    <div className={styles.week}>
                        <div id={styles["date"]}>
                            <ul>
                                <li>MON</li>
                                <li>TUE</li>
                                <li>WED</li>
                                <li>THU</li>
                                <li>FRI</li>
                                <li>SAT</li>
                                <li>SUN</li>
                            </ul>
                        </div>
                        <div id={styles["hours"]}>
                            <ul>
                                <li>08:00 - 17:00</li>
                                <li>08:00 - 17:00</li>
                                <li>08:00 - 17:00</li>
                                <li>08:00 - 17:00</li>
                                <li>08:00 - 17:00</li>
                                <li>08:00 - 12:00</li>
                                <li>CLOSED</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={styles.links}>
                    <h2>SITES LINKS</h2>
                    <hr />
                    <div className={styles.place}>
                        <ul>
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <li>
                                <a href="/service">Serviços</a>
                            </li>
                            <li>
                                <a href="/scheduling">Agendamento</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles.redes}>
                <a href="https://github.com/degu0" target="_blank"><BsGithub /></a>
                <a href="https://www.linkedin.com/in/deyvid-gustavo-0642a2235/" target="_blank"><BsLinkedin /></a>
                <p className={styles.copy_right}>&copy; {new Date().getFullYear()} - BARBA & CO</p>
            </div>
        </footer>
    )
}

export default Footer;