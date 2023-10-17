import React from "react";
import styles from './Header.module.css';
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
    return(
        <header className={styles.header}>
            <div>
                <NavLink to='/' className={styles.logo}>
                    Logo
                </NavLink>
            </div>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/service">
                            Serviço
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/scheduling">
                            Agendamento
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;