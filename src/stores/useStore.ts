import { create } from 'zustand';

// 定义状态接口
interface State {
    showPage1: boolean;
    setShowPage1: (showPage1: boolean) => void;
    showPage2: boolean;
    setShowPage2: (showPage2: boolean) => void;
    showPop1: boolean;
    setShowPop1: (showPop1: boolean) => void;
    showPop2: boolean;
    setShowPop2: (showPop2: boolean) => void;
    showPop3: boolean;
    setShowPop3: (showPop3: boolean) => void;
    showPop4: boolean;
    setShowPop4: (showPop4: boolean) => void;
    showPop5: boolean;
    setShowPop5: (showPop5: boolean) => void;
    showPop6: boolean;
    setShowPop6: (showPop6: boolean) => void;

    showPage: { [key: string]: boolean };
    setShowPage: (key: string, value: boolean) => void;
}

// 创建 Zustand 存储
const useStore = create<State>((set) => ({
    showPage: {},
    setShowPage: (key: string, value: boolean) => set((state) => ({ showPage: { ...state.showPage, [key]: value } })),

    showPage1: false,
    setShowPage1: (showPage1: boolean) => set(() => ({ showPage1: showPage1 })),
    showPage2: false,
    setShowPage2: (showPage2: boolean) => set(() => ({ showPage2: showPage2 })),
    showPop1: false,
    setShowPop1: (showPop1: boolean) => set(() => ({ showPop1: showPop1 })),
    showPop2: false,
    setShowPop2: (showPop2: boolean) => set(() => ({ showPop2: showPop2 })),
    showPop3: false,
    setShowPop3: (showPop3: boolean) => set(() => ({ showPop3: showPop3 })),
    showPop4: false,
    setShowPop4: (showPop4: boolean) => set(() => ({ showPop4: showPop4 })),
    showPop5: false,
    setShowPop5: (showPop5: boolean) => set(() => ({ showPop5: showPop5 })),
    showPop6: false,
    setShowPop6: (showPop6: boolean) => set(() => ({ showPop6: showPop6 })),
}));

export default useStore;