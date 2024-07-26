
// 地址中间省略
export function formatAddress(str: string | undefined, s0: number = 6, s1: number = 4) {
    if (!str) return
    if (str.length <= 10) {
        return str;
    }
    const start = str.slice(0, s0);
    const end = str.slice(-s1);
    return `${start}...${end}`;
}
