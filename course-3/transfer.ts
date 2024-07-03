import "dotenv/config";
import {getKeypairFromEnvironment} from "@solana-developers/helpers";
import {
  clusterApiUrl,
  Connection,
  LAMPORTS_PER_SOL,
  PublicKey,
  sendAndConfirmTransaction,
  SystemProgram,
  Transaction
} from "@solana/web3.js";
import {createMemoInstruction} from "@solana/spl-memo";

const sender = getKeypairFromEnvironment("SECRET_KEY");
console.log("Sender address:", sender.publicKey.toBase58());

const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

const receiver = new PublicKey("B217DJ814SVSGSHS7SiRjv3CTFBFnLL41VkMD7sYnqa")

// @ts-ignore
const balance = await connection.getBalance(sender.publicKey);

console.log("Receiver balance:", balance / LAMPORTS_PER_SOL);

const transaction = new Transaction().add(
  SystemProgram.transfer({
    fromPubkey: sender.publicKey,
    toPubkey: receiver,
    lamports: 0.1 * LAMPORTS_PER_SOL,
  }),
  createMemoInstruction("Hello, Solana!")
);

// @ts-ignore
const signature = await sendAndConfirmTransaction(connection, transaction, [sender]);

console.log("All good! Transaction signature:", signature);

