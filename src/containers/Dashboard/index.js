import { useState, useEffect } from "react"
import { connectWallet } from "helpers/wallet"
import DashboardComponent from "components/Dashboard"

const Dashboard = () => {
  const [mintLoading, setMintLoading] = useState(false)

  const [walletAddress, setWalletAddress] = useState("")

  const [maxMint, setMaxMint] = useState(0)
  const [maxSupply, setMaxSupply] = useState(0)
  const [maxCurrentSupply, setMaxCurrentSupply] = useState(0)

  const [mintInputValue, setMintInputValue] = useState(1)
  const [mintTotal, setMintTotal] = useState(null)
  const [newMint, setNewMint] = useState([])

  useEffect(() => {
    const initDatas = async () => {
      if (window.ethereum) {
        onChangeWalletListener()
      }
    }

    initDatas()
  })

  const onConnectWalletHandler = async () => {
    const walletResponse = await connectWallet()

    setWalletAddress(walletResponse.address)
  }

  const onChangeWalletListener = () => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length) {
          setWalletAddress(accounts[0])
        } else {
          setWalletAddress("")
        }
      })

      window.ethereum.on("chainChanged", (chainId) => {
        onConnectWalletHandler()
      })
    }
  }

  const increaseMintValue = () => {
    if (mintInputValue < maxMint) {
      setMintInputValue(mintInputValue + 1)
    }
  }
  const decreaseMintValue = () => {
    if (mintInputValue > 1) {
      setMintInputValue(mintInputValue - 1)
    }
  }

  return (
    <DashboardComponent
      mintLoading={mintLoading}
      mintInputValue={mintInputValue}
      increaseMintValue={increaseMintValue}
      decreaseMintValue={decreaseMintValue}
      walletAddress={walletAddress}
      onConnectWalletHandler={onConnectWalletHandler}
    />
  )
}

export default Dashboard
