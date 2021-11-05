import { ethers } from "ethers"
import { getContractWithSigner, getOwnerAddress, getPrice } from "./contract"

export const mintNFT = async (
  walletAddress,
  setMintLoading,
  setNewMint,
  randomIds
) => {
  const contract = getContractWithSigner()

  let ownerAddress = await getOwnerAddress()
  let price = await getPrice(randomIds.length)

  contract.on("OnePieceCreated(address, uint256)", (to, newId) => {
    const address = ethers.utils.getAddress(to)
    const newMintId = ethers.BigNumber.from(newId).toNumber()

    setNewMint([address, newMintId])
  })

  try {
    let txhash = await contract.mint(walletAddress, randomIds, {
      value:
        walletAddress === ownerAddress
          ? 0
          : ethers.BigNumber.from(price).mul(1e9).mul(1e9),
      from: walletAddress,
    })

    let res = await txhash.wait()
    setMintLoading(false)

    if (res.transactionHash) {
      return {
        success: true,
        status: `Successfully minted ${randomIds.length} Crypty Athletes.`,
      }
    } else {
      return {
        success: false,
        status: "Transaction failed",
      }
    }
  } catch (err) {
    setMintLoading(false)

    if (err.data.code === -32000) {
      return {
        success: false,
        status: "Insufficent funds for gas",
      }
    } else {
      return {
        success: false,
        status: "Please try again",
      }
    }
  }
}
