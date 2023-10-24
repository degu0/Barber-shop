import React, { useEffect, useState } from 'react';
import styles from './Scheduling.module.css';

import { NavLink } from "react-router-dom";
import { Scheduling, getScheduling } from '../../service/schedulingService';

const pageScheduling: React.FC = () => {

    // const navigate = useNavigate();

    const [agendamentos, setAgendamentos] = useState<Scheduling[]>([]);

    const fetchScheduling = async () => {
        try {
            const agendamentos = await getScheduling();
            setAgendamentos(agendamentos);
        } catch (error) {
            console.log('Erro ao buscar agendamentos', error);
        }
    };

    useEffect(() => {
        fetchScheduling();
    }, []);

    // const handleEdit = async (agendamentos: Scheduling) => {
    //     navigate('/scheduling/cadastre', { state: agendamentos });
    // };

    // const handleDelete = async (id: number) => {
    //     try {
    //         await deleteScheduling(id);
    //         fetchScheduling();
    //         alert('Agendamento excluida com sucesso!');
    //     } catch (error) {
    //         console.log('Erro ao excluir o agendamento', error);
    //         alert('Ocorreu um erro ao excluir o agendamento');
    //     }
    // }

    return (
        <div className={styles.scheduling}>
            <div className={styles.title_scheduling}>
                <h1>AGENDAMENTO</h1>
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
                                <td>José</td>
                                <td>(81) 99555-1234</td>
                                <td>16/10/2023</td>
                                <td>15:00</td>
                                <td>Corte de cabelo</td>
                            </tr>
                            {agendamentos.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.nome}</td>
                                    <td>{item.numero}</td>
                                    <td>{item.data}</td>
                                    <td>{item.hora}</td>
                                    <td>{item.servico}</td>
                                </tr>
                            ))}
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

export default pageScheduling;