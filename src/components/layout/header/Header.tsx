import React from "react";
import styles from './Header.module.css';
import Logo from '../../../image/logo.png'
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
    return(
        <header className={styles.header}>
            <div>
                <NavLink to='/' className={styles.logo}>
                    <img src={Logo} alt="logo" id={styles["logo"]}  />
                </NavLink>
            </div>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" className={styles.link}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/service" className={styles.link}>
                            Serviços
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/scheduling" className={styles.link}>
                            Agendamento
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;