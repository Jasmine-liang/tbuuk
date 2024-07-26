"use client";
import type React from "react";
import Trophy from "../Trophy";
import styles from "./index.module.scss";
import { useState, useEffect, useRef, LegacyRef } from "react";
const GamePageLayout = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) => {
  const [scale, setScale] = useState(1);
  const ref: LegacyRef<HTMLDivElement> | null = useRef(null);
  useEffect(() => {
    const resize = () => {
      if (ref.current)
        ref.current?.offsetHeight / innerHeight > 1
          ? setScale(innerHeight / ref.current?.offsetHeight)
          : setScale(1);
    };
    resize();
    if (typeof window !== "undefined") {
      window.addEventListener("resize", resize);
      return () => {
        window.removeEventListener("resize", resize);
      };
    }
  }, []);

  return (
    <>
      <div className={`page ${styles.page} ${className}`}>
        <div className={styles.bg}>
          <div></div>
        </div>
        <div
          ref={ref}
          style={{
            transform: `translate(-50%, -50%) scale(${scale})`,
          }}
          className={styles.content}
        >
          {children}
        </div>
        <Trophy />
      </div>
    </>
  );
};
export default GamePageLayout;
