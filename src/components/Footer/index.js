import { SuperkrassLogo } from "resources/Images"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faDiscord,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"
import "./style.scss"

const Footer = () => (
  <div className="footer container flex flex-column">
    <div className="footer-logo flex">
      <img src={SuperkrassLogo} alt="logo" />
    </div>
    <div className="footer-caption flex">
      FOLLOW US. We are going LIVE soon!
    </div>
    <div className="footer-links flex">
      <a href="https://discord.gg/FGf8n8naQB" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faDiscord} />
      </a>
      <a href="https://twitter.com/krassnft" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a
        href="https://instagram.com/captaincandynft"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faInstagram} />
      </a>
    </div>
  </div>
)

export default Footer
