import {clusterApiUrl, Connection, LAMPORTS_PER_SOL, PublicKey} from '@solana/web3.js';

const connection = new Connection(clusterApiUrl("devnet"));

console.log(`✅ Finished! We've connected to the devnet cluster!`);

const stringKey = "HwqrrgPrNx8RuFH2phZonb6C8TNbT9pf8SK8izXXNLPM";

const pubKey = new PublicKey(stringKey);

const lamportsBalance = await connection.getBalance(pubKey);
console.log(`Balance in lamports: ${lamportsBalance}`);
const transformedBalance = lamportsBalance / LAMPORTS_PER_SOL;
console.log(`Balance is: ${transformedBalance}`);
