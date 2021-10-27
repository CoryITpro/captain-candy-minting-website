import { useState, useEffect } from "react"
import DashboardComponent from "components/Dashboard"

const Dashboard = () => {
  const [mintLoading, setMintLoading] = useState(false)

  const [maxMint, setMaxMint] = useState(0)
  const [maxSupply, setMaxSupply] = useState(0)
  const [maxCurrentSupply, setMaxCurrentSupply] = useState(0)

  const [mintInputValue, setMintInputValue] = useState(1)
  const [mintTotal, setMintTotal] = useState(null)
  const [newMint, setNewMint] = useState([])

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
      mintInputValue={mintInputValue}
      increaseMintValue={increaseMintValue}
      decreaseMintValue={decreaseMintValue}
    />
  )
}

export default Dashboard
