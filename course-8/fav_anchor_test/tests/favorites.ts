import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { Favorites } from "../target/types/favorites";
import {assert} from "chai";

const web3 = anchor.web3;

describe("fav_anchor_test", () => {
  const provider = anchor.AnchorProvider.env();
  // Configure the client to use the local cluster.
  anchor.setProvider(provider);

  const user = (provider.wallet as anchor.Wallet).payer;

  const program = anchor.workspace.Favorites as Program<Favorites>;

  before(async () => {
    const balance = await provider.connection.getBalance(user.publicKey);
    const balanceInSol = balance / web3.LAMPORTS_PER_SOL;
    const formattedBalance = new Intl.NumberFormat().format(balanceInSol);
    console.log(`Balance: ${formattedBalance}`);
  })

  it("Saved on-chain", async () => {
    const favoriteNumber = new anchor.BN(26);

    const favoriteColor = "green";

    const favoriteHobby = ["coding", "games"]

    await program.methods.setFavorites(favoriteNumber, favoriteColor, favoriteHobby).signers([user]).rpc()


    const favoritesPdaAndBump = web3.PublicKey.findProgramAddressSync([Buffer.from("fav_anchor_test"), user.publicKey.toBuffer()], program.programId);

    const favoritesPda = favoritesPdaAndBump[0];

    const dataFromPda = await program.account.favorites.fetch(favoritesPda);

    assert.equal(dataFromPda.color, favoriteColor);
    assert.equal(dataFromPda.number.toString(), favoriteNumber.toString());
    assert.deepEqual(dataFromPda.hobbies, favoriteHobby)

  })

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
