import React from "react";
import Button from "../../../../../components/Button";

import Modal from "../../../../../components/Modal";

import Conun from "../../../../../assets/icons/conun-white.svg";
import Ethereum from "../../../../../assets/icons/ethereum.svg";

import { Transaction } from "../Transaction";

import styles from "./ConfirmModal.module.scss";

const ETH = "eth";

interface ConfirmModal {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  transaction: Transaction | null;
}

function ConfirmModal({
  isOpen,
  onClose,
  onSuccess,
  transaction,
}: ConfirmModal) {
  const onConfirm = () => {
    onSuccess();
    onClose();
  };

  return (
    <Modal
      className={styles.ConfirmModal}
      isOpen={isOpen}
      onClose={onClose}
      styles={styles}
    >
      <p className={styles.Title}>Confirm your transaction</p>
      <div className={styles.AmountContainer}>
        {transaction?.token === ETH ? (
          <Ethereum className={styles.Logo} />
        ) : (
          <Conun className={styles.Logo} />
        )}
        <span className={styles.Amount}>{transaction?.amount} </span>
        <span className={styles.TokenName}>{transaction?.token}</span>
      </div>
      {transaction?.fee && (
        <>
          <span>+</span>
          <div className={styles.FeeContainer}>
            <span className={styles.Amount}>{transaction?.fee}</span>
            <span className={styles.TokenName}>{transaction?.token}</span>
          </div>
        </>
      )}
      <p className={styles.To}>To: {transaction?.to}</p>

      <Button type="button" onClick={onConfirm}>
        Confirm
      </Button>
    </Modal>
  );
}

export default ConfirmModal;
