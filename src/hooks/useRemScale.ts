"use client";

import { useState, useEffect } from 'react';

function useRemScale(uiSize: number = 395): number {
    const base = 1;
    const [scale, setScale] = useState<number>(base);

    const updateScale = () => {
        const docEl = document.documentElement;
        const clientWidth = docEl.clientWidth;
        setScale(clientWidth / uiSize * base);
    };

    useEffect(() => {
        updateScale(); // Initial calculation
        if (typeof window !== "undefined") {
            window.addEventListener('resize', updateScale);
            return () => {
                window.removeEventListener('resize', updateScale);
            }
        }
    }, [uiSize]);

    return scale;
}

export default useRemScale;