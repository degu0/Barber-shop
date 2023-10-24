import React from 'react';

import * as Yup from 'yup';

import styles from './Cadastre.module.css';


import Form from '../../../components/forms/form/Form';



import { useLocation, useNavigate } from 'react-router-dom';
import { Scheduling, createOrUpdateScheduling } from '../../../service/schedulingService';
import Input from '../../../components/forms/input/Input';
import Select from '../../../components/forms/select/Select';


const Cadastre: React.FC = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const agendamento = location.state as Scheduling;

    const initialValues: Scheduling = {
        id: 0,
        nome: '',
        numero: '',
        data: '',
        hora: '',
        servico: '',
    };

    const validationSchema = Yup.object().shape({
        nome: Yup.string().required('Campo obrigatório'),
        numero: Yup.string().required('Campo obrigatório'),
        data: Yup.string().required('Campo obrigatório'),
        hora: Yup.string().required('Campo obrigatório'),
        servico: Yup.string().required('Campo obrigatório'),
    });

    const onSubmit = async (values: Scheduling, { resetForm }: {
        resetForm: () => void
    }) => {
        try {
            createOrUpdateScheduling(values);
            console.log(values);
            resetForm();
            navigate('/scheduling');
            alert('Formulario enviado com sucesso!');
        } catch (error) {
            console.log(error);
            alert('Ocorreu um erro ao enviar o formulario')
        }
    };


    return (
        <div className={styles.cadastre}>
            <div className={styles.title_cadastre}>
                <h1>AGENDAMENTO</h1>
                <hr />
            </div>
            <Form
                initialValues={agendamento || initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {({ errors, touched }) => (
                    <>
                        <Input
                            label='Nome'
                            name='nome'
                            errors={errors.nome}
                            touched={touched.nome}
                        />
                        <Input
                            label='Numero do Telefone'
                            name='numero'
                            errors={errors.numero}
                            touched={touched.numero}
                        />
                        <Input
                            label='Data'
                            name='data'
                            type='date'
                            errors={errors.data}
                            touched={touched.data}
                        />
                        <Select
                            label='Hora'
                            name='hora'
                            options={[
                                { value: '8:00', label: '8:00' },
                                { value: '9:00', label: '9:00' },
                                { value: '10:00', label: '10:00' },
                                { value: '11:00', label: '11:00' },
                                { value: '13:00', label: '13:00' },
                                { value: '14:00', label: '14:00' },
                                { value: '15:00', label: '15:00' },
                                { value: '16:00', label: '16:00' },
                                { value: '17:00', label: '17:00' },
                            ]}
                            errors={errors.servico}
                            touched={errors.servico}
                        />
                        <Select
                            label='Serviço'
                            name='servico'
                            options={[
                                { value: 'corte_cabelo', label: 'Corte de Cabelo' },
                                { value: 'penteado', label: 'Penteado' },
                                { value: 'mascara', label: 'Mascara' },
                                { value: 'barba', label: 'Faz a barba' },
                            ]}
                            errors={errors.servico}
                            touched={errors.servico}
                        />

                        <button type='submit' className={styles.button}>Agendar</button>
                    </>
                )}
            </Form>


        </div>
    )
}

export default Cadastre;