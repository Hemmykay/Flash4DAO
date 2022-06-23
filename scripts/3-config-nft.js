import sdk from "./1-initialize-sdk.js";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x704e495ede1CcFCa793Ffc9c444dfFFE7585353b");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Flash4Labs Logo",
        description: "This NFT will give you access to Flash4DAO!",
        image: readFileSync("scripts/assets/F4labsNFT.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();