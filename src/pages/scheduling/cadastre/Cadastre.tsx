import React from 'react';
import styles from './Cadastre.module.css';
import { NavLink } from 'react-router-dom';


const Cadastre: React.FC = () => {
    return (
        <div className={styles.cadastre}>
            <div className={styles.title_cadastre}>
                <h1>Agendamento</h1>
                <hr />
            </div>
            <div className={styles.forms}>
                <div className={styles.inputGroup}>
                    <label htmlFor="name">Nome:</label>
                    <input type='text' name='name' required className={styles.input} />
                </div>
                <div className={styles.inputGroup}>

                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="number">Número:</label>
                    <input type='text' name='number' required className={styles.input} />
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="data">Data:</label>
                    <input type='date' name='data' required className={styles.input} />
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="hour">Horário:</label>
                    <input type='time' name='hour' required className={styles.input} />
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="service">Serviço:</label>
                    <input type='text' name='service' required className={styles.input} />
                </div>
                <NavLink to='/scheduling' className={styles.button}>
                    Scheduling
                </NavLink>
            </div>
        </div>
    )
}

export default Cadastre;