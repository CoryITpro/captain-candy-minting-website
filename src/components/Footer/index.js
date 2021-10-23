import { SuperkrassLogo } from "resources/Images"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDiscord, faTwitter } from "@fortawesome/free-brands-svg-icons"
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
      <a
        href="https://twitter.com/captain_candy"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faTwitter} />
      </a>
    </div>
  </div>
)

export default Footer
