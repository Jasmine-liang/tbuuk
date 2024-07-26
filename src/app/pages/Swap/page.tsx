"use client"
import Image from "@/components/Image"
import styles from "./index.module.scss"
import Navbar from "components/Navbar"
import SwapBtn from "@/components/SwapBtn"
import Tabbar from "@/components/Tabbar"
import Pop from "./Pop"
import Success from "./Success"
import { useState } from "react"
const Swap = () => {
    const [form, setForm] = useState({
        from: "0",
        to: "0"
    })
    const [setp, setSetp] = useState(0)
    return <>
        <div className={styles.swap}>
            <Navbar title="Swap" />
            <div className={styles.Connect}>
                <Image className={styles.icon} src="image/icon124.png" />
                Connect Wallet
            </div>


            <form className={styles.form}>
                <svg className={styles.jt} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M6.9999 20.8V11.2M6.9999 11.2L3.3999 14.8M6.9999 11.2L10.5999 14.8" stroke={setp === 0?"black":"#FF7413"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16.9999 3.20005V12.8M16.9999 12.8L13.3999 9.20005M16.9999 12.8L20.5999 9.20005" stroke={setp === 0?"black":"#FF7413"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <label className={styles.item}>
                    <div className={styles.label}>
                        <span className={styles.name}>From</span>
                        <span className={styles.right}>Balance: <span>654</span> USDT</span>
                    </div>
                    <div className={styles.iptBox}>
                        <input onInput={({ target: { value } }) => setForm({
                            ...form,
                            from: value
                        })} value={form.from} name="from" />
                        <div className={styles.user}>
                            <Image src="image/icon126.png" />
                            USDT
                            <Image src="image/icon128.png" />
                        </div>
                    </div>
                </label>
                <label className={styles.item}>
                    <div className={styles.label}>
                        <span className={styles.name}>to</span>
                        <span className={styles.right}>Balance: <span>654</span> USDT</span>
                    </div>
                    <div className={styles.iptBox}>
                        <input onInput={({ target: { value } }) => setForm({
                            ...form,
                            to: value
                        })} value={form.to} name="from" />
                        <div className={styles.user}>
                            <Image src="image/icon127.png" />
                            points
                            <Image src="image/icon128.png" />
                        </div>
                    </div>
                </label>
                <div className={styles.price}>
                    <span className={styles.lab}>Price:</span>
                    <span className={styles.val}>0.05447756 TON per 1 TGR</span>
                </div>
                <div className={styles.btnBox}>
                    {
                        (() => {
                            switch (setp) {
                                case 0:
                                    return <SwapBtn onClick={() => {
                                        setSetp(setp + 1)
                                    }} text="Connect Wallet" />
                                case 1:
                                    return <SwapBtn onClick={() => {
                                        setSetp(setp + 1)
                                    }} disabled text="swap" />
                                case 2:
                                    return <SwapBtn onClick={() => {
                                        setSetp(setp + 1)
                                    }} disabled text="Insufficient balance" />
                                case 3:
                                    return <SwapBtn onClick={() => {
                                        setSetp(setp + 1)
                                    }} text="swap" />
                                case 4:
                                    return <div onClick={() => {
                                        setSetp(setp + 1)
                                    }}>
                                        <Pop />
                                    </div>
                                case 5:
                                    return <div onClick={() => {
                                        setSetp(setp + 1)
                                    }}>
                                        <Success />
                                    </div> 
                                default:
                                    break;
                            }
                        })()
                    }

                    {/*  */}
                </div>
            </form>
            <Tabbar />
        </div>
    </>
}

export default Swap