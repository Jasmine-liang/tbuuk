"use client";

import { useEffect, useState } from "react";
import useStore from "@/stores/useStore";
import { useApi } from "@/hooks/useApi";
import { TonConnectButton, useTonConnectModal } from "@tonconnect/ui-react";
import { manifestUrl } from "@/configs/index";

// 动态导入 WebApp，确保它只在客户端加载
const WebApp =
  typeof window !== "undefined" ? require("@twa-dev/sdk").default : null;

const Page = () => {
  const { state, open, close }: any = useTonConnectModal();

  const userid = "99";
  const {} = useStore(); // 确认是否需要从 useStore 中解构一些状态
  const { createUser, userBalance, luckDraw } = useApi();
  const [isWebAppReady, setIsWebAppReady] = useState(false);

  const handleCreateUser = async () => {
    const result = await createUser({
      userid: String(userid),
      profile_photo: "",
    });
    console.log(result);
  };

  const handleUserBalance = async () => {
    const result = await userBalance({
      userid: String(userid),
      profile_photo: "",
    });
    console.log(result);
  };

  const handleLuckDraw = async () => {
    const result = await luckDraw({
      userid: String(userid),
      profile_photo: "",
      playmode: "1",
    });
    console.log(result);
  };

  return (
    <div>
      <div onClick={handleCreateUser}>创建用户</div>
      <div onClick={handleUserBalance}>用户余额</div>
      <div onClick={handleLuckDraw}>幸运抽奖</div>
      {/* <TonConnectButton /> */}
      <button onClick={open}>打开模态框</button>
      <button onClick={close}>关闭模态框</button>
    </div>
  );
};

export default Page;
