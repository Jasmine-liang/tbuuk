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
    setUserId: (value: any) => void;
    cardCount: number;
    setCardCount: (value: number) => void;
    isGame: boolean;
    setIsGame: (value: boolean) => void;
    indexGame: number;
    setIndexGame: (value: number) => void;
    timer: number;
    isRunning: boolean;
    startCountdown: () => void;
    stopCountdown: () => void;
    resetCountdown: () => void;
    tick: (onComplete: () => void) => void;
    formattedTime: () => string;
}

// 创建 Zustand 存储
const useStore = create<State>((set, get) => ({
    cardFree: 0,
    addCardFree: () => set((state) => {
        if (state.cardFree < 5) {
            state.setCardCount(state.cardCount + 1);
            return { cardFree: state.cardFree + 1 };
        }
        return { cardFree: state.cardFree };
    }),
    indexGame: 0,
    setIndexGame: (value: any) => set((state) => ({ indexGame: value })),
    isGame: true,
    setIsGame: (value: boolean) => set((state) => ({ isGame: value })),
    userId: "22",
    setUserId: (value: any) => set((state) => ({ userId: value })),
    cardCount: 1,
    setCardCount: (value: number) => set((state) => ({ cardCount: value })),
    showPage: {},
    setShowPage: (key: string, value: boolean) => set((state) => ({ showPage: { ...state.showPage, [key]: value } })),
    balance: 150,
    setBalance: (value: number) => set((state) => ({ balance: value })),
    timer: 10,
    isRunning: false,
    startCountdown: () => set({ isRunning: true }),
    stopCountdown: () => set({ isRunning: false }),
    resetCountdown: () => set({ timer: 10, isRunning: false }),
    tick: (onComplete) => {
        const { timer, isRunning } = get();
        if (isRunning && timer > 0) {
            set({ timer: timer - 1 });
        } else if (timer === 0) {
            set({ isRunning: false });
            onComplete();
        }
    },
    formattedTime: () => {
        const { timer } = get();
        const minutes = Math.floor(timer / 60);
        const seconds = timer % 60;
        return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    },
}));

export default useStore;