import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSpinner } from "@fortawesome/free-solid-svg-icons"
import { CaptainCandyInnerShadow } from "resources/Images"
import "./style.scss"

const Mint = ({
  mintInputValue,
  increaseMintValue,
  decreaseMintValue,
  loading = true,
}) => (
  <div className="mint container flex">
    <div className="mint-wrapper flex flex-column">
      <div className="mint-wrapper-caption">JOIN THE CANDYVERSE</div>
      <p>
        We have spent countless hours carefully crafting and tailoiring over 400
        attributes that spin in 4 different categories of traits. Once you mint
        a Captain Candy, a script will create a unique Captain Candy with 4
        randomly selected traits.
      </p>
      <p>
        Nobody knows which Captain Candy you will get, not even the SuperKrass
        Team
      </p>
      <div className="mint-wrapper-cost">
        COST OF NFT: <i>{0.086} ETH</i>
      </div>
      <div className="mint-wrapper-minter flex">
        <button className="flex">
          {loading ? (
            <>
              <FontAwesomeIcon icon={faSpinner} />
              <span>MINTING</span>
            </>
          ) : (
            "MINT NOW!"
          )}
        </button>
        <div className="mint-wrapper-minter-selector flex">
          <button onClick={decreaseMintValue}>-</button>
          <div className="flex">{mintInputValue}</div>
          <button onClick={increaseMintValue}>+</button>
        </div>
      </div>
      {true && (
        <div className="mint-wrapper-connect flex flex-column">
          <p>
            YOU NEED TO CONNECT YOUR WALLET OR YOU WILL NOT BE ABLE TO MINT.
            PLEASE CONNECT YOUR WALLET!
          </p>
          <button>CONNECT WALLET</button>
        </div>
      )}
    </div>
    <div className="mint-decoration flex">
      <img src={CaptainCandyInnerShadow} alt="inner" />
      <div className="mint-decoration-caption flex flex-column">
        <span>10 000</span>
        <span>UNIQUE CAPTAIN CANDY NFTs</span>
      </div>
    </div>
  </div>
)

export default Mint
