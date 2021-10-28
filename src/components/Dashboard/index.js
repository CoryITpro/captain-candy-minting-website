import Sidebar from "components/Sidebar"
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
  showSidebar,
  onHandleSidebar,
  mintLoading,
  mintTotal,
  mintInputValue,
  increaseMintValue,
  decreaseMintValue,
  walletAddress,
  onConnectWalletHandler,
  onMintHandler,
}) => (
  <>
    <Sidebar
      showSidebar={showSidebar}
      onHandleSidebar={onHandleSidebar}
      walletAddress={walletAddress}
      onConnectWalletHandler={onConnectWalletHandler}
    />
    <Navbar
      onHandleSidebar={onHandleSidebar}
      walletAddress={walletAddress}
      onConnectWalletHandler={onConnectWalletHandler}
    />
    <Hero />
    <JoinDiscord />
    <Collection />
    <Information />
    <Mint
      mintLoading={mintLoading}
      mintTotal={mintTotal}
      mintInputValue={mintInputValue}
      increaseMintValue={increaseMintValue}
      decreaseMintValue={decreaseMintValue}
      walletAddress={walletAddress}
      onConnectWalletHandler={onConnectWalletHandler}
      onMintHandler={onMintHandler}
    />
    <Roadmap />
    <JoinDiscord />
    <Footer />
  </>
)

export default Dashboard
