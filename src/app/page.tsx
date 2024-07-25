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
import useStore from "@/stores/useStore";
import { useApi } from "@/hooks/useApi";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import { manifestUrl } from "@/configs/index";

// 动态导入 WebApp，确保它只在客户端加载
const WebApp =
  typeof window !== "undefined" ? require("@twa-dev/sdk").default : null;

const Page = () => {
  const { showPage, setUser, setUserBalance } = useStore();
  const { userBalance, createUser } = useApi();
  const [isWebAppReady, setIsWebAppReady] = useState(false);

  const fetchBalance = async (userid: any) => {
    try {
      const balance = await userBalance({
        userid: String(userid),
        profile_photo: "",
      });
      setUserBalance(balance);
    } catch (error) {
      const user = await createUser({
        userid: String(userid),
        profile_photo: "",
      });
      if (user) {
        const balance = await userBalance({
          userid: String(userid),
          profile_photo: "",
        });
        setUserBalance(balance);
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
            setUser(user);
            fetchBalance(user.id);
          }
        } catch (error) {
          console.error("Failed to initialize the Telegram SDK", error);
        }
      };

      initWebApp();
    }
  }, []);

  useEffect(() => {
    if (isWebAppReady && WebApp) {
      WebApp.expand();
    }
  }, [isWebAppReady]);

  return (
    <TonConnectUIProvider manifestUrl={manifestUrl}>
      <div>
        <Page1 />
        {showPage["Page2"] && <Page2 />}
        {showPage["Pop1"] && <Pop1 />}
        {showPage["Pop2"] && <Pop2 />}
        {showPage["Pop3"] && <Pop3 />}
        {showPage["Pop4"] && <Pop4 />}
        {showPage["Pop5"] && <Pop5 />}
        {showPage["Pop6"] && <Pop6 />}
      </div>
    </TonConnectUIProvider>
  );
};

export default Page;
