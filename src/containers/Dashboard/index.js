import { useState, useEffect } from "react"
import { connectWallet } from "helpers/wallet"
import DashboardComponent from "components/Dashboard"

const Dashboard = () => {
  const [mintLoading, setMintLoading] = useState(false)
  const [showSidebar, setShowSidebar] = useState(false)

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
    window.addEventListener("resize", getWindowWidth)

    return () => window.removeEventListener("resize", getWindowWidth)
  })

  const getWindowWidth = () => {
    const { innerWidth: width } = window

    if (width > 1024) {
      setShowSidebar(false)
    }
  }

  const onHandleSidebar = () => {
    setShowSidebar(!showSidebar)
  }

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
      showSidebar={showSidebar}
      onHandleSidebar={onHandleSidebar}
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
