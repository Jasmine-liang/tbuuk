"use client";

import { useEffect, useState } from "react";
import useStore from "@/stores/useStore";
import { useApi } from "@/hooks/useApi";
import { handleClientScriptLoad } from "next/script";

// 动态导入 WebApp，确保它只在客户端加载
const WebApp =
  typeof window !== "undefined" ? require("@twa-dev/sdk").default : null;

const Page = () => {
  const userid = "99";
  const {
    createUser: useStoreCreateUser,
    userBalance: useStoreUserBalance,
    luckDraw: useStoreLuckDraw,
    setCreateUser,
    setUserBalance,
    setLuckDraw,
  } = useStore();
  const {
    createUser: useApiCreateUser,
    userBalance: useApiUserBalance,
    luckDraw: useApiLuckDraw,
  } = useApi();
  const [isWebAppReady, setIsWebAppReady] = useState(false);

  const handleCreateUser = async () => {
    const result = await useApiCreateUser({
      userid: String(userid),
      profile_photo: "",
    });
    console.log(result);
    setCreateUser(result);
  };

  const handleUserBalance = async () => {
    const result = await useApiUserBalance({
      userid: String(userid),
      profile_photo: "",
    });
    console.log(result);
    setUserBalance(result);
  };

  const handleLuckDraw = async () => {
    const result = await useApiLuckDraw({
      userid: String(userid),
      profile_photo: "",
      playmode: "1",
    });
    console.log(result);
    setLuckDraw(result);
  };

  return (
    <>
      <div onClick={handleCreateUser}>createUser</div>
      <div onClick={handleUserBalance}>userBalance</div>
      <div onClick={handleLuckDraw}>luckDraw</div>
    </>
  );
};

export default Page;
