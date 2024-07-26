import { create } from 'zustand';

// 定义状态接口
interface State {
    cardFree: number;
    addCardFree: () => void;
    showPage: { [key: string]: boolean };
    setShowPage: (key: string, value: boolean) => void;
    balance: number;
    setBalance: (value: any) => void;
    userId: string;
    setUser_id: (value: any) => void;
    cardCount: number;
    setCardCount: (value: number) => void;
    isGame: boolean,
    setIsGame: (value: boolean) => void;
    indexGame: number;
    setIndexGame: (value: number) => void;
}

// 创建 Zustand 存储
const useStore = create<State>((set) => ({
    cardFree: 0,
    addCardFree: () => set((state) => {
        if (state.cardFree < 5) {
            state.setCardCount(state.cardCount + 1);
            return { cardFree: state.cardFree + 1 };
        }
        return { cardFree: state.cardFree }
    }),
    indexGame: 0,
    setIndexGame: (value: any) => set((state) => ({ indexGame: value })),
    isGame: true,
    setIsGame: (value: boolean) => set((state) => ({ isGame: value })),
    userId: "22",
    setUser_id: (value: any) => set((state) => ({ userId: value })),
    cardCount: 1,
    setCardCount: (value: number) => set((state) => ({ cardCount: value })),
    showPage: {},
    setShowPage: (key: string, value: boolean) => set((state) => ({ showPage: { ...state.showPage, [key]: value } })),
    balance: 150,
    setBalance: (value: number) => set((state) => ({ balance: value })),
}));

export default useStore;