import "dotenv/config";
import {clusterApiUrl, Connection, LAMPORTS_PER_SOL, PublicKey} from "@solana/web3.js";
import {getKeypairFromEnvironment} from "@solana-developers/helpers";
import {getOrCreateAssociatedTokenAccount, mintTo} from "@solana/spl-token";


const connect = new Connection(clusterApiUrl("devnet"), "confirmed");

const account = getKeypairFromEnvironment("SECRET_KEY");

const tokenMintPublicKey = new PublicKey("BNat4w91HqFbXBuD9BKvArAnNeeCtWc4cFCbLLzrLKRd");
const tokenAccountPublicKey = new PublicKey("92xoApsRcNn3HuNCh3EjC7Do9Jhr97F9pkZyeuJQVmhM");
const token2AccountPublicKey = new PublicKey("B217DJ814SVSGSHS7SiRjv3CTFBFnLL41VkMD7sYnqa");

// const tx1 = await mintTo(connect, account, tokenMintPublicKey, tokenAccountPublicKey, account.publicKey, 1000 * LAMPORTS_PER_SOL);
// console.log("Minted 1000 tokens to account", tx1);
// B217DJ814SVSGSHS7SiRjv3CTFBFnLL41VkMD7sYnqa

// @ts-ignore
const tokenAccount = await getOrCreateAssociatedTokenAccount(connect, account, tokenMintPublicKey, token2AccountPublicKey);

// @ts-ignore
const tx2 = await mintTo(connect, account, tokenMintPublicKey, tokenAccount.address, account.publicKey, 10 * LAMPORTS_PER_SOL);
console.log("Minted 10 to my wallet tokens to account", tx2);
