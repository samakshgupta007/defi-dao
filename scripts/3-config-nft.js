import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x3ac60Cc74b730Ce27A39E3C27C3482D949f7C247");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Billionaire Club Token",
        description: "This NFT will give you access to DeFiDAO!",
        image: readFileSync("scripts/assets/cake.jpeg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();