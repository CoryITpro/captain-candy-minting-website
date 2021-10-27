import { ethers } from "ethers"
import { maxMint } from "utils/constants"

export const generateInitIds = () => {
  let initIds = []

  for (let i = 0; i < maxMint; i++) {
    initIds.push(i + 1)
  }

  return initIds
}

export const getDiffArray = (source, target) => {
  return source.filter((index) => {
    let tempArray = []
    for (let i = 0; i < target.length; i++) {
      tempArray.push(ethers.BigNumber.from(target[i]).toNumber())
    }

    return tempArray.indexOf(index) < 0
  })
}
