import React, { memo, useState } from "react";
import Modal from "react-modal";
import { AcademyBox, BoostModalStyles } from "./Vault.styles";
import img_join_convo from "assets/join_convo.png";
import VaultReadme from "components/VaultReadme/VaultReadme";

function Help() {
  const [boostInfoModalOpen, setBoostInfoModalOpen] = useState(false);
  return (
    <>
      <div className="box-container">
        <AcademyBox>
          <div className="title">First time in Vaults?</div>
          <div className="join">
            <div className="join-text">Learn how ZZZ works with Vaults</div>
            <img src={img_join_convo} alt="zzz-join_convo" />
          </div>
          <button
            className="join-button"
            onClick={() => setBoostInfoModalOpen(true)}
          >
            Readme
          </button>
        </AcademyBox>
      </div>
      <Modal
        isOpen={boostInfoModalOpen}
        onRequestClose={() => setBoostInfoModalOpen(false)}
        contentLabel="Boosting info"
        style={BoostModalStyles}
      >
        <VaultReadme />
      </Modal>
    </>
  );
}

// Never rerender
export default memo(Help, () => true);
