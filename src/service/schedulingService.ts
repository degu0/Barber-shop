import api from './api';

export interface Scheduling {
    id: number,
    nome: string,
    numero: string,
    data: string,
    hora: string,
    servico: string
}


export const createScheduling = async (agendamento: Scheduling) => {
    const response = await api.post('/scheduling/cadastre', agendamento);
    return response.data;
}

export const getScheduling = async () => {
    const response = await api.get('/scheduling');
    return response.data;
}

export const getSchedulingId = async (id: number) => {
    const response = await api.get(`/scheduling/${id}`);
    return response.data;
}

export const updateScheduling = async (agendamento: Scheduling) => {
    const response = await api.put(`/scheduling/${agendamento.id}`);
    return response.data;
}

export const deleteScheduling = async (id: number) => {
    const response = await api.delete(`/scheduling/${id}`);
    return response.data;
}

export const createOrUpdateScheduling = async (agendamento: Scheduling) => {
    if (agendamento.id) {
        return await updateScheduling(agendamento);
    } else {
        return await createScheduling(agendamento);
    }
}

