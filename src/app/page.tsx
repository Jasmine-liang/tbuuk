"use client";

import { useEffect, useState } from "react";
import Page1 from "./pages/Page1/page";
import Page2 from "./pages/Page2/page";
import Pop1 from "./pages/Pop1/page";
import Pop2 from "./pages/Pop2/page";
import Pop3 from "./pages/Pop3/page";
import Pop4 from "./pages/Pop4/page";
import Pop5 from "./pages/Pop5/page";
import Pop6 from "./pages/Pop6/page";
import Swap from "./pages/Swap/page";
import useStore from "@/stores/useStore";
import { useApi } from "@/hooks/useApi";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import { manifestUrl } from "@/configs/index";
import WebApp from '@twa-dev/sdk';


// 动态导入 WebApp，确保它只在客户端加载
// const WebApp =
//   typeof window !== "undefined" ? require("@twa-dev/sdk").default : null;

const Page = () => {
  const {
    showPage,
    setUserId,
    setBalance,
    cardFree,
    isRunning,
    addCardFree,
    startCountdown,
    resetCountdown,
  } = useStore();
  const { userBalance, createUser } = useApi();
  const [isWebAppReady, setIsWebAppReady] = useState(false);

  const tick = useStore((state) => state.tick);
  useEffect(() => {
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        tick(() => {
          console.log("倒计时结束");
          addCardFree();
        });
      }, 1000);
    } else if (!isRunning && interval) {
      clearInterval(interval);
    }
    return () => clearInterval(interval || "");
  }, [isRunning, tick]);

  const fetchBalance = async (id: any) => {
    try {
      const balance = await userBalance({
        userid: String(id),
        profile_photo: "",
      });
      setBalance(balance);
    } catch (error) {
      const user = await createUser({
        userid: String(id),
        profile_photo: "",
      });
      if (user) {
        const res = await userBalance({
          userid: String(id),
          profile_photo: "",
        });
        setBalance(res.balance);
      }
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined" && WebApp) {
      const initWebApp = async () => {
        try {
          await WebApp.ready();
          setIsWebAppReady(true);

          const user = WebApp.initDataUnsafe.user;
          if (user) {
            setUserId(user.id);
            fetchBalance(user.id);
          }
        } catch (error) {
          console.error("Failed to initialize the Telegram SDK", error);
        }
      };

      initWebApp();
      console.log(1111);
      startCountdown();
    }
  }, []);

  useEffect(() => {
    if (isWebAppReady && WebApp) {
      WebApp.expand();
    }
  }, [isWebAppReady]);

  return (
    <TonConnectUIProvider manifestUrl={manifestUrl}>
      <Page1 />
      {showPage["Page2"] && <Page2 />}
      {showPage["Pop2"] && <Pop2 />}
      {showPage["Pop3"] && <Pop3 />}
      {showPage["Pop1"] && <Pop1 />}
      {showPage["Pop5"] && <Pop5 />}
      {showPage["Pop6"] && <Pop6 />}
      {showPage["Pop4"] && <Pop4 />}
      {showPage["Swap"] && <Swap />}
    </TonConnectUIProvider>
  );
};

export default Page;
