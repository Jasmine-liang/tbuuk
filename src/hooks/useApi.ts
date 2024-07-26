import axios from 'axios';
import { useCallback } from 'react';

// 定义一个自定义钩子 useAxiosWithAuth
const useAxiosNoAuth = () => {
    const axiosNoAuth = axios.create({
        // baseURL: '/api/v1',
        baseURL: 'https://texts.mpaadao.xyz/api/v1',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    return { axiosNoAuth };
};


export const useApi = () => {
    const { axiosNoAuth } = useAxiosNoAuth();

    const createUser = useCallback(async (data: any) => {
        const response = await axiosNoAuth.post('/createUser', data);
        return response.data;
    }, [axiosNoAuth]);

    const userBalance = useCallback(async (data: any) => {
        const response = await axiosNoAuth.post('/userBalance', data);
        return response.data;
    }, [axiosNoAuth]);

    const luckDraw = useCallback(async (data: any) => {
        const response = await axiosNoAuth.post('/luckDraw', data);
        return response.data;
    }, [axiosNoAuth]);

    const buyCard = useCallback(async (data: any) => {
        const response = await axiosNoAuth.post('/buyCard', data);
        return response.data;
    }, [axiosNoAuth]);

    return {
        createUser,
        userBalance,
        luckDraw,
        buyCard
    };
};