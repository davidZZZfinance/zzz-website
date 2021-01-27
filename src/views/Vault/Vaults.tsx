import React, { useEffect } from "react";
import Layout from "components/Layout/Layout";
import { useWeb3React } from "@web3-react/core";
import Connectors from "components/WalletUnlock/WalletUnlock";
import VaultStore from "stores/vault";
import EthStore from "stores/eth";
import Loader from "react-loader-spinner";
import Vault from "components/Vault/Vault";
import { observer } from "mobx-react";
import VaultGlobal from "components/VaultGlobal/VaultGlobal";
import "./Vaults.scss";
import {
  Box,
  BuyButtonNAP,
  BuyButtons,
  BuyButtonZZZ,
  MarginForMenu,
  TransparentBox,
} from "./Vault.styles";
import ExtraContent from "./ExtraContent";

import fort from "assets/coffre-fort.svg";
import unismall from "assets/uniswap_100.webp";

function Vaults() {
  const { library, account } = useWeb3React();

  useEffect(() => {
    if (account) {
      (async () => {
        await EthStore.initialize(account, library);
        VaultStore.initialize();
      })();
    }
  }, [account, library]);

  if (!account)
    return (
      <Layout view="vaults" type="horizontal">
        <Layout.MainContent view="vaults">
          <MarginForMenu>
            <BuyButtons activePools={false}>
              <BuyButtonZZZ
                href="https://info.uniswap.org/pair/0x4b29ed4190d8387755510feee729fbc974152a0c"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={unismall} className="uni-logo" alt="uniswap" />
                Get ZZZ
              </BuyButtonZZZ>
              <BuyButtonNAP
                href="https://info.uniswap.org/pair/0x5c599e277c981d796dbf94c6e79ddac610d6052b"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={unismall} className="uni-logo" alt="uniswap" />
                Get NAP
              </BuyButtonNAP>
              <BuyButtonNAP
                href="https://info.uniswap.org/pair/0x19b3de48392778f8e6ef332fee002aa5e15fe41a"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={unismall} className="uni-logo" alt="uniswap" />
                <span>Get DREAM</span>
              </BuyButtonNAP>
            </BuyButtons>
            <Box>
              <h1>Welcome to the Vaults!</h1>
              <img src={fort} alt="fort" width="125" />
            </Box>
            <Box>
              <h2>To interact with the vaults please unlock your wallet </h2>
              <Connectors />
            </Box>
          </MarginForMenu>
        </Layout.MainContent>
        <ExtraContent />
      </Layout>
    );

  const { vaultAmount } = VaultStore;

  if (vaultAmount === 0)
    return (
      <Layout view="Compensation" type="vertical">
        <Layout.MainContent view="compensation" backgroundColor=" rgb(0, 0, 0)">
          <div
            className="vaults"
            style={{ display: "flex", justifyContent: "center", flex: 1 }}
          >
            <Loader type="Circles" width={150} height={150} color="white" />;
          </div>
        </Layout.MainContent>
      </Layout>
    );

  return (
    <Layout view="vaults" type="horizontal">
      <Layout.MainContent view="vaults">
        <MarginForMenu>
          <BuyButtons activePools={false}>
            <BuyButtonZZZ
              href="https://info.uniswap.org/pair/0x4b29ed4190d8387755510feee729fbc974152a0c"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={unismall} className="uni-logo" alt="uniswap" />
              Get ZZZ
            </BuyButtonZZZ>
            <BuyButtonNAP
              href="https://info.uniswap.org/pair/0x5c599e277c981d796dbf94c6e79ddac610d6052b"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={unismall} className="uni-logo" alt="uniswap" />
              Get NAP
            </BuyButtonNAP>
            <BuyButtonNAP
              href="https://info.uniswap.org/pair/0x19b3de48392778f8e6ef332fee002aa5e15fe41a"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={unismall} className="uni-logo" alt="uniswap" />
              <span>Get DREAM</span>
            </BuyButtonNAP>
          </BuyButtons>
          <TransparentBox>
            <VaultGlobal />
            {[...Array(vaultAmount).keys()].map((vaultId) => (
              <Vault vaultId={vaultId} key={`vault-${vaultId}`} />
            ))}
          </TransparentBox>
        </MarginForMenu>
      </Layout.MainContent>
      <ExtraContent />
    </Layout>
  );
}

export default observer(Vaults);
