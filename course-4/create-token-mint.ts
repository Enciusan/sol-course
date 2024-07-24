import "dotenv/config";
import {clusterApiUrl, Connection} from "@solana/web3.js";
import {getKeypairFromEnvironment} from "@solana-developers/helpers";
import {createMint} from "@solana/spl-token";


const connect = new Connection(clusterApiUrl("devnet"), "confirmed");

const account = getKeypairFromEnvironment("SECRET_KEY");

const tokenMint = await createMint(connect, account, account.publicKey, null, 9);

console.log("Token mint address:", tokenMint.toBase58());