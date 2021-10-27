import { ethers } from "ethers"
import contractABI from "abis/Nippleverse.json"
import { ENVS } from "configurations/ethereum"

// Contract can be used to write Contract
export const getContractWithSigner = () => {
  const infuraProvider = new ethers.providers.Web3Provider(window.ethereum)
  const signer = infuraProvider.getSigner()

  const contract = new ethers.Contract(
    ENVS.CONTRACT_ADDRESS,
    contractABI.abi,
    signer
  )

  return contract
}

// Contract can be used to read Contract
const getContractWithoutSigner = () => {
  const infuraProvider = new ethers.providers.Web3Provider(window.ethereum)

  const contract = new ethers.Contract(
    ENVS.CONTRACT_ADDRESS,
    contractABI.abi,
    infuraProvider
  )

  return contract
}

// Get Token Ids of the selected Wallet
export const getTokenIdsOfWallet = async (walletAddress) => {
  const contract = getContractWithSigner()
  let tokenIds = []

  try {
    let ids = await contract.getTokenIdsOfWallet(walletAddress)
    for (let i = 0; i < ids.length; i++) {
      tokenIds.push(ethers.BigNumber.from(ids[i]).toNumber())
    }

    return tokenIds
  } catch (err) {
    return []
  }
}

// Get Current Total Supply from the Contract
export const getCurrentTotalSupply = async () => {
  const contract = getContractWithoutSigner()

  try {
    let totalSupply = await contract.totalSupply()

    return ethers.BigNumber.from(totalSupply).toNumber()
  } catch (err) {
    return 0
  }
}

// Get Max Supply from the Contract
export const getMaxSupply = async () => {
  const contract = getContractWithoutSigner()

  try {
    let maxSupply = await contract.maxSupply()

    return ethers.BigNumber.from(maxSupply).toNumber()
  } catch (err) {
    return 0
  }
}

// Get Max Element Counts from the Contract
export const getCurrentMaxSupply = async () => {
  const contract = getContractWithoutSigner()

  try {
    let currentMaxSupply = await contract.maxSales()

    return ethers.BigNumber.from(currentMaxSupply).toNumber()
  } catch (err) {
    return 0
  }
}

// Get Max Mintable Counts per Click from the Contract
export const getCurrentMaxMint = async () => {
  const contract = getContractWithoutSigner()

  try {
    let currentMaxMint = await contract.maxMint()

    return ethers.BigNumber.from(currentMaxMint).toNumber()
  } catch (err) {
    return 0
  }
}

export const getOccupiedIds = async () => {
  const contract = getContractWithoutSigner()

  try {
    let occupiedList = await contract.occupiedList()

    return occupiedList
  } catch (err) {
    return 0
  }
}

export const getOwnerAddress = async () => {
  const contract = getContractWithoutSigner()

  try {
    let ownerAddress = await contract.owner()

    return ownerAddress
  } catch (err) {
    return ""
  }
}

export const getPrice = async (count) => {
  const contract = getContractWithoutSigner()

  try {
    let price = await contract.price(count)

    return ethers.BigNumber.from(price).div(1e15).toNumber()
  } catch (err) {
    console.log(err.message)
    return 0
  }
}
