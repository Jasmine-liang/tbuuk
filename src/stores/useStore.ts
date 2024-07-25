import { create } from 'zustand';

// 定义状态接口
interface State {
    user: any;
    setUser: (value: any) => void;
    showPage: { [key: string]: boolean };
    setShowPage: (key: string, value: boolean) => void;
    userBalance: any;
    setUserBalance: (value: any) => void;
    luckDraw: any;
    setLuckDraw: (value: any) => void;
    buyCard: any;
    setBuyCard: (value: any) => void;
    createUser: any;
    setCreateUser: (value: any) => void;
}

// 创建 Zustand 存储
const useStore = create<State>((set) => ({
    user: {
        id: '22'
    },
    setUser: (value: any) => set((state) => ({ user: value })),
    luckDraw: {},
    setLuckDraw: (value: any) => set((state) => ({ luckDraw: value })),
    buyCard: {},
    setBuyCard: (value: any) => set((state) => ({ buyCard: value })),
    createUser: {},
    setCreateUser: (value: any) => set((state) => ({ createUser: value })),
    showPage: {},
    setShowPage: (key: string, value: boolean) => set((state) => ({ showPage: { ...state.showPage, [key]: value } })),
    userBalance: {},
    setUserBalance: (value: any) => set((state) => ({ userBalance: value })),
}));

export default useStore;