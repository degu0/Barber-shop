import React from 'react';
import styles from './Scheduling.module.css';

import { NavLink } from "react-router-dom";

const Scheduling: React.FC = () => {
    return (
        <div className={styles.scheduling}>
            <div className={styles.title_scheduling}>
                <h1>TITLE OF SCHEDULING FOR BARBER SHOP</h1>
                <hr />
            </div>
            <div className={styles.dados}>
                <div className={styles.example_place}>
                    <table>
                        <thead>
                            <tr>
                                <th>Nome do Cliente</th>
                                <th>Número de Contato</th>
                                <th>Data</th>
                                <th>Horário</th>
                                <th>Serviço</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>JOSÉ</td>
                                <td>(81) 99779-6463</td>
                                <td>05/10/23</td>
                                <td>08:30</td>
                                <td>Cortar o cabelo</td>
                            </tr>
                            <tr>
                                <td>JOSÉ</td>
                                <td>(81) 99779-6463</td>
                                <td>05/10/23</td>
                                <td>08:30</td>
                                <td>Cortar o cabelo</td>
                            </tr>
                            <tr>
                                <td>JOSÉ</td>
                                <td>(81) 99779-6463</td>
                                <td>05/10/23</td>
                                <td>08:30</td>
                                <td>Cortar o cabelo</td>
                            </tr>
                            <tr>
                                <td>JOSÉ</td>
                                <td>(81) 99779-6463</td>
                                <td>05/10/23</td>
                                <td>08:30</td>
                                <td>Cortar o cabelo</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className={styles.plus}>
                <NavLink to='/scheduling/cadastre' className={styles.button}>
                    Scheduling
                </NavLink>
            </div>
        </div>
    )
}

export default Scheduling;