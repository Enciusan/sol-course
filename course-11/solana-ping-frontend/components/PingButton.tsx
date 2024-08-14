"use client";

import React, { FC } from "react";
import styles from "../styles/PingButton.module.css";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import * as web3 from "@solana/web3.js";
import { PublicKey } from "@solana/web3.js";

export const PingButton: FC = () => {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  const onClick = async () => {
    if (!connection || !publicKey) {
      console.log("Connection or wallet not available");
      return;
    }

    const PROGRAM_ID = new PublicKey("ChT1B39WKLS8qUrkLvFDXMhEJ4F1XZzwUNHUt4AU9aVa");

    const programDataAccount = new PublicKey("Ah9K7dQ8EHaZqcAsgBW8w37yN2eAy3koFmUn4x3CJtod");

    const tx = new web3.Transaction();

    const instruction = new web3.TransactionInstruction({
      keys: [{ pubkey: programDataAccount, isSigner: false, isWritable: true }],
      programId: PROGRAM_ID,
    });
    tx.add(instruction);

    try {
      const signature = await sendTransaction(tx, connection);
      console.log("Signature", signature);
    } catch (error) {
      console.error("Transaction failed", error);
    }
  };

  const handleSubmit = async (formData: any) => {
    console.log("Form data", formData);
    const walletToSend = new PublicKey(formData.recipientAddress);
    const tx = new web3.Transaction();
    // tx.add();
  };

  return (
    <div className={styles.buttonContainer}>
      <button className={styles.button}>Ping!</button>
      <h4>Send Bonus</h4>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Recipient Address" />
        <input type="number" placeholder="Amount" />
        <button>Send</button>
      </form>
    </div>
  );
};
