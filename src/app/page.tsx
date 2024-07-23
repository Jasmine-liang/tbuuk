"use client";

import useStore from "@/stores/useStore";
import Page1 from "./pages/Page1/page";
import Page2 from "./pages/Page2/page";
import Pop1 from "./pages/Pop1/page";
import Pop2 from "./pages/Pop2/page";
import Pop3 from "./pages/Pop3/page";
import Pop4 from "./pages/Pop4/page";
import Pop5 from "./pages/Pop5/page";
import Pop6 from "./pages/Pop6/page";
import { TonConnectUIProvider } from "@tonconnect/ui-react";

const Page = () => {
  const { showPage } = useStore();
// this manifest is used temporarily for development purposes
const manifestUrl = 'https://raw.githubusercontent.com/ton-community/tutorials/main/03-client/test/public/tonconnect-manifest.json';
  return (
    <TonConnectUIProvider manifestUrl={manifestUrl} >

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
