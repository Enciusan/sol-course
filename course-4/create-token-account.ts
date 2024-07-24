import "dotenv/config";
import {clusterApiUrl, Connection, PublicKey} from "@solana/web3.js";
import {getKeypairFromEnvironment} from "@solana-developers/helpers";
import {getOrCreateAssociatedTokenAccount} from "@solana/spl-token";


const connect = new Connection(clusterApiUrl("devnet"), "confirmed");

const account = getKeypairFromEnvironment("SECRET_KEY");

// BNat4w91HqFbXBuD9BKvArAnNeeCtWc4cFCbLLzrLKRd

const tokenMintPublicKey = new PublicKey("BNat4w91HqFbXBuD9BKvArAnNeeCtWc4cFCbLLzrLKRd");

const tokenAccount = await getOrCreateAssociatedTokenAccount(connect, account, tokenMintPublicKey, account.publicKey);

console.log("Token account address:", tokenAccount.address.toBase58());

//92xoApsRcNn3HuNCh3EjC7Do9Jhr97F9pkZyeuJQVmhM