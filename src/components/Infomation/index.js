import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCopyright } from "@fortawesome/free-regular-svg-icons"
import InformationItem from "./Item"
import "./style.scss"

const Information = () => (
  <div className="information container flex flex-column">
    <div className="information-title">CAPTAIN CANDY NFT INFO</div>
    <div className="information-wrapper">
      <InformationItem>
        <span>10 000</span>
        <span>Handcrafted-Random Generated NFTs</span>
      </InformationItem>
      <InformationItem>
        <span>0.086 ETH</span>
        <span>PRICE PER MINT + GAS</span>
      </InformationItem>
      <InformationItem>
        <span>
          <FontAwesomeIcon icon={faCopyright} />
        </span>
        <span>
          Includes all creative and commercial rights of your NFT for as long as
          you keep it.
        </span>
      </InformationItem>
      <InformationItem>
        <span>10 000</span>
        <span>Handcrafted-Random Generated NFTs</span>
      </InformationItem>
    </div>
  </div>
)

export default Information
