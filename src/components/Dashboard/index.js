import Navbar from "components/Navbar"
import Hero from "components/Hero"
import JoinDiscord from "components/JoinDiscord"
import Collection from "components/Collection"
import Information from "components/Infomation"
import Mint from "components/Mint"
import Roadmap from "components/Roadmap"
import Footer from "components/Footer"

import "./style.scss"

const Dashboard = ({
  mintLoading,
  mintInputValue,
  increaseMintValue,
  decreaseMintValue,
  walletAddress,
  onConnectWalletHandler,
}) => (
  <>
    <Navbar
      walletAddress={walletAddress}
      onConnectWalletHandler={onConnectWalletHandler}
    />
    <Hero />
    <JoinDiscord />
    <Collection />
    <Information />
    <Mint
      mintLoading={mintLoading}
      mintInputValue={mintInputValue}
      increaseMintValue={increaseMintValue}
      decreaseMintValue={decreaseMintValue}
      walletAddress={walletAddress}
      onConnectWalletHandler={onConnectWalletHandler}
    />
    <Roadmap />
    <JoinDiscord />
    <Footer />
  </>
)

export default Dashboard
