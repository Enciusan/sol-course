import { FC } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export const AppBar: FC = () => {
  return (
    <div className={styles.AppHeader}>
      <Image src="/solanaLogo.png" height={30} width={200} alt="asd" />
      <span>Wallet-Adapter Example</span>
      <WalletMultiButton />
    </div>
  );
};
