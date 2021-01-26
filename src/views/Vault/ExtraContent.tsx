import Layout from "components/Layout/Layout";
import React, { useState } from "react";
import { UpArrow, DownArrow } from "svg/GeneralIcons";
import Help from "./Help";
import { ExtraContainer, FuckThisBox, HelpBox } from "./Vault.styles";
import { observer } from "mobx-react";

function ExtraContent() {
  let initialShowHelpValue = true;
  const cachedValue = localStorage.getItem("zzz-pools-showhelp");
  if (cachedValue !== null) {
    initialShowHelpValue = JSON.parse(cachedValue);
  }
  const [showHelp, setShowHelp] = useState(initialShowHelpValue);

  const toggleHelp = (val: boolean) => {
    localStorage.setItem("zzz-pools-showhelp", JSON.stringify(val));
    setShowHelp(val);
  };
  return (
    <Layout.ExtraContent view="Pools" color="#f8f9f9">
      <ExtraContainer>
        <div className="box-container">
          <FuckThisBox color="white">
            <h3>Total value locked</h3>
            <h2 className="tvl-usd">TBA</h2>
          </FuckThisBox>
        </div>
        <div onClick={() => toggleHelp(!showHelp)} className="help-box">
          <HelpBox>
            <h3>{showHelp ? "Hide help" : "Show help"}</h3>
            {showHelp ? <UpArrow /> : <DownArrow />}
          </HelpBox>
        </div>
        {showHelp && <Help />}
      </ExtraContainer>
    </Layout.ExtraContent>
  );
}

export default observer(ExtraContent);
